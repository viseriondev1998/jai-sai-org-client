import React, { FC } from "react";

import { FooterTop } from "./top";

export const Footer: FC = (): JSX.Element => {
   return (
      <footer className="px-10 sm:px-72 pt-10 sm:pt-28 pb-6 sm:pb-8 w-full h-auto" style={{ background: "url('/images/footer-bg.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
         <FooterTop />
         <div className="flex items-center justify-between border-t border-slate-600 pt-6 sm:pt-8 w-full">
            <p className="inline-block text-xs sm:text-sm text-slate-500 py-0 font-light focus:outline-none active:outline-none">Copyright &copy;2024</p>
            {/* <div className="inline-block text-base text-slate-500 py-0 font-light focus:outline-none active:outline-none">
               Developed by Anil & Aakash
            </div> */}
         </div>
      </footer>
   );
};
