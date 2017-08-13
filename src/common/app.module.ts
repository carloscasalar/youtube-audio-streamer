import { Module } from '@nestjs/common';
import { StreamModule } from "./stream/stream.module";

@Module({
    modules: [StreamModule],
})
export class ApplicationModule {
}
