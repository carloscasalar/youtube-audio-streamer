import { Component } from '@nestjs/common';

import * as getVideoId from 'get-video-id';
import * as youthumb from 'youtube-thumbnails';

export interface IThumbnails {
    default: string;
    medium: string;
    high: string;
    standard: string;
    maxres: string;
}

@Component()
export class YoutubeInfoService {
    public getThumbnails(youtubeUrl): Promise<IThumbnails> {
        return new Promise<IThumbnails>((resolve, reject) => {
            try {
                const { id } = getVideoId(youtubeUrl);

                youthumb.all(id, (thumbnails: IThumbnails) => resolve(thumbnails));
            } catch (e) {
                reject(e);
            }
        });
    }
}
