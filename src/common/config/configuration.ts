const defaults = require('../../../config/config.json');
import { IConfiguration } from '../../component/config/iconfiguration';

export class Configuration implements IConfiguration {
    public port: number;

    constructor() {
        const envPort = process.env.PORT || defaults.port;
        this.port = this.normalizePort(envPort);
    }

    private normalizePort(val: any): number {
        const intPort = parseInt(val, 10);

        if (isNaN(intPort)) {
            throw TypeError('Port should be a number');
        }

        if (intPort >= 0) {
            // port number
            return intPort;
        }

        throw TypeError('Port should be a number bigger than zero');
    }
}
