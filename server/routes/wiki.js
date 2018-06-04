import express from "express";
import * as controller from "../controllers/controller";
const router = express.Router();

router.route("/:id").get(controller.getPage);

export default router;
