import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const UserReduxSetup = fetchBaseQuery({
     baseUrl: "https://jai-sai-org-backend.onrender.com/api/1.0",
});
