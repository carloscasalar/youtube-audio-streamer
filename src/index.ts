import { Configuration } from './common/config/configuration';
import { LoggerService } from './common/log/logger.service';
import { Starter } from './component/server/starter';

import { app } from './server';

const log = new LoggerService();

const starter = new Starter(new Configuration(), app, log);

starter.start();
