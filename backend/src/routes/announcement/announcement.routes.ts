import { Router } from "express";
import deleteAnnouncementController from "../../controllers/announcements/deleteAnnouncement.controller";
import getAnnouncementByIdController from "../../controllers/announcements/getAnnouncementById.controller";
import getAnnouncementsController from "../../controllers/announcements/getAnnouncements.controller";
import registerAnnouncementController from "../../controllers/announcements/registerAnnouncement.controllers";
import { authUser } from "../../middlewares/users/authUser.middleware";

const announcementsRoutes = Router();

announcementsRoutes.post(
  "/announcement", 
  //authUser, 
  registerAnnouncementController
  //add "isEmployee" middleware
); 

announcementsRoutes.get(
  "/announcements",
  getAnnouncementsController
);

announcementsRoutes.get(
  "/announcement/:id", 
  getAnnouncementByIdController
);


announcementsRoutes.delete(
  "/announcement/:id",
  //authUser, 
  deleteAnnouncementController
  //add "isEmployee" middleware
); 

export default announcementsRoutes;
