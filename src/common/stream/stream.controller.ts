import { Controller, Get, HttpStatus, Query, Res, UsePipes } from '@nestjs/common';
import { Response } from 'express';
import { LoggerService } from '../log/logger.service';
import { StreamService } from './stream.service';
import { YoutubeUrlValidatorPipe } from './youtube/youtube-url-validator.pipe';
import { title } from '../config/app-info';

@Controller()
export class StreamController {
    constructor(private streamService: StreamService, private log: LoggerService) {}

    @Get('player')
    public async playerPage(@Res() res: Response, @Query('youtubeUrl') youtubeUrl: string) {
        try {
            this.log.info(`Requested listen page for youtube URL: ${youtubeUrl}`);
            const streamURL = `/stream-by-url?youtubeUrl=${encodeURIComponent(youtubeUrl)}`;
            res.render('player', {title, streamURL});
        } catch (e) {
            const error = `Unexpected error trying to load listen page: ${e.message}`;
            this.log.error('Error loading listen page', e);
            const playerURL = '/player';
            res.render('index', {title, playerURL, error});
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
