import { expect } from 'chai';
import { Configuration } from '../../../src/common/config/configuration';

describe('Configuration tests', () => {
    let envPortToRestore: number;
    beforeEach('init Configuration', () => {
        envPortToRestore = process.env.PORT;
    });

    afterEach('cleaning test configurations', () => {
        process.env.PORT = envPortToRestore;
    });

    it('should be port 3000 by default', () => {
        delete process.env.PORT;
        const configuration = new Configuration();
        expect(configuration.port).to.be.equal(3000);
    });

    it('should be port equals to PORT env value if it has been set', () => {
        process.env.PORT = 4321;
        const configuration = new Configuration();
        expect(configuration.port).to.be.equal(4321);
    });
});
