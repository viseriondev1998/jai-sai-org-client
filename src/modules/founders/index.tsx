import React, { FC } from "react";

import { FounderCard as Card } from "../../core/components";

export const FoundersModule: FC = () => {
     const renderFounders = () => {
          return (
               <>
                    <div className="text-center">
                         <p className="text-emerald-500 text-base sm:text-xl font-medium tracking-wide sm:tracking-wider mb-2.5 sm:mb-4">
                              About Our Founders
                         </p>
                         <h1 className="text-blue-950 text-3xl sm:text-5xl font-semibold tracking-wide leading-normal mb-8 sm:mb-20">
                              Our Founders
                         </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 sm:gap-8">
                         <Card title="Pankaj Kanji Nisar" />
                    </div>
               </>
          );
     };

     return <div className="bg-slate-50 px-8 sm:px-40 py-16 sm:py-40">{renderFounders()}</div>;
};
