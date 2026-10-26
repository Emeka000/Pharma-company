export function appUrl(config) {
    const url = config.get('APP_URL') || (config.get('CORS_ORIGIN') ?? 'http://localhost:3000').split(',')[0];
    return url.replace(/\/$/, '');
}
//# sourceMappingURL=app-url.js.map