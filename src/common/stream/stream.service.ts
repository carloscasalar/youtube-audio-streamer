import { Component } from '@nestjs/common';
import { Response } from 'express';
import * as youtubeStream from 'youtube-audio-stream';

interface IStream {
    pipe(res: Response): void;
}

export interface IStreamService {
    getAudioStream(youtubeVideoUrl: string): IStream;
}

@Component()
export class StreamService implements IStreamService {
    public getAudioStream(youtubeVideoUrl: string): IStream {
        return youtubeStream(youtubeVideoUrl);
    }
}
