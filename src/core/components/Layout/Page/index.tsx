import React, { FC } from 'react';

type PageLayoutProps = {
   title: string;
   children: React.ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
   return (
      <div>
         <div
            className="h-40 sm:h-72 w-full bg-contain sm:bg-cover"
            style={{
               background: "url('./images/hero2.png')",
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
            }}
         >
            <div className="flex items-center justify-center h-full w-full">
               <h1 className="text-3xl sm:text-5xl font-bold text-blue-950 tracking-wide">
                  {title}
               </h1>
            </div>
         </div>
         <div className="bg-slate-50 px-8 sm:px-40 py-16 sm:py-40">
            {children}
         </div>
      </div>
   );
};
