import { NestFactory } from '@nestjs/core';

import * as bodyParser from 'body-parser';
import * as express from 'express';

import { Starter } from './component/server/starter';

import { Configuration } from "./common/config/configuration";
import { ApplicationModule } from './common/app.module';

const instance = express();
instance.use(bodyParser.json());

const app = NestFactory.create(ApplicationModule, instance);

const starter = new Starter(new Configuration(), app);
starter.start();
