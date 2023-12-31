import { Router } from "express";
import { debugController } from "../controller";
import upload from "../lib/multer";

const DebugRouter = Router();
DebugRouter.post("/upload-file", upload.single("file"), debugController.uploadFile);
DebugRouter.post("/sync-mixer", debugController.syncMixer);
DebugRouter.post("/send-message", debugController.sendMessage);

export default DebugRouter;