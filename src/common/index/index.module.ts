import { Module } from '@nestjs/common';
import { LogModule } from '../log/log.module';
import { IndexController } from './index.controller';

@Module({
    controllers: [IndexController],
    modules: [LogModule],
})
export class IndexModule {
}
