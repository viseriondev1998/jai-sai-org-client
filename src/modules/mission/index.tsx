import React, { FC } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { GiAwareness } from "react-icons/gi";
import { BsClipboard2PlusFill } from "react-icons/bs";
import { GiStigmata } from "react-icons/gi";

import { MissionCard as Card } from "../../core/components";

export const MissionModule: FC = () => {
     const renderMissions = () => {
          return (
               <>
                    <div className="text-center">
                         <p className="text-emerald-500 text-sm sm:text-xl font-medium tracking-wide sm:tracking-wider mb-4 sm:mb-6">
                              What We Are Doing
                         </p>
                         <h1 className="text-blue-950 text-3xl sm:text-5xl font-semibold tracking-wide leading-normal mb-8 sm:mb-20">
                              We Are In A Mission To <br /> Help The Helpless
                         </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 sm:gap-8">
                         <Card
                              title="Raise Awareness"
                              description="Increase knowledge about HIV/AIDS transmission, prevention, and cancer risk factors within the target community"
                              icon={<GiAwareness />}
                         />
                         <Card
                              title="Reduce Stigma"
                              description="Combat social stigma associated with HIV/AIDS and cancer through community engagement and open dialogue."
                              icon={<GiStigmata />}
                         />
                         {/* <Card
                  title="Testing and Screening"
                  description="Encourage regular HIV testing and cancer screenings while facilitating access to testing and screening facilities."
                  icon={(<BsClipboard2PlusFill />)}
               />
               <Card
                  title="Support Services"
                  description="Establish support services for individuals affected by HIV/AIDS and cancer, offering emotional and informational support."
                  icon={(<IoSettingsSharp />)}
               /> */}
                    </div>
               </>
          );
     };

     return <div className="bg-slate-50 px-8 sm:px-40 py-16 sm:py-40">{renderMissions()}</div>;
};
