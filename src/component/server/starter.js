"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Starter = (function () {
    function Starter(config, app) {
        this.app = app;
        this.port = config.port;
    }
    Starter.prototype.start = function () {
        var _this = this;
        this.listenEndProcessEvents();
        var server = this.app.listen(this.port, function () { return _this.onListening(); });
        server.on('error', function (err) { return _this.onError(err); });
    };
    Starter.prototype.shutdown = function () {
        this.app.close();
    };
    Starter.prototype.listenEndProcessEvents = function () {
        var _this = this;
        process.on('SIGTERM', function () {
            console.info('Received SIGTERM');
            _this.shutdown();
        });
        process.on('SIGINT', function () {
            console.info('Received SIGINT');
            _this.shutdown();
        });
    };
    Starter.prototype.onError = function (error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        var bind = this.getPortBind();
        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + " requires elevated privileges");
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error("{bind} is already in use");
                process.exit(1);
                break;
            default:
                throw error;
        }
    };
    Starter.prototype.onListening = function () {
        var bind = this.getPortBind();
        console.info("Listening on " + bind);
    };
    Starter.prototype.getPortBind = function () {
        var port = this.port;
        var bind = typeof port === 'string' ?
            'Pipe ' + port :
            'Port ' + port;
        return bind;
    };
    return Starter;
}());
exports.Starter = Starter;
