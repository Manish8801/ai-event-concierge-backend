import { Router, type IRouter } from "express";
import { getAllEvents, planEvent } from "../controller/event.controllers.js";

const router: IRouter = Router();

router.get("/", getAllEvents);
router.post("/plan-event", planEvent);

export default router;
