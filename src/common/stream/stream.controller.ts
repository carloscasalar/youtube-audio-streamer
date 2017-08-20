import { Controller, Get, HttpStatus, Query, Res, UsePipes } from '@nestjs/common';
import { Response } from 'express';
import { LoggerService } from '../log/logger.service';
import { StreamService } from './stream.service';
import { YoutubeUrlValidatorPipe } from './youtube/youtube-url-validator.pipe';

@Controller()
export class StreamController {
    constructor(private streamService: StreamService, private log: LoggerService) { }

    @Get('stream-by-url')
    @UsePipes(new YoutubeUrlValidatorPipe())
    public async streamByUrl(@Res() res: Response, @Query('youtubeUrl') youtubeUrl: string) {
        try {
            this.log.info(`Streaming youtube URL: ${youtubeUrl}`);
            this.streamService.getAudioStream(youtubeUrl).pipe(res);
        }catch (e) {
            const message = `Unexpected error while processing youtube stream: ${e.message}`;
            this.log.error('Error while process youtube url', e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message});
        }
    }
}
