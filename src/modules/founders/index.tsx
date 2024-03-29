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
                         <Card
                              title="Subodh Gangaram Bawdane"
                              description="Dr. subodh Gangaram bawdane is a MBBS doctor, he studied in DY Patil medical college kolhapur , he started his carrier as medical officer in Malgund  in Ratangiri peripheral aera.
                  He shifted to mumbai and started clinic in  parksite vikhroli w and completed 27 years of successful practice."
                         />
                         <Card
                              title="Bharti Subodh Bawdane"
                              description="Dr. Bharti subodh bawdane is a MBBS doctor, she studied in DY Patil medical college kolhapur , she started her carrier as medical officer in khandala vatad in Ratangiri peripheral aera.
                  She shifted to mumbai and started clinic in  parksite vikhroli w and completed 26 years of successful practice."
                         />
                    </div>
               </>
          );
     };

     return <div className="bg-slate-50 px-8 sm:px-40 py-16 sm:py-40">{renderFounders()}</div>;
};
