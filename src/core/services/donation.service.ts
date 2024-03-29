import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../utils/server.utils';
import { IDonation } from "../interface";

import { API_ROUTES, API_METHODS } from "../enums";

const DonationApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "donationApi",
   tagTypes: ["donationApi"],
   endpoints: ({ query, mutation }) => ({
      NewDonation: mutation<{ data: { url: string } }, IDonation>({
         query: (donation) => {
            return {
               url: API_ROUTES.DONATIONS,
               method: API_METHODS.POST,
               body: { ...donation },
            };
         },
      }),

      CheckStatus: query<{ data: { status: string } }, { transactionId: string }>({
         query: ({ transactionId }) => {
            return {
               url: `${API_ROUTES.CHECK_STATUS}`,
               method: API_METHODS.POST,
               body: { transactionId },
            };
         },
      }),
   }),
});

export const DonationApiReducer = DonationApi.reducer;
export const DonationApiMiddleware = DonationApi.middleware;
export const { useNewDonationMutation, useLazyCheckStatusQuery } = DonationApi;
