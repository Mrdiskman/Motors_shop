import { Router } from "express";
import deleteAnnouncementController from "../../controllers/announcements/deleteAnnouncement.controller";
import getAnnouncementByIdController from "../../controllers/announcements/getAnnouncementById.controller";
import getAnnouncementsController from "../../controllers/announcements/getAnnouncements.controller";
import registerAnnouncementController from "../../controllers/announcements/registerAnnouncement.controllers";
import updateAnnouncementController from "../../controllers/announcements/updateAnnouncement.controller";
// import { authUser } from "../../middlewares/users/authUser.middleware";


const announcementsRoutes = Router();

announcementsRoutes.post(
  "/announcement",
  // authUser,
  //add "isSeller" middleware
  registerAnnouncementController
);

announcementsRoutes.get("/announcements", getAnnouncementsController);

announcementsRoutes.get("/announcement/:id", getAnnouncementByIdController);

announcementsRoutes.patch(
  "/announcement/:id",
  //authUser,
  //add "isSeller" middleware
  //add "isAnnouncementOwner" middleware
  updateAnnouncementController
);

announcementsRoutes.delete(
  "/announcement/:id",
  //authUser,
  //add "isSeller" middleware
  //add "isAnnouncementOwner" middleware
  deleteAnnouncementController
);

export default announcementsRoutes;
