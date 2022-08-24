import { Router, Request, Response } from 'express';
import validate from '../../middleware/validateResource';
import { createPersonalUserHandler, listAllUsersHandler } from '../../controller/user_controller/user.controller';
import { personalUserSchema } from '../../schema/user_schema/user.schema';

const router = Router();

router.get('/', (req: Request, res: Response) => res.sendStatus(200));

router.get('/listAllUsers', listAllUsersHandler);

router.post('/createUserAccount', validate(personalUserSchema), createPersonalUserHandler);

export default router;
