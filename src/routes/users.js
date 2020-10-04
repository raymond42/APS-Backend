import express from "express";
import Authentication from "../controllers/signup";
import validations from "../middleware/validations";
import verifyToken from "../middleware/verifyToken";

const router = express.Router();

router.post("/signup", [validations.signupValidation], Authentication.signup);
router.get("/verify-email/:token", [verifyToken], Authentication.verifyEmail);

export default router;
