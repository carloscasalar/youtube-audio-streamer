import { Component } from '@nestjs/common';
import * as scribeJS from 'scribe-js';
import { ILogger } from '../../component/log/logger.interface';

scribeJS();
// tslint:disable-next-line
const logger = (process['console'] as any);

@Component()
export class LoggerService implements ILogger {
    public debug(message: string, ...supportingData: any[]): void {
        this.emitLogMessage("debug", message, supportingData);
    }

    public warn(message: string, ...supportingData: any[]): void {
        this.emitLogMessage("warn", message, supportingData);
    }

    public error(message: string, ...supportingData: any[]): void {
        this.emitLogMessage("error", message, supportingData);
    }

    public info(message: string, ...supportingData: any[]): void {
        this.emitLogMessage("info", message, supportingData);
    }

    private emitLogMessage(msgType: "debug"| "info"| "warn"| "error", msg: string, supportingData: any[]) {
        if (supportingData.length > 0) {
            logger[msgType](msg, supportingData);
        }else {
            logger[msgType](msg);
        }
    }
}
