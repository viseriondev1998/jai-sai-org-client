import React from "react";
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../core/enums";
import { Button } from "../../core/components";
import { MissionModule, AboutModule, ProgramsModule } from "../../modules";

export const HomeModule = () => {
     const navigate = useNavigate();

     return (
          <div className="w-full max-h-full">
               {/* <div className="w-full h-screen"> */}
               <div className="w-full sm:h-screen" style={{}}>
                    <div className="container mx-auto">
                         <div className="flex items-center flex-wrap-reverse justify-start px-8 sm:px-14 py-10 sm:py-52">
                              <div className="flex-1">
                                   <div className="animate__animated animate__fadeInUp animate__delay-0.8s">
                                        <h1 className="text-blue-950 text-4xl sm:text-7xl tracking-wide sm:tracking-wider font-bold leading-tight mb-4 sm:mb-6">
                                             Empowering Health, <br />
                                             Inspiring Lives
                                        </h1>
                                        <p className="text-blue-950 text-sm sm:text-base tracking-wider font-light leading-relaxed mb-12">
                                             Empowering Health, Inspiring Lives Together, We Create a Stronger Tomorrow
                                        </p>
                                   </div>
                                   <div className="flex items-center">
                                        <div className="sm:inline hidden">
                                             <Button
                                                  value="Donate Now"
                                                  styles="animate__animated animate__fadeInLeft animate__delay-1s"
                                                  onClick={() => navigate(ROUTES.DONATION)}
                                             />
                                             <Button
                                                  styles="animate__animated animate__fadeInRight animate__delay-1s"
                                                  transparent
                                             >
                                                  <div className="flex items-center gap-x-2">
                                                       <FaPhone />
                                                       <span className="text-md font-semibold text-blue-950">
                                                            +91 99204 41626
                                                       </span>
                                                  </div>
                                             </Button>
                                        </div>
                                        <div className="sm:hidden inline">
                                             <Button
                                                  value="Donate Now"
                                                  styles="animate__animated animate__fadeInLeft animate__delay-1s"
                                                  onClick={() => navigate(ROUTES.DONATION)}
                                                  sm
                                             />
                                             <Button
                                                  styles="animate__animated animate__fadeInRight animate__delay-1s"
                                                  transparent
                                                  sm
                                             >
                                                  <div className="flex items-center gap-x-2">
                                                       <FaPhone />
                                                       <span className="text-md font-semibold text-blue-950">
                                                            +91 99204 41626
                                                       </span>
                                                  </div>
                                             </Button>
                                        </div>
                                   </div>
                              </div>
                              <div className="xl:flex-1 flex justify-center items-center">
                                   <img
                                        className="w-full  rounded-lg"
                                        src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt=""
                                   />
                              </div>
                         </div>
                    </div>
               </div>
               <ProgramsModule
                    tagLine="Our Cases You Can See"
                    heading="Explore Our Latest Programs That We Works"
                    isHomePage
               />
               <AboutModule />
               <MissionModule />
          </div>
     );
};
