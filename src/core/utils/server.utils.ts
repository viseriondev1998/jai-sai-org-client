import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const UserReduxSetup = fetchBaseQuery({
baseUrl: "https://om-shanti-walfare-trust-backend-o06r.onrender.com/api/1.0",
});
