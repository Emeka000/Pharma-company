"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Camera, Check, CircleAlert, FileUp, Info, MapPin, Minus, Plus, Search, ShieldCheck, Snowflake, X } from "lucide-react";
import { Badge } from "./ui";
import DeliverTo from "./DeliverTo";
import PayButton from "./PayButton";
import SignInPanel from "./SignInPanel";
import { api, ApiError, formatKobo, type ApiOrder, type ApiQuote } from "@/lib/api";
import { displayName, isStaff, maskPhone, useAuth, type User } from "@/lib/auth";
import { naira, type Product } from "@/lib/catalog";
import { clock, etaLabel, useDeliveryArea, useDropoffPin, useLiveDelivery } from "@/lib/delivery";
import { useCatalog } from "@/lib/useCatalog";

type Line = { product: Product; qty: number };

const ADDRESS_KEY = "pilbridge-last-address";
/** The bag survives a reload or a trip to the scan page (this tab only). */
const BAG_KEY = "pilbridge-bag";

function ClassBadge({ p }: { p: Product }) {
  return (
    <span className="flex flex-wrap gap-1.5">
      {p.classification === "OTC" && <Badge tone="otc">OTC</Badge>}
      {p.classification === "POM" && <Badge tone="pom">Rx required</Badge>}
      {p.classification === "Device" && <Badge tone="device">Device</Badge>}
      {p.coldChain && (
        <Badge tone="cold">
          <Snowflake className="h-2.5 w-2.5" /> 2–8 °C
        </Badge>
      )}
    </span>
  );
}

/** A small real JPEG, so the demo can exercise the upload path without a camera. */
async function sampleRxFile(): Promise<File> {
  const c = document.createElement("canvas");
  c.width = 600;
  c.height = 800;
  const g = c.getContext("2d")!;
  g.fillStyle = "#f6f3ea";
  g.fillRect(0, 0, 600, 800);
  g.fillStyle = "#1c2a5a";
  g.font = "28px Georgia";
  g.fillText("Sample prescription — demo only", 40, 80);
  const blob = await new Promise<Blob>((r) => c.toBlob((b) => r(b!), "image/jpeg", 0.85));
  return new File([blob], "sample-prescription.jpg", { type: "image/jpeg" });
}

export default function OrderClient() {
  const { products, pharmacies, loading, offline } = useCatalog();
  const { user, signOut } = useAuth();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [rxOnly, setRxOnly] = useState<"all" | "OTC" | "POM">("all");
  const [bag, setBag] = useState<Line[]>([]);
  const [rxFile, setRxFile] = useState<File | null>(null);
  const [address, setAddress] = useState("");
  const [area, setArea] = useDeliveryArea();
  const [pin, setPin] = useDropoffPin();
  const quotedArea = useRef<string | null>(null);
  const [quotes, setQuotes] = useState<ApiQuote[] | null>(null);
  const [pharmacyId, setPharmacyId] = useState<string | null>(null);
  const [askSignIn, setAskSignIn] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [placed, setPlaced] = useState<ApiOrder | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const camRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const bagLoaded = useRef(false);

  useEffect(() => {
    try {
      setAddress(localStorage.getItem(ADDRESS_KEY) ?? "");
    } catch {}
  }, []);

  // Restore the bag once the catalogue is in, with current product details; then keep it saved.
  useEffect(() => {
    if (bagLoaded.current || !products.length) return;
    bagLoaded.current = true;
    try {
      const saved = JSON.parse(sessionStorage.getItem(BAG_KEY) ?? "[]") as { id: string; qty: number }[];
      setBag(saved.flatMap((l) => {
        const product = products.find((p) => p.id === l.id);
        return product ? [{ product, qty: l.qty }] : [];
      }));
    } catch {}
  }, [products]);
  useEffect(() => {
    if (!bagLoaded.current) return;
    try {
      sessionStorage.setItem(BAG_KEY, JSON.stringify(bag.map((l) => ({ id: l.product.id, qty: l.qty }))));
    } catch {}
  }, [bag]);

  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category)))], [products]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (rxOnly === "OTC" && p.classification === "POM") return false;
      if (rxOnly === "POM" && p.classification !== "POM") return false;
      return !q || [p.name, p.generic, p.category, p.form, p.uses ?? ""].some((f) => f.toLowerCase().includes(q));
    });
  }, [products, query, cat, rxOnly]);

  // Price the bag at every pharmacy whenever it changes.
  const basketKey = bag.map((l) => `${l.product.id}:${l.qty}`).join(",");
  useEffect(() => {
    if (!bag.length || offline) {
      setQuotes(null);
      return;
    }
    const t = window.setTimeout(() => {
      const items = bag.map((l) => ({ productId: l.product.id, quantity: l.qty }));
      api<ApiQuote[]>("/quotes", { method: "POST", auth: false, body: { items, ...(area ? { area } : {}) } })
        .then((qs) => {
          setQuotes(qs);
          // With an area, quotes come fastest first: pick the fastest pharmacy that has everything
          // (again whenever the area changes). Without one, the cheapest.
          const areaChanged = quotedArea.current !== area;
          quotedArea.current = area;
          setPharmacyId((current) => {
            if (!areaChanged && current && qs.some((q) => q.pharmacy.id === current && q.unavailable === 0)) return current;
            const complete = qs.filter((q) => q.unavailable === 0);
            const best = area ? complete[0] : [...complete].sort((a, b) => a.totalKobo - b.totalKobo)[0];
            return best?.pharmacy.id ?? current ?? qs[0]?.pharmacy.id ?? null;
          });
        })
        .catch(() => setQuotes(null));
    }, 250);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basketKey, offline, area]);

  const needsRx = bag.some((l) => l.product.classification === "POM");
  const quote = quotes?.find((q) => q.pharmacy.id === pharmacyId) ?? null;
  const live = useLiveDelivery({ pharmacyId: quote?.pharmacy.id ?? null, pin, prescription: needsRx, coldChain: bag.some((l) => !!l.product.coldChain), address });
  const deliveryKobo = live?.deliveryKobo ?? quote?.deliveryKobo ?? 0;
  const totalKobo = quote ? quote.subtotalKobo + deliveryKobo + quote.serviceKobo : 0;
  const pharmacyName = quote?.pharmacy.name ?? pharmacies.find((p) => p.id === pharmacyId)?.name;
  const canCheckout = bag.length > 0 && !offline && !!quote && quote.unavailable === 0 && (!needsRx || !!rxFile) && !!area && address.trim().length >= 5;

  const add = (p: Product) =>
    setBag((b) => {
      const hit = b.find((l) => l.product.id === p.id);
      if (hit) return b.map((l) => (l.product.id === p.id ? { ...l, qty: Math.min(l.qty + 1, 5) } : l));
      return [...b, { product: p, qty: 1 }];
    });

  const setQty = (id: string, d: number) =>
    setBag((b) =>
      b.flatMap((l) => {
        if (l.product.id !== id) return [l];
        const qty = l.qty + d;
        return qty <= 0 ? [] : [{ ...l, qty: Math.min(qty, 5) }];
      }),
    );

  async function placeOrder(signedIn?: User) {
    const who = signedIn ?? user;
    setError(null);
    if (!who || !who.profileComplete) {
      setAskSignIn(true);
      return;
    }
    if (isStaff(who)) {
      setError("Pharmacy staff accounts can’t place patient orders. Sign in with a personal number.");
      return;
    }
    if (!quote) return;
    setBusy(true);
    try {
      let prescriptionId: string | undefined;
      if (needsRx && rxFile) {
        const form = new FormData();
        form.append("image", rxFile);
        prescriptionId = (await api<{ id: string }>("/prescriptions", { method: "POST", form })).id;
      }
      const order = await api<ApiOrder>("/orders", {
        method: "POST",
        body: {
          pharmacyId: quote.pharmacy.id,
          deliveryAddress: address.trim(),
          deliveryArea: area,
          ...(pin ? { dropoffLat: pin.lat, dropoffLng: pin.lng } : {}),
          ...(pin && live?.quoteId ? { deliveryQuoteId: live.quoteId } : {}),
          items: bag.map((l) => ({ productId: l.product.id, quantity: l.qty })),
          ...(prescriptionId ? { prescriptionId } : {}),
        },
      });
      try {
        localStorage.setItem(ADDRESS_KEY, address.trim());
      } catch {}
      setPlaced(order);
      setBag([]);
      setRxFile(null);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "We couldn’t place your order. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto grid max-w-[1240px] gap-10 px-4 pb-24 pt-10 sm:px-8 lg:grid-cols-[1fr_380px]">
      {/* ——— Catalogue ——— */}
      <div className="min-w-0">
        <label className="flex items-center gap-3 border border-line bg-coal px-4 transition-colors focus-within:border-gold">
          <Search className="h-4.5 w-4.5 shrink-0 text-mute" strokeWidth={1.75} />
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or condition — e.g. malaria, typhoid, amlodipine"
            className="h-14 w-full bg-transparent text-[15px] text-bone placeholder:text-mute focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search" className="text-mute hover:text-bone">
              <X className="h-4 w-4" />
            </button>
          )}
        </label>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="-mx-1 flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-[2px] border px-3 py-1.5 text-[12.5px] transition-colors ${
                  cat === c ? "border-gold bg-gold text-ink" : "border-line text-stone hover:border-stone hover:text-bone"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex border border-line font-mono text-[11px]">
            {(["all", "OTC", "POM"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setRxOnly(k)}
                className={`px-3 py-1.5 uppercase tracking-[0.06em] transition-colors ${rxOnly === k ? "bg-graphite text-gold-soft" : "text-mute hover:text-bone"}`}
              >
                {k === "all" ? "All" : k === "OTC" ? "No Rx" : "Rx only"}
              </button>
            ))}
          </div>
        </div>

        {offline && (
          <div className="mt-6 flex gap-3 border-l-2 border-warn bg-warn/10 px-4 py-3.5 text-[13.5px] leading-relaxed text-bone">
            <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-warn" />
            <p>We can&apos;t reach Pilbridge right now, so you&apos;re seeing a sample catalogue. Ordering will be back shortly.</p>
          </div>
        )}

        <div className="mt-6 flex gap-3 border-l-2 border-gold bg-gold-wash px-4 py-3.5 text-[13.5px] leading-relaxed text-bone">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
          <p>
            Prescription-only medicines need a valid prescription and a pharmacist&apos;s review before they leave the
            pharmacy. We never suggest substitutes — if one is appropriate, your pharmacist will contact you.{" "}
            <Link href="/scan" className="whitespace-nowrap text-gold underline-offset-2 hover:underline">
              Snap a paper prescription →
            </Link>
          </p>
        </div>

        <div className="mt-8 flex items-baseline justify-between border-b border-line pb-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-mute">
            {loading ? "Loading…" : `${results.length} product${results.length === 1 ? "" : "s"}`}
          </p>
          <p className="font-mono text-[11px] text-mute">{offline ? "Sample catalogue · illustrative prices" : "Live stock · verified pharmacies"}</p>
        </div>

        <ul>
          {results.map((p) => {
            const inBag = bag.find((l) => l.product.id === p.id);
            const soldOut = p.inStock === false;
            const pickupOnly = p.deliveryAllowed === false;
            return (
              <li key={p.id} className="grid gap-4 border-b border-line-soft py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="font-display text-[24px] leading-none text-ivory">
                      {p.name} <span className="text-stone">{p.strength !== "—" && p.strength}</span>
                    </h3>
                    <ClassBadge p={p} />
                    {pickupOnly && <Badge tone="warn">Pharmacy pickup only</Badge>}
                  </div>
                  <p className="mt-2 text-[13.5px] text-stone">
                    {p.generic} · {p.form} · {p.pack}
                  </p>
                  {p.uses && <p className="mt-1.5 text-[13px] text-bone">Used for: {p.uses}</p>}
                  <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] text-mute">
                    {p.maker !== "—" && <span>{p.maker}</span>}
                    <span>Store: {p.storage}</span>
                    <span className="flex items-center gap-1 text-stone">
                      <MapPin className="h-3 w-3" /> {soldOut ? "Out of stock nearby" : `${p.pharmacies} licensed pharmac${p.pharmacies === 1 ? "y" : "ies"} nearby`}
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between gap-6 sm:justify-end">
                  <div className="text-right">
                    <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-mute">from</p>
                    <p className="text-[18px] font-medium text-bone">{soldOut ? "—" : naira(p.price)}</p>
                  </div>
                  <button
                    onClick={() => add(p)}
                    disabled={soldOut || pickupOnly}
                    className={`min-w-[132px] rounded-[3px] border px-4 py-2.5 text-[13px] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                      inBag ? "border-gold/50 text-gold-soft hover:border-gold" : "border-line text-bone hover:border-gold hover:text-gold-soft"
                    }`}
                  >
                    {pickupOnly ? "Not delivered" : soldOut ? "Out of stock" : inBag ? `In bag · ${inBag.qty}` : p.classification === "POM" ? "Add · needs Rx" : "Add to bag"}
                  </button>
                </div>
              </li>
            );
          })}
          {!loading && results.length === 0 && (
            <li className="py-16 text-center">
              <p className="font-display text-[26px] text-bone">Nothing matches “{query}”.</p>
              <p className="mt-2 text-[14px] text-stone">Try the generic name, or ask a pharmacist — we can check partner stock for you.</p>
            </li>
          )}
        </ul>

        <p className="mt-8 text-[12.5px] leading-relaxed text-mute">
          Controlled medicines are not available on Pilbridge. Product details are for identification only and are not a
          substitute for advice from your doctor or pharmacist.
        </p>
      </div>

      {/* ——— Bag ——— */}
      <aside id="prescription" className="lg:sticky lg:top-[120px] lg:self-start">
        <div className="border border-line bg-coal">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <h2 className="font-display text-[24px] leading-none text-ivory">Your order</h2>
            <span className="font-mono text-[11px] text-mute">{bag.reduce((s, l) => s + l.qty, 0)} items</span>
          </div>

          {placed ? (
            <div className="px-5 py-10 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
                <Check className="h-5 w-5" />
              </span>
              <p className="mt-5 font-display text-[26px] leading-tight text-ivory">
                {placed.status === "ACCEPTED" && placed.paymentStatus === "UNPAID" ? `Order ${placed.code} — pay to confirm` : `Order ${placed.code} placed`}
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-stone">
                {placed.status === "PHARMACIST_REVIEW"
                  ? `Your prescription is with a pharmacist at ${placed.pharmacy.name}. Once it’s approved, you’ll pay from the tracking page.`
                  : placed.paymentStatus === "PAID"
                    ? `Paid — ${placed.pharmacy.name} is getting your order ready${placed.arriveBy ? `. Arriving by ${clock(placed.arriveBy)}` : ""}.`
                    : `${placed.pharmacy.name} starts preparing your order as soon as you’ve paid.`}
              </p>
              <p className="mt-3 font-mono text-[12px] text-mute">Total {formatKobo(placed.totalKobo)}</p>
              {placed.status === "ACCEPTED" && placed.paymentStatus === "UNPAID" && (
                <div className="mt-6 text-left">
                  <PayButton order={placed} autoStart onPaid={setPlaced} />
                </div>
              )}
              <Link href={`/track?code=${placed.code}`} className="mt-6 inline-flex items-center gap-1.5 text-[14px] text-gold hover:text-gold-soft">
                Track this order <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ) : bag.length === 0 ? (
            <div className="space-y-3 px-5 py-6">
              <p className="text-[14px] text-stone">Your bag is empty. How would you like to order?</p>
              <Link href="/scan" className="flex items-start gap-3 border border-gold/40 bg-gold-wash p-4 transition-colors hover:border-gold">
                <Camera className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span>
                  <span className="block text-[14px] text-bone">Snap your prescription</span>
                  <span className="mt-0.5 block text-[12.5px] leading-relaxed text-mute">We read it and fill your bag. A pharmacist checks it, then you pay.</span>
                </span>
              </Link>
              <button onClick={() => searchRef.current?.focus()} className="flex w-full items-start gap-3 border border-line p-4 text-left transition-colors hover:border-stone">
                <Search className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span>
                  <span className="block text-[14px] text-bone">Just order what you need</span>
                  <span className="mt-0.5 block text-[12.5px] leading-relaxed text-mute">Search and add medicines, then continue to payment.</span>
                </span>
              </button>
            </div>
          ) : (
            <>
              <ul className="divide-y divide-line-soft px-5">
                {bag.map((l) => {
                  const line = quote?.lines.find((x) => x.productId === l.product.id);
                  return (
                    <li key={l.product.id} className="flex items-start justify-between gap-3 py-4">
                      <div className="min-w-0">
                        <p className="truncate text-[14px] text-bone">
                          {l.product.name} {l.product.strength !== "—" && l.product.strength}
                        </p>
                        <div className="mt-1.5">
                          <ClassBadge p={l.product} />
                        </div>
                        {line && !line.available && <p className="mt-1.5 text-[12px] text-alert">Not available at {pharmacyName}</p>}
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-2">
                        <span className="text-[14px] text-bone">
                          {line?.unitPriceKobo != null ? formatKobo(line.unitPriceKobo * l.qty) : naira(l.product.price * l.qty)}
                        </span>
                        <div className="flex items-center border border-line">
                          <button onClick={() => setQty(l.product.id, -1)} className="p-1.5 text-stone hover:text-bone" aria-label="Decrease">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center font-mono text-[12px]">{l.qty}</span>
                          <button onClick={() => setQty(l.product.id, 1)} className="p-1.5 text-stone hover:text-bone" aria-label="Increase">
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {quotes && quotes.length > 0 && (
                <div className="border-t border-line">
                  <p className="eyebrow px-5 pt-4 text-gold">Fulfilled by</p>
                  <ul className="mt-2">
                    {quotes.map((q) => (
                      <li key={q.pharmacy.id}>
                        <button
                          onClick={() => setPharmacyId(q.pharmacy.id)}
                          className={`flex w-full items-center gap-3 px-5 py-2.5 text-left transition-colors ${pharmacyId === q.pharmacy.id ? "bg-gold-wash" : "hover:bg-char"}`}
                        >
                          <span className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${pharmacyId === q.pharmacy.id ? "border-gold" : "border-line"}`}>
                            {pharmacyId === q.pharmacy.id && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[13.5px] text-bone">{q.pharmacy.name}</span>
                            <span className="block font-mono text-[10.5px] text-mute">
                              {q.pharmacy.area} · {q.unavailable ? `${q.unavailable} unavailable` : "has everything"}
                              {q.etaMinutes != null && <span className="text-stone"> · delivery {etaLabel(q.etaMinutes)}</span>}
                            </span>
                          </span>
                          <span className="text-[13.5px] text-bone">{formatKobo(q.totalKobo)}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {needsRx ? (
                <div className="border-t border-line px-5 py-5">
                  <p className="eyebrow text-gold">Prescription required</p>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-stone">
                    Items marked Rx need a prescription. Add or snap it — a pharmacist checks it, then you pay.
                  </p>
                  {[fileRef, camRef].map((ref, i) => (
                    <input
                      key={i}
                      ref={ref}
                      type="file"
                      accept={ref === camRef ? "image/*" : ".pdf,.jpg,.jpeg,.png,.webp"}
                      capture={ref === camRef ? "environment" : undefined}
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) setRxFile(f);
                        e.target.value = "";
                      }}
                    />
                  ))}
                  {!rxFile ? (
                    <>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {(
                          [
                            [camRef, Camera, "Snap a photo"],
                            [fileRef, FileUp, "Upload a file"],
                          ] as const
                        ).map(([ref, Icon, text]) => (
                          <button
                            key={text}
                            onClick={() => ref.current?.click()}
                            className="flex flex-col items-center gap-2 border border-dashed border-gold/40 bg-gold-wash px-3 py-5 text-center transition-colors hover:border-gold"
                          >
                            <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                            <span className="text-[13px] text-bone">{text}</span>
                          </button>
                        ))}
                      </div>
                      <p className="mt-2 text-center font-mono text-[10.5px] text-mute">Photo, PDF, JPG or PNG · max 10 MB</p>
                      <button
                        onClick={async () => setRxFile(await sampleRxFile())}
                        className="mt-2 w-full text-center font-mono text-[10.5px] text-mute underline-offset-2 hover:text-stone hover:underline"
                      >
                        Use a sample file for this demo
                      </button>
                    </>
                  ) : (
                    <div className="mt-3 flex items-center justify-between gap-3 border border-line-soft bg-char p-3.5">
                      <p className="truncate text-[13px] text-bone">{rxFile.name}</p>
                      <button onClick={() => setRxFile(null)} className="font-mono text-[10.5px] text-mute hover:text-alert">Remove</button>
                    </div>
                  )}
                  <p className="mt-3 text-[12px] leading-relaxed text-mute">Sent securely to the pharmacist only when you place the order.</p>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-3 border-t border-line px-5 py-4">
                  <p className="text-[12.5px] text-stone">No prescription needed — you can pay straight away.</p>
                  <Link href="/scan" className="inline-flex shrink-0 items-center gap-1.5 text-[12.5px] text-gold hover:text-gold-soft">
                    <Camera className="h-3.5 w-3.5" /> Have one? Snap it
                  </Link>
                </div>
              )}

              <div className="border-t border-line px-5 py-5">
                <DeliverTo area={area} onArea={setArea} address={address} onAddress={setAddress} pin={pin} onPin={setPin} />
                {quote?.etaMinutes != null && (
                  <p className="mt-3 text-[12.5px] text-stone">
                    Arrives about <span className="text-bone">{etaLabel(quote.etaMinutes)}</span> after you pay, from {quote.pharmacy.name}.
                  </p>
                )}

                {quote && (
                  <dl className="mt-5 space-y-2 text-[13.5px]">
                    <div className="flex justify-between text-stone"><dt>Subtotal</dt><dd>{formatKobo(quote.subtotalKobo)}</dd></div>
                    <div className="flex justify-between text-stone">
                      <dt>Delivery{live?.source === "courier" && <span className="text-mute"> · live price to your pin</span>}</dt>
                      <dd>{formatKobo(deliveryKobo)}</dd>
                    </div>
                    <div className="flex justify-between text-stone"><dt>Service fee</dt><dd>{formatKobo(quote.serviceKobo)}</dd></div>
                    <div className="flex justify-between border-t border-line-soft pt-3 text-[15px] text-ivory">
                      <dt>Total</dt>
                      <dd className="font-medium">{formatKobo(totalKobo)}</dd>
                    </div>
                  </dl>
                )}

                {user?.profileComplete && (
                  <p className="mt-5 flex items-center justify-between gap-3 border-t border-line-soft pt-4 text-[12.5px] text-stone">
                    <span>
                      Ordering as <span className="text-bone">{displayName(user)}</span>
                      {user.phone && <> · {maskPhone(user.phone)}</>}
                    </span>
                    <button onClick={signOut} className="shrink-0 text-mute hover:text-gold">Not you?</button>
                  </p>
                )}

                {error && <p className="mt-4 flex items-start gap-2 text-[13px] text-alert"><CircleAlert className="mt-0.5 h-4 w-4 shrink-0" /> {error}</p>}

                {askSignIn && !user?.profileComplete ? (
                  <div className="mt-5 border-t border-line-soft pt-5">
                    <div className="mb-4 flex items-baseline justify-between">
                      <p className="eyebrow text-gold">Your details</p>
                      <button onClick={() => setAskSignIn(false)} className="text-[12.5px] text-mute hover:text-bone">Cancel</button>
                    </div>
                    <p className="mb-4 text-[13px] leading-relaxed text-stone">
                      {user
                        ? "Confirm your name for the pharmacist, then we’ll place your order."
                        : "Sign in so the pharmacist knows who’s ordering — your basket stays put. New here? This creates your account."}
                    </p>
                    <SignInPanel
                      onDone={(u) => {
                        setAskSignIn(false);
                        placeOrder(u);
                      }}
                    />
                  </div>
                ) : (
                  <>
                    <button
                      disabled={!canCheckout || busy}
                      onClick={() => placeOrder()}
                      className="mt-5 w-full rounded-[3px] bg-gold py-3.5 text-[14px] font-medium text-ink transition-colors hover:bg-gold-soft disabled:cursor-not-allowed disabled:bg-graphite disabled:text-mute"
                    >
                      {busy
                        ? needsRx
                          ? "Sending…"
                          : "Creating your order…"
                        : offline
                          ? "Ordering unavailable"
                          : needsRx && !rxFile
                            ? "Add your prescription to continue"
                            : quote && quote.unavailable > 0
                              ? "Choose a pharmacy with everything"
                              : !area
                                ? "Choose your delivery area"
                                : address.trim().length < 5
                                  ? "Add a delivery address"
                                : needsRx
                                  ? "Send to pharmacist"
                                  : "Continue to payment"}
                    </button>
                    <p className="mt-3 text-center font-mono text-[10.5px] text-mute">
                      {needsRx ? "You’ll pay once a pharmacist approves your prescription" : "Secured by Flutterwave · Card · Transfer · USSD"}
                    </p>
                  </>
                )}
              </div>
            </>
          )}
        </div>

        <div className="mt-4 flex items-start gap-3 border border-line-soft px-5 py-4">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
          <p className="text-[12.5px] leading-relaxed text-stone">
            Fulfilled by a PCN-licensed partner pharmacy. Your prescription is visible only to the reviewing pharmacist —
            never to the rider.
          </p>
        </div>
      </aside>
    </div>
  );
}
