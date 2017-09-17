import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { StreamModule } from "./stream/stream.module";

@Module({
    modules: [
        IndexModule,
        StreamModule,
    ],
})
export class ApplicationModule {
}
