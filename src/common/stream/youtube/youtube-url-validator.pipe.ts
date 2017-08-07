import { ArgumentMetadata, Pipe, PipeTransform } from '@nestjs/common';

@Pipe()
export class YoutubeUrlValidatorPipe implements PipeTransform {
    public transform(value: any, metadata: ArgumentMetadata): any {

    }
}
