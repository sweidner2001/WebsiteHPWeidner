declare module 'klaro' {
    interface KlaroManager {
        getConsent(serviceName: string): boolean;
        updateConsent(serviceName: string, value: boolean): void;
        saveAndApplyConsents(): void;
    }

    interface KlaroConfig {
        [key: string]: unknown;
    }

    export function setup(config: KlaroConfig): void;
    export function getManager(config?: KlaroConfig): KlaroManager;
    export function show(config?: KlaroConfig): void;
}
