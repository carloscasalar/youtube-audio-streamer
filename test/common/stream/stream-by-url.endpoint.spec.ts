import { HttpStatus } from '@nestjs/common';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { expect } from 'chai';
import { recorder } from 'nock';
import { spy } from 'sinon';
import * as request from 'supertest';
import { IConfiguration } from '../../../src/component/config/iconfiguration';
import { ILogger } from '../../../src/component/log/logger.interface';
import { Starter } from '../../../src/component/server/starter';
import { server, expressInstance } from '../../../src/server';
import { ValidVideoFixture} from '../../fixtures/valid-video.fixtures';

xdescribe('stream-by-url endpoint tests', () => {
    let appInstance: INestApplication;
    let log: ILogger;
    before('start expressInstance of server', () => {
        const config: IConfiguration = {
          port: 3000,
        };

        log = {
            debug: spy(),
            error: spy(),
            info: spy(),
            warn: spy(),
        };
        const starter: Starter = new Starter(config, server, log);
        appInstance = starter.start();
    });

    after('closing server', () => {
       appInstance.close();
    });

    describe('when a valid youtube video url is provided', () => {
        let youtubeUrl: string;
        beforeEach('call endpoint with valid ID', (done) => {
           const validFixture = new ValidVideoFixture();
           validFixture.mockYoutubeHttpCalls();

           youtubeUrl = validFixture.youtubeUrl;
           request(expressInstance)
               .get('/stream-by-url')
               .query({youtubeUrl})
               .expect(HttpStatus.OK, done);
        });

        it('should inform the end of streaming to log', () => {
            expect(log.info).to.have.been.calledWithExactly('Stream of ' + youtubeUrl + ' ended');
        });
    });
});
