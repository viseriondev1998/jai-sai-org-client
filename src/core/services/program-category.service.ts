import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../utils/server.utils';
import { IEventCategory } from "../interface";

import { API_ROUTES, API_METHODS } from "../enums";

const EventCategoryApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "eventCategoryApi",
   tagTypes: ["eventCategoryApi"],
   endpoints: ({ query }) => ({
      GetAllEventsCategory: query<{ data: IEventCategory[] }, void>({
         query: () => {
            return {
               url: API_ROUTES.CATEGORY,
               method: API_METHODS.GET,
            };
         },
      }),

      GetEventCategoryById: query<{ data: IEventCategory }, string>({
         query: (categoryId) => `${API_ROUTES.CATEGORY}/${categoryId}`,
      }),
   }),
});

export const EventCategotyApiReducer = EventCategoryApi.reducer;
export const EventCategotyApiMiddleware = EventCategoryApi.middleware;
export const { useGetAllEventsCategoryQuery, useLazyGetEventCategoryByIdQuery } = EventCategoryApi;
