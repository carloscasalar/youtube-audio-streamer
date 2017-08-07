import { Module } from '@nestjs/common';
import { StreamController } from './stream.controller';
import { StreamService } from './stream.service';

@Module({
    components: [ StreamService ],
    controllers: [ StreamController ],
})
export class StreamModule {}
