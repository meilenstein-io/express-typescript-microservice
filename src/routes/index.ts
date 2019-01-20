import { Router } from "express";
import { weatherController } from "./weather";
const router = Router();

router.use("/weather", weatherController);

export default router;
