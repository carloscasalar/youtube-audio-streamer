import { Controller, Get, HttpStatus, Query, Res, UsePipes } from '@nestjs/common';
import { Response } from 'express';
import { title } from '../config/app-info';
import { LoggerService } from '../log/logger.service';
import { YoutubeInfoService } from '../youtube/youtube-info.service';
import { StreamService } from './stream.service';
import { YoutubeUrlValidatorPipe } from './youtube/youtube-url-validator.pipe';

@Controller()
export class StreamController {
    constructor(
        private youtubeInfoService: YoutubeInfoService,
        private streamService: StreamService,
        private log: LoggerService,
    ) {}

    @Get('player')
    @UsePipes(new YoutubeUrlValidatorPipe())
    public async playerPage(@Res() res: Response, @Query('youtubeUrl') youtubeUrl: string) {
        try {
            this.log.info(`Requested listen page for youtube URL: ${youtubeUrl}`);
            const streamURL = `/stream-by-url?youtubeUrl=${encodeURIComponent(youtubeUrl)}`;
            this.youtubeInfoService.getThumbnails(youtubeUrl)
                .then(({default: thumbnail}) => {
                    const backgroundStyle = `background: url('${thumbnail}') center center / cover;`;
                    res.render('player', {title, streamURL, backgroundStyle});
                })
                .catch((e) => {
                    const error = `Unexpected error trying to load video thumbnails: ${e.message}`;
                    this.log.error('Error loading gathering thumbnail', e);
                    res.render('index', {title, error});
                });
        } catch (e) {
            const error = `Unexpected error trying to load listen page: ${e.message}`;
            this.log.error('Error loading listen page', e);
            res.render('index', {title, error});
        }
    }

    @Get('stream-by-url')
    @UsePipes(new YoutubeUrlValidatorPipe())
    public async streamByUrl(@Res() res: Response,
                             @Query('youtubeUrl') youtubeUrl: string) {
        try {
            this.log.info(`Streaming youtube URL: ${youtubeUrl}`);
            const stream = this.streamService.getAudioStream(youtubeUrl);

            stream.on('end', () => {
                this.log.info(`Stream of ${youtubeUrl} ended`);
            });

            stream.on('close', () => {
                this.log.info(`Stream of ${youtubeUrl} closed`);
            });

            stream.pipe(res);
        } catch (e) {
            const message = `Unexpected error while processing youtube stream: ${e.message}`;
            this.log.error('Error while process youtube url', e);
            if (res.status) {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message});
            } else {
                throw e;
            }
        }
    }
}
