import * as chai from 'chai';
import { spy, stub } from 'sinon';
import * as sinonChai from 'sinon-chai';

import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';

import { INestMicroservice } from '@nestjs/common/interfaces/nest-microservice.interface';
import { IConfiguration } from '../../../src/component/config/iconfiguration';
import { Starter } from '../../../src/component/server/starter';

const expect = chai.expect;
chai.use(sinonChai);

describe('Starter tests', () => {
    let configuration: IConfiguration;
    let app: INestApplication;
    let starter: Starter;
    let onServerStub;
    beforeEach('instantiating mocks', () => {

        const connectMicroservice = () => {
            return {
                close: () => {
                },
                listen: (callback) => callback(),
                useWebSocketAdapter: (adapter) => {
                },
            };
        };

        app = {
            close: () => {
            },
            connectMicroservice,
            getMicroservices: () => [],
            init: () => {
            },
            listen: () => {
            },
            setGlobalPrefix: () => {
            },
            startAllMicroservices: () => {
            },
            useGlobalFilters: () => {
            },
            useGlobalPipes: () => {
            },
            useWebSocketAdapter: () => {
            },
        };
        onServerStub = stub();
        stub(app, 'listen').returns({
            on: onServerStub,
        });

        configuration = {
            port: 4000,
        };

        starter = new Starter(configuration, app);
        spy(starter, 'shutdown');
    });

    after(() => {
        process.removeAllListeners('SIGTERM');
        process.removeAllListeners('SIGINT');
    });

    describe('start function', () => {
        it('should call listen once', () => {
            starter.start();
            // tslint:disable-next-line:no-unused-expression
            expect(app.listen).to.have.been.calledOnce;
        });

        it('should call listen with port in configuration', () => {
            starter.start();
            expect(app.listen).to.have.been.calledWith(configuration.port);
        });
    });
});
