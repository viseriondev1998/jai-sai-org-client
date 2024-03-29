import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../utils/server.utils';
import { IGallary } from "../interface";

import { API_ROUTES, API_METHODS } from "../enums";

const GalleryApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "galleryApi",
   tagTypes: ["galleryApi"],
   endpoints: ({ query }) => ({
      GetAllGallery: query<{ data: IGallary[] }, void>({
         query: () => {
            return {
               url: API_ROUTES.GALLERY,
               method: API_METHODS.GET,
            };
         },
      }),
   }),
});

export const GalleryApiReducer = GalleryApi.reducer;
export const GalleryApiMiddleware = GalleryApi.middleware;
export const { useGetAllGalleryQuery } = GalleryApi;
