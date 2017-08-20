import { NestFactory } from '@nestjs/core';

import * as bodyParser from 'body-parser';
import * as express from 'express';

import { Starter } from './component/server/starter';

import { ApplicationModule } from './common/app.module';
import { Configuration } from './common/config/configuration';
import { LoggerService } from './common/log/logger.service';

const instance = express();
instance.use(bodyParser.json());

const app = NestFactory.create(ApplicationModule, instance);
const log = new LoggerService();

const starter = new Starter(new Configuration(), app, log);
starter.start();
