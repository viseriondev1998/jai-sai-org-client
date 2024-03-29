
import { Middleware } from "@reduxjs/toolkit";

import {
   ContactApiMiddleware,
   GalleryApiMiddleware,
   EventCategotyApiMiddleware,
   ProgramApiMiddleware,
   WebsiteApiMiddleware,
   DonationApiMiddleware
} from "../services";

export const rootMiddleware: Middleware[] = [
   ContactApiMiddleware,
   GalleryApiMiddleware,
   EventCategotyApiMiddleware,
   ProgramApiMiddleware,
   WebsiteApiMiddleware,
   DonationApiMiddleware
];