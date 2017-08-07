import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { StreamService } from './stream.service';

@Controller()
export class StreamController {
    constructor(private streamService: StreamService) { }

    @Get('stream-by-url')
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
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
        }
    }
}
