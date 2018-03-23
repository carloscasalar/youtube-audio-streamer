import { Module, Shared } from '@nestjs/common';
import { YoutubeInfoService } from './youtube-info.service';

@Shared()
@Module({
    components: [ YoutubeInfoService ],
    exports: [ YoutubeInfoService ],
})
export class YoutubeModule {}
