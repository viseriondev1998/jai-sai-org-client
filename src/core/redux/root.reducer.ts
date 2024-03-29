import { combineReducers } from "@reduxjs/toolkit";

import {
   ContactApiReducer,
   GalleryApiReducer,
   EventCategotyApiReducer,
   ProgramApiReducer,
   WebsiteApiReducer,
   DonationApiReducer
} from "../services";

export const rootReducer = combineReducers({
   contactApi: ContactApiReducer,
   galleryApi: GalleryApiReducer,
   eventCategoryApi: EventCategotyApiReducer,
   programApi: ProgramApiReducer,
   websiteApi: WebsiteApiReducer,
   donationApi: DonationApiReducer
});