import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { IConfiguration } from '../config/iconfiguration';
import { ILogger } from '../log/logger.interface';

export class Starter {
    private port: number;

    constructor(config: IConfiguration, private app: INestApplication, private log: ILogger) {
        this.port = config.port;
    }

    public start(): INestApplication {
        this.listenEndProcessEvents();
        const server = this.app.listen(this.port, () => this.onListening());
        server.on('error', (err) => this.onError(err));
        return server;
    }

    public shutdown(): void {
        this.app.close();
    }

    protected listenEndProcessEvents() {
        process.on('SIGTERM', () => {
            this.log.info('Received SIGTERM');

            this.shutdown();
        });

        process.on('SIGINT', () => {
            this.log.info('Received SIGINT');

            this.shutdown();
        });
    }

    private onError(error: IError): void {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind = this.getPortBind();

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                this.log.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                this.log.error(`{bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    private onListening(): void {
        const bind = this.getPortBind();
        this.log.info(`Listening on ${bind}`);
    }

    private getPortBind(): string {
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
