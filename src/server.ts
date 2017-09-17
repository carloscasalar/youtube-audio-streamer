import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/core/adapters/express-adapter';
import { Application, static as expressStatic } from 'express';
import * as path from 'path';

import { ApplicationModule } from './common/app.module';

export const expressInstance: Application = ExpressAdapter.create();

expressInstance.set('views', path.join(__dirname, '../views'));
expressInstance.set('view engine', 'pug');

expressInstance.use(expressStatic(path.join(__dirname, '../public')));

export const server = NestFactory.create(ApplicationModule, expressInstance);
