import express, { Router } from "express";
import helloController from '../controllers/hello';

const router: Router = express.Router();

router.get('/', helloController.hello);

export default router;