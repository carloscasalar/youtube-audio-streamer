import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({
    components: [ LoggerService ],
})
export class LogModule {

}
