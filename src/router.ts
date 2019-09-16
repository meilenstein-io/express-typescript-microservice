import { Router } from 'express';
import { weatherController } from './controllers';
const router = Router();

router.use('/weather', weatherController);

export default router;
