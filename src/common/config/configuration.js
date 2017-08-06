"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaults = require('../../../config/config.json');
var Configuration = (function () {
    function Configuration() {
        var envPort = process.env.PORT || defaults.port;
        this.port = this.normalizePort(envPort);
    }
    Configuration.prototype.normalizePort = function (val) {
        var intPort = parseInt(val, 10);
        if (isNaN(intPort)) {
            throw TypeError('Port should be a number');
        }
        if (intPort >= 0) {
            // port number
            return intPort;
        }
        throw TypeError('Port should be a number bigger than zero');
    };
    return Configuration;
}());
exports.Configuration = Configuration;
