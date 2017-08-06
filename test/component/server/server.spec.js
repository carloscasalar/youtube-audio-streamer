"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var sinon_1 = require("sinon");
var sinonChai = require("sinon-chai");
var starter_1 = require("../../../src/component/server/starter");
var expect = chai.expect;
chai.use(sinonChai);
describe('Starter tests', function () {
    var configuration;
    var app;
    var starter;
    var onServerStub;
    beforeEach('instantiating mocks', function () {
        app = {
            close: function () {
            },
            connectMicroservice: undefined,
            getMicroservices: function () { return []; },
            init: function () {
            },
            listen: function () {
            },
            setGlobalPrefix: function () {
            },
            startAllMicroservices: function () {
            },
            useGlobalFilters: function () {
            },
            useGlobalPipes: function () {
            },
            useWebSocketAdapter: function () {
            },
        };
        onServerStub = sinon_1.stub();
        sinon_1.stub(app, 'listen').returns({
            on: onServerStub,
        });
        configuration = {
            port: 4000,
        };
        starter = new starter_1.Starter(configuration, app);
        sinon_1.spy(starter, 'shutdown');
    });
    after(function () {
        process.removeAllListeners('SIGTERM');
        process.removeAllListeners('SIGINT');
    });
    describe('start function', function () {
        it('should call listen once', function () {
            starter.start();
            // tslint:disable-next-line:no-unused-expression
            expect(app.listen).to.have.been.calledOnce;
        });
        it('should call listen with port in configuration', function () {
            starter.start();
            expect(app.listen).to.have.been.calledWith(configuration.port);
        });
    });
});
