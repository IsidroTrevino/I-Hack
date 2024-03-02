import { Router } from "express";
import { getUsers } from "../controllers/User.controllers.js";

const router = Router();

router.get('/users', getUsers);

export default router;