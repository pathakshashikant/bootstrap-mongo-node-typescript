import { formSchema } from './../schema/form.schema';
import { Router, Request, Response } from 'express';
import validate from '../middleware/validateResource';
import { createPersonalUserHandler, loginUser } from '../controller/user.controller';
import { loginSchema, userSchema } from '../schema/user.schema';

import { createFormHandler } from '../controller/form.controller';

const router = Router();

router.get('/', (req: Request, res: Response) => res.sendStatus(200));

router.post('/registerUser', validate(userSchema), createPersonalUserHandler);
router.post('/loginUser', validate(loginSchema), loginUser);

router.post('/submitForm', validate(formSchema), createFormHandler);

export default router;
