import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class StreamController {
    @Get('stream-by-url')
    public async streamByUrl(@Res() res: Response, @Query('youtubeUrl') youtubeUrl?: string) {
        const youtubeId = youtubeUrl || 'unknown';
        res.status(HttpStatus.OK).json({youtubeId});
    }
}
