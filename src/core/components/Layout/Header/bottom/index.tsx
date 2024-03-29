import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import { IHeaderLink } from "../../../../interface";
import { COMMON, LAYOUT_STYLES } from "../../../../constants";
import { ROUTES } from "../../../../enums";

import { Button } from "../../../index";

const STYLES = LAYOUT_STYLES;

export const HeaderBottom: FC = () => {
     const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
     const navigate = useNavigate();

     const links: IHeaderLink[] = [
          {
               name: "Home",
               to: ROUTES.HOME,
          },
          {
               name: "About",
               to: ROUTES.ABOUT,
          },
          {
               name: "Programs",
               to: ROUTES.PROGRAMS,
          },
          {
               name: "Gallery",
               to: ROUTES.EVENTS,
          },
          // {
          //      name: "Privacy Policy",
          //      to: ROUTES.REFUND_POLICY,
          // },

          // {
          //      name: "Terms & Condition",
          //      to: ROUTES.TERMS_CONDITION,
          // },
          // {
          //    name: "Blogs",
          //    to: ROUTES.BLOGS
          // },
          {
               name: "Contact",
               to: ROUTES.CONTACT,
          },
     ];

     const handleMenuOpen = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     return (
          <header className="sticky top-0 block z-[9999] w-full">
               <div className="bg-white py-2.5 w-full smooth-shadow">
                    <div className="container mx-auto w-full pl-6 sm:pl-8 pr-6 sm:pr-10">
                         <div className="flex flex-wrap sm:flex-nowrap items-center justify-between w-full">
                              <div className="sm:inline-block hidden">
                                   <Link to={ROUTES.HOME}>
                                        <img src={COMMON.LOGO} alt="Logo" className="py-1 w-14 sm:w-24" />
                                   </Link>
                              </div>
                              <div className="flex items-center justify-between w-full sm:hidden">
                                   <Link to={ROUTES.HOME}>
                                        <img src={COMMON.LOGO} alt="Logo" className="py-1 w-14 sm:w-24" />
                                   </Link>
                                   <Button onClick={handleMenuOpen} styles="rounded-full px-[14px]" sm>
                                        <GiHamburgerMenu />
                                   </Button>
                              </div>
                              <div
                                   className={`flex flex-col sm:flex-row sm:items-center justify-end gap-y-4 gap-x-12 w-full ${
                                        isMenuOpen ? "block" : "hidden sm:flex"
                                   }`}
                              >
                                   <ul className="flex flex-col sm:flex-row items-center gap-y-4 gap-x-12">
                                        {links.map((link, index) => (
                                             <li
                                                  key={index}
                                                  className={
                                                       STYLES.LINK +
                                                       (window.location.pathname === link.to
                                                            ? " text-emerald-500"
                                                            : " text-slate-400")
                                                  }
                                             >
                                                  <Link to={link.to}>{link.name}</Link>
                                             </li>
                                        ))}
                                   </ul>
                                   <div>
                                        <div className="sm:inline-block hidden">
                                             <Button
                                                  value="Donate Now"
                                                  styles="px-12"
                                                  onClick={() => navigate(ROUTES.DONATION)}
                                             />
                                        </div>
                                        <div className="sm:hidden block mx-auto">
                                             <Button
                                                  value="Donate Now"
                                                  styles="px-12"
                                                  onClick={() => navigate(ROUTES.DONATION)}
                                                  block
                                                  sm
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     );
};
