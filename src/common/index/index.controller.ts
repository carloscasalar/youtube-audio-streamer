import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoggerService } from '../log/logger.service';
// tslint:disable-next-line
const packageJson = require('../../../package.json');

@Controller()
export class IndexController {
    constructor(private log: LoggerService) { }

    @Get('/')
    public async streamByUrl(@Res() res: Response) {
        this.log.info('New access to index');
        res.render('index', {
            streamByUrlEndPoint: '/stream-by-url',
            title: `Youtube Audio Streamer v${packageJson.version}`,
        });
    }
}
