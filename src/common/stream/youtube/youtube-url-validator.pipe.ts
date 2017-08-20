import { HttpStatus, Pipe, PipeTransform } from '@nestjs/common';
import { ArgumentMetadata } from '@nestjs/common/interfaces/pipe-transform.interface';
import { HttpException } from '@nestjs/core';
import { YoutubeUrlValidator } from './youtube-url-validator';

@Pipe()
export class YoutubeUrlValidatorPipe implements PipeTransform {
    public transform(value: any, metadata: ArgumentMetadata): any {
        const validation = new YoutubeUrlValidator(value);
        validation.validate();

        if (!validation.isValid) {
            throw new HttpException(validation.message, HttpStatus.BAD_REQUEST);
        }

        return value;
    }
}
