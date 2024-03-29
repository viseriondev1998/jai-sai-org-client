import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ROUTES } from "../core/enums";
import {
     Home,
     About,
     Programs,
     ProgramDetails,
     Events,
     EventDetails,
     Blogs,
     Contact,
     Donation,
     TermsAndConditionPage,
     RefundPolicyPage,
     SuccessFailurePage,
} from "../pages";

export const AppRoute = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.ABOUT} element={<About />} />
                    <Route path={ROUTES.PROGRAMS} element={<Programs />} />
                    <Route path={`${ROUTES.PROGRAMS}/:programId`} element={<ProgramDetails />} />
                    <Route path={ROUTES.EVENTS} element={<Events />} />
                    <Route path={`${ROUTES.EVENTS}/:eventId`} element={<EventDetails />} />
                    <Route path={ROUTES.BLOGS} element={<Blogs />} />
                    <Route path={ROUTES.CONTACT} element={<Contact />} />
                    <Route path={ROUTES.DONATION} element={<Donation />} />
                    <Route path={ROUTES.TERMS_CONDITION} element={<TermsAndConditionPage />} />
                    <Route path={ROUTES.REFUND_POLICY} element={<RefundPolicyPage />} />
                    <Route path={ROUTES.DONATION_STATUS} element={<SuccessFailurePage />} />
                    <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
               </Routes>
          </BrowserRouter>
     );
};
