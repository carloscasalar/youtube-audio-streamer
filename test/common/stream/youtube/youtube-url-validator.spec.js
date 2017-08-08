"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var youtube_url_validator_1 = require("../../../../src/common/stream/youtube/youtube-url-validator");
describe('YoutubeUrlValidator tests', function () {
    describe('if url is undefined', function () {
        var validator;
        beforeEach(function () {
            var url = undefined;
            validator = new youtube_url_validator_1.YoutubeUrlValidator(url);
            validator.validate();
        });
        it('should be invalid', function () {
            chai_1.expect(validator.isValid).to.be.equal(false);
        });
        it('should have error message', function () {
            chai_1.expect(validator.message).not.to.be.an('undefined');
        });
    });
    describe('if url is null', function () {
        var validator;
        beforeEach(function () {
            var url = null;
            validator = new youtube_url_validator_1.YoutubeUrlValidator(url);
            validator.validate();
        });
        it('should be invalid', function () {
            chai_1.expect(validator.isValid).to.be.equal(false);
        });
        it('should have error message', function () {
            chai_1.expect(validator.message).not.to.be.an('undefined');
        });
    });
    describe('if url is a valid youtube.com url', function () {
        var validator;
        beforeEach(function () {
            var url = 'youtube.com/watch?v=s-mOy8VUEBk';
            validator = new youtube_url_validator_1.YoutubeUrlValidator(url);
            validator.validate();
        });
        it('should be valid', function () {
            chai_1.expect(validator.isValid).to.be.equal(true);
        });
    });
    describe('if url is a valid youtu.be url', function () {
        var validator;
        beforeEach(function () {
            var url = 'https://youtu.be/sNECJax_wq8';
            validator = new youtube_url_validator_1.YoutubeUrlValidator(url);
            validator.validate();
        });
        it('should be valid', function () {
            chai_1.expect(validator.isValid).to.be.equal(true);
        });
    });
    describe('if url is a invalid youtube url', function () {
        var validator;
        beforeEach(function () {
            var url = 'https://whatever.be/sNECJax_wq8';
            validator = new youtube_url_validator_1.YoutubeUrlValidator(url);
            validator.validate();
        });
        it('should be valid', function () {
            chai_1.expect(validator.isValid).to.be.equal(false);
        });
        it('should have error message', function () {
            chai_1.expect(validator.message).not.to.be.an('undefined');
        });
    });
});
