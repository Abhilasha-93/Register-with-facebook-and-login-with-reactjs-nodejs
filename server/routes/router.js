
import { Router } from "express";
const router = Router();
import {registerWithFacebook,login} from "../controller/auth.controller.js";

router.post("/facebook",registerWithFacebook )
router.post("/login",login )

export default router;