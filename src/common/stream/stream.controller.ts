import { Controller, Get, HttpStatus, Param, Query, Res, UsePipes } from '@nestjs/common';
import { Response } from 'express';
import { StreamService } from './stream.service';
import { YoutubeUrlValidatorPipe } from './youtube/youtube-url-validator.pipe';

@Controller()
export class StreamController {
    constructor(private streamService: StreamService) { }

    @Get('stream-by-url')
    @UsePipes(new YoutubeUrlValidatorPipe())
    public async streamByUrl(@Res() res: Response, @Query('youtubeUrl') youtubeUrl?: string) {
        if (!youtubeUrl) {
            return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
                message: 'Query string youtubeUrl is required',
            });
        }

        try {
            console.info('Youtube url:', youtubeUrl);
            this.streamService.getAudioStream(youtubeUrl).pipe(res);
        }catch (e) {
            const message =`Unexpected error while processing youtube stream: ${e.message}`;
            console.error('Error while process youtube url', e);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message});
        }
    }
}
