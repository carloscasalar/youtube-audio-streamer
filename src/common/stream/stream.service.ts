import { Component } from '@nestjs/common';
import * as youtubeStream from 'youtube-audio-stream';

export interface IStreamService {
    getAudioStream(youtubeVideoUrl: string): NodeJS.ReadableStream;
}

@Component()
export class StreamService implements IStreamService {
    public getAudioStream(youtubeVideoUrl: string): NodeJS.ReadableStream {
        return youtubeStream(youtubeVideoUrl);
    }
}
