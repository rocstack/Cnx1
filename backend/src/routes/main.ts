import { Router } from 'express';

import * as mainController from '../controllers/main';

const router = Router();

router.get('/time', mainController.getTime);

export default router;
