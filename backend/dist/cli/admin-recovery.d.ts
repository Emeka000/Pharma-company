import { type INestApplicationContext } from '@nestjs/common';
export type RecoveryArgs = {
    phone?: string;
    reason?: string;
    enable?: boolean;
    force?: boolean;
    yes?: boolean;
};
type Io = {
    print: (line: string) => void;
    confirm: (question: string) => Promise<string>;
};
export declare function parseArgs(argv: string[]): RecoveryArgs;
export declare function runRecovery(app: INestApplicationContext, args: RecoveryArgs, io: Io): Promise<number>;
export {};
