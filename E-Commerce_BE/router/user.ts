import { Router } from "express";
import { upload } from "../utils/multer";
import { activateAccounts, createUser, getUser, loginUser, viewUsers } from "../controllers/user";
import { isAuthenticated } from "../middlewares/auth";

const router = Router()

router.route("/create-user").post(upload , createUser)
router.route("/view-users").get(viewUsers)
router.route("/login").post(loginUser)
router.route("/getUser").get(isAuthenticated , getUser)
router.route("/activate").post(upload , activateAccounts)


export default router;