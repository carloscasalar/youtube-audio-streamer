const defaults = require('../../config/config.json');
import { IConfiguration } from '../component/config/iconfiguration';

export class Configuration implements IConfiguration {
    public port: number;

    constructor() {
        this.port = process.env.PORT || defaults.port;
    }
}
