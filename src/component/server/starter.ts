import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { IConfiguration } from '../config/iconfiguration';

export class Starter {
    private port: number;

    constructor(config: IConfiguration, private app: INestApplication) {
        this.port = this.normalizePort(config.port);
    }

    public start() {
        this.listenEndProcessEvents();
        const server = this.app.listen(this.port, () => this.onListening());
        server.on('error', (err) => this.onError(err));
    }

    private listenEndProcessEvents() {
        process.on('SIGTERM', () => {
            console.info('Received SIGTERM');

            this.shutdown();
        });

        process.on('SIGINT', () => {
            console.info('Received SIGINT');

            this.shutdown();
        });
    }

    private shutdown() {
        this.app.close();
    }

    private normalizePort(val: any) {
        const port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        throw TypeError('Port should be a number bigger than zero');
    }

    private onError(error: IError) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind = this.getPortBind();

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`{bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    private onListening() {
        const bind = this.getPortBind();
        console.info(`Listening on ${bind}`);
    }

    private getPortBind() {
        const port = this.port;
        const bind = typeof port === 'string' ?
            'Pipe ' + port :
            'Port ' + port;
        return bind;
    }
}

interface IError extends Error {
    syscall: string;
    code: string;
}
