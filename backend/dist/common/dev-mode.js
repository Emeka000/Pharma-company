import { isLocalEnv } from './env.js';
export const isDevMode = (config) => config.get('OTP_DEV_ECHO') === 'true' && isLocalEnv(config.get('NODE_ENV'));
//# sourceMappingURL=dev-mode.js.map