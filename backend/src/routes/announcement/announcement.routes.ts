import { Router } from "express";
import registerAnnouncementController from "../../controllers/announcements/registerAnnouncement.controllers";

const routes = Router();

routes.post("/announcement", registerAnnouncementController);

export default routes;
