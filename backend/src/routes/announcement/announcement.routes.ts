import { Router } from "express";
import deleteAnnouncementController from "../../controllers/announcements/deleteAnnouncement.controller";
import getAnnouncementByIdController from "../../controllers/announcements/getAnnouncementById.controller";
import getAnnouncementsController from "../../controllers/announcements/getAnnouncements.controller";
import registerAnnouncementController from "../../controllers/announcements/registerAnnouncement.controllers";
import updateAnnouncementController from "../../controllers/announcements/updateAnnouncement.controller";
import { authUser } from "../../middlewares/users/authUser.middleware";
//import { authUser } from "../../middlewares/users/authUser.middleware";

const announcementsRoutes = Router();

announcementsRoutes.post("/announcements", authUser,registerAnnouncementController);

announcementsRoutes.get("/announcements", getAnnouncementsController);

announcementsRoutes.get("/announcements/:id", getAnnouncementByIdController);

announcementsRoutes.patch(
  "/announcements/update/:id",
  updateAnnouncementController
);

announcementsRoutes.delete(
  "/announcements/delete/:id",
  authUser,
  deleteAnnouncementController
);

export default announcementsRoutes;
