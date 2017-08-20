import { Module, Shared } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Shared()
@Module({
    components: [ LoggerService ],
    exports: [ LoggerService ],
})
export class LogModule {

}
