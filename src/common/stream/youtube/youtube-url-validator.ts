const YOUTUBE_URL_REGEX = /^(https?:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/;

export class YoutubeUrlValidator {
    public isValid: boolean;
    public message: string;

    constructor(private readonly url: string|undefined|null) { }

    public validate(): boolean {
        if (this.url === undefined || this.url === null) {
            this.isValid = false;
            this.message = 'Url is required';
        } else if (!this.url.match(YOUTUBE_URL_REGEX)) {
            this.isValid = false;
            this.message = 'Not a valid youtube URL';
        } else {
            this.isValid = true;
            this.message = 'URL OK';
        }

        return this.isValid;
    }
}
