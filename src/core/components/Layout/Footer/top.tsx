import React, { FC } from "react";
import { Link } from "react-router-dom";

import { IHeaderLink } from "../../../interface";
import { LAYOUT_STYLES } from "../../../constants";
import { ROUTES } from "../../../enums";

const STYLES = LAYOUT_STYLES;

export const FooterTop: FC = () => {
     const links: IHeaderLink[] = [
          {
               name: "About US",
               to: ROUTES.ABOUT,
          },
          {
               name: "Latest Programs",
               to: ROUTES.PROGRAMS,
          },
          {
               name: "Social Events",
               to: ROUTES.EVENTS,
          },
          {
               name: "Our Blogs",
               to: ROUTES.BLOGS,
          },
          {
               name: "Contact US",
               to: ROUTES.CONTACT,
          },

          {
               name: "Terms & Conditions",
               to: ROUTES.TERMS_CONDITION,
          },

          {
               name: "Refund Policy",
               to: ROUTES.REFUND_POLICY,
          },
     ];

     return (
          <div className="grid grid-cols-12 gap-x-20 gap-y-8 mb-10 sm:mb-28 w-full">
               <div className="col-span-12 sm:col-span-3">
                    <img src="/transparent-logo.png" alt="logo" className="w-20 sm:w-28" />
               </div>
               <div className="col-span-12 sm:col-span-4">
                    <h4 className="text-sm sm:text-lg font-medium text-white mb-3.5 sm:mb-6">Contact Info</h4>
                    <ul className="flex flex-col items-start gap-y-2.5 sm:gap-y-4 text-slate-500 text-xs sm:text-base font-light tracking-wide w-full">
                         <li>
                              <address className="capitalize">
                                   Address: OM SHANTI CLINIC, NEAR JANTA BAKERY,Road no. 03, ganga society, Vikhroli
                                   parksite 400079
                              </address>
                         </li>
                         <li>Phone: +91 99204 41626 / 93729 97878</li>
                         <li>Email: omshantiwelfaretrust@gmail.com</li>
                    </ul>
               </div>
               <div className="col-span-12 sm:col-span-4">
                    <h4 className="text-sm sm:text-lg font-medium text-white mb-3 sm:mb-6">Important Links</h4>
                    <ul className="flex flex-col items-start gap-y-2.5 sm:gap-y-4">
                         {links.map((link, index) => (
                              <li key={index} className={STYLES.LINK + " text-slate-500 font-light tracking-wide"}>
                                   <Link to={link.to}>{link.name}</Link>
                              </li>
                         ))}
                    </ul>
               </div>
          </div>
     );
};
