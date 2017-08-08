"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var YOUTUBE_URL_REGEX = /^(https?:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/;
var YoutubeUrlValidator = (function () {
    function YoutubeUrlValidator(url) {
        this.url = url;
    }
    YoutubeUrlValidator.prototype.validate = function () {
        if (this.url === undefined || this.url === null) {
            this.isValid = false;
            this.message = 'Url is required';
        }
        else if (!this.url.match(YOUTUBE_URL_REGEX)) {
            this.isValid = false;
            this.message = 'Not a valid youtube URL';
        }
        else {
            this.isValid = true;
            this.message = 'URL OK';
        }
        return this.isValid;
    };
    return YoutubeUrlValidator;
}());
exports.YoutubeUrlValidator = YoutubeUrlValidator;
