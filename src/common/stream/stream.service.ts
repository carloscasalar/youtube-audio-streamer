import { Component } from '@nestjs/common';
import { Response } from "express";
import * as youtubeStream from 'youtube-audio-stream';

interface IStream {
    pipe(res: Response): void;
}

@Component()
export class StreamService {
    public getAudioStream(youtubeVideoUrl: string): IStream {
        return youtubeStream(youtubeVideoUrl);
    }
}
