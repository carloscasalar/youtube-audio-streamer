"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var configuration_1 = require("../../../src/common/config/configuration");
describe('Configuration tests', function () {
    var envPortToRestore;
    beforeEach('init Configuration', function () {
        envPortToRestore = process.env.PORT;
    });
    afterEach('cleaning test configurations', function () {
        process.env.PORT = envPortToRestore;
    });
    it('should be port 3000 by default', function () {
        delete process.env.PORT;
        var configuration = new configuration_1.Configuration();
        chai_1.expect(configuration.port).to.be.equal(3000);
    });
    it('should be port equals to PORT env value if it has been set', function () {
        process.env.PORT = 4321;
        var configuration = new configuration_1.Configuration();
        chai_1.expect(configuration.port).to.be.equal(4321);
    });
});
