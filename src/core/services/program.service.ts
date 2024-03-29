import { createApi } from "@reduxjs/toolkit/query/react";

import { UserReduxSetup } from '../utils/server.utils';
import { IProgram } from "../interface";

import { API_ROUTES, API_METHODS } from "../enums";

const ProgramApi = createApi({
   baseQuery: UserReduxSetup,
   reducerPath: "programApi",
   tagTypes: ["programApi"],
   endpoints: ({ query }) => ({
      GetAllProgram: query<{ data: IProgram[] }, void>({
         query: () => {
            return {
               url: API_ROUTES.ALL_EVENTS,
               method: API_METHODS.GET,
            };
         },
      }),

      GetProgramById: query<{ data: IProgram }, string>({
         query: (programId) => `${API_ROUTES.EVENTS}/${programId}`,
      }),
   }),
});

export const ProgramApiReducer = ProgramApi.reducer;
export const ProgramApiMiddleware = ProgramApi.middleware;
export const { useGetAllProgramQuery, useLazyGetProgramByIdQuery } = ProgramApi;
