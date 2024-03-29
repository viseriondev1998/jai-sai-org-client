import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../utils/server.utils';
import { IContact } from "../interface";

import { API_ROUTES, API_METHODS } from "../enums";

const ContactApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "contactApi",
   tagTypes: ["contactApi"],
   endpoints: ({ query }) => ({
      GetAllContacts: query<{ data: IContact[] }, void>({
         query: () => {
            return {
               url: API_ROUTES.CONTACT,
               method: API_METHODS.GET,
            };
         },
      }),

      GetContactById: query<{ data: IContact }, string>({
         query: (contactId) => `${API_ROUTES.CONTACT}/${contactId}`,
      }),
   }),
});

export const ContactApiReducer = ContactApi.reducer;
export const ContactApiMiddleware = ContactApi.middleware;
export const { useGetAllContactsQuery, useLazyGetContactByIdQuery } = ContactApi;
