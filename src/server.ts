import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/core/adapters/express-adapter';
import { Application } from 'express';

import { ApplicationModule } from './common/app.module';

export const expressInstance: Application = ExpressAdapter.create();

export const app = NestFactory.create(ApplicationModule, expressInstance);
