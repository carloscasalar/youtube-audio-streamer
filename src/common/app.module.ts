import { Module } from '@nestjs/common';
import { StreamController } from "./stream/stream.controller";

@Module({
    controllers: [ StreamController ],
})
export class ApplicationModule {
}
