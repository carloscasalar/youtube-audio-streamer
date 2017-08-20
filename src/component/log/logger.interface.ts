export interface ILogger {
    debug(message: string, ...supportingData: any[]): void;
    warn(message: string, ...supportingData: any[]): void;
    error(message: string, ...supportingData: any[]): void;
    info(message: string, ...supportingData: any[]): void;
}
