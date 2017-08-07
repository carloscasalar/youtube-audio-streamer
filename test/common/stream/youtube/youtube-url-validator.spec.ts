import { expect } from 'chai';
import { YoutubeUrlValidator } from '../../../../src/common/stream/youtube/youtube-url-validator';

describe('YoutubeUrlValidator tests', () => {
    describe('if url is undefined', () => {
        let validator;
        beforeEach(() => {
            const url = undefined;
            validator = new YoutubeUrlValidator(url);
            validator.validate();
        });
        it('should be invalid', () => {
            expect(validator.isValid).to.be.equal(false);
        });

        it('should have error message', () => {
            expect(validator.message).not.to.be.an('undefined');
        });
    });

    describe('if url is null', () => {
        let validator;
        beforeEach(() => {
            const url = null;
            validator = new YoutubeUrlValidator(url);
            validator.validate();
        });
        it('should be invalid', () => {
            expect(validator.isValid).to.be.equal(false);
        });

        it('should have error message', () => {
            expect(validator.message).not.to.be.an('undefined');
        });
    });

    describe('if url is a valid youtube.com url', () => {
        let validator;
        beforeEach(() => {
            const url = 'youtube.com/watch?v=s-mOy8VUEBk';
            validator = new YoutubeUrlValidator(url);
            validator.validate();
        });
        it('should be valid', () => {
            expect(validator.isValid).to.be.equal(true);
        });
    });

    describe('if url is a valid youtu.be url', () => {
        let validator;
        beforeEach(() => {
            const url = 'https://youtu.be/sNECJax_wq8';
            validator = new YoutubeUrlValidator(url);
            validator.validate();
        });
        it('should be valid', () => {
            expect(validator.isValid).to.be.equal(true);
        });
    });

    describe('if url is a invalid youtube url', () => {
        let validator;
        beforeEach(() => {
            const url = 'https://whatever.be/sNECJax_wq8';
            validator = new YoutubeUrlValidator(url);
            validator.validate();
        });

        it('should be valid', () => {
            expect(validator.isValid).to.be.equal(false);
        });

        it('should have error message', () => {
            expect(validator.message).not.to.be.an('undefined');
        });
    });

});
