import { Module } from '@nestjs/common';
import { LogModule } from '../log/log.module';
import { StreamController } from './stream.controller';
import { StreamService } from './stream.service';

@Module({
    components: [ StreamService ],
    controllers: [ StreamController ],
    modules: [ LogModule ],
})
export class StreamModule {}
