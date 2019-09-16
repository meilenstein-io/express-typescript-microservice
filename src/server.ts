import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { logger } from './logger';

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  logger.info(`Running on port ${PORT}`);
});
