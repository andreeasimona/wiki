import express from "express";
import * as controller from "../controllers/controller";
const router = express.Router();

router.route("/page/:id").post(controller.createPage);
router.route("/delete/:id").post(controller.deletePage);
router.route("/link/:id/to/:link").post(controller.linkPage);

export default router;
