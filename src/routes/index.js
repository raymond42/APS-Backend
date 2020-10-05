import express from "express";
import usersRouter from "./users";
// @ initialize app

const router = express();

//@ router configuration
router.use("/auth", usersRouter);

export default router;
