import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../utils/server.utils';
import { IUserContact, INGOProfile } from "../interface";

import { API_ROUTES, API_METHODS } from "../enums";

const WebsiteApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "websiteApi",
   tagTypes: ["websiteApi"],
   endpoints: ({ mutation, query }) => ({
      NewUserContact: mutation<{ data: string }, IUserContact>({
         query: (contact) => {
            return {
               url: API_ROUTES.NEW_USER_CONTACT,
               method: API_METHODS.POST,
               body: { ...contact },
            };
         },
      }),

      GetNgoProfile: query<{ data: INGOProfile }, void>({
         query: () => {
            return {
               url: API_ROUTES.NGO_PROFILE,
               method: API_METHODS.GET,
            };
         },
      }),
   }),
});

export const WebsiteApiReducer = WebsiteApi.reducer;
export const WebsiteApiMiddleware = WebsiteApi.middleware;
export const { useNewUserContactMutation, useGetNgoProfileQuery } = WebsiteApi;
