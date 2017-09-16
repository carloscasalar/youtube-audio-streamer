import * as chai from 'chai';
import { spy, stub } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { LoggerService } from '../../../src/common/log/logger.service';
import { StreamController } from '../../../src/common/stream/stream.controller';
import { IStreamService } from '../../../src/common/stream/stream.service';

const expect = chai.expect;
chai.use(sinonChai);

describe('Streamer controller tests', () => {
    let streamService: IStreamService;
    let streamController: StreamController;
    let pipe;
    let on;
    let youtubeUrl;
    let getAudioStream;
    let res;
    let next;
    beforeEach('streamService stub instantiation', () => {
        youtubeUrl = 'https://youtu.be/g-gp-Voq6MQ';
        pipe = spy();
        on = spy();
        getAudioStream = stub().returns({ pipe, on });
        streamService = { getAudioStream };
        streamController = new StreamController(streamService, new LoggerService());

        const json = spy();
        const status = stub().returns({ json });
        res = { status };
        next = spy();
    });

    describe('if youtube call has no error', () => {
        beforeEach('call streamByUrl', (done) => {
            streamController.streamByUrl(res, /*next,*/ youtubeUrl)
                .then(() => done())
                .catch(done);
        });

        it('should call audio streamer service with youtube url', () => {
            expect(streamService.getAudioStream).to.have.been.calledWithExactly(youtubeUrl);
        });

        it('should call pipe with res as parameter', () => {
           expect(pipe).to.have.been.calledWithExactly(res);
        });
    });

    describe('if youtube call throws an unexpected error', () => {
        beforeEach('override streamer stub behavior to throw error. Also call streamByUrl', (done) => {
            getAudioStream.throws();
            streamController.streamByUrl(res, /*next,*/ youtubeUrl)
                .then(() => done())
                .catch(done);
        });

        it('should have http status 500 (internal server error)', () => {
            expect(res.status, 'res.status').to.have.been.calledWithExactly(500);
        });
    });
});
