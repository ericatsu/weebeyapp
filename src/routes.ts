import { Router } from "express";
import { AuthController } from "./auth/auth_controller";

const router = Router();

router.get("/", AuthController.fetchUser);
router.post("/add", AuthController.createUser);
router.put("/add", AuthController.updateUser);
router.delete("/delete", AuthController.deleteUser);


export {router};