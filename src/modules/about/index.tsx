import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../core/components';

export const AboutModule: FC = (): JSX.Element => {
   const navigate = useNavigate();

   return (
      <div className="bg-white px-8 sm:px-40 py-16 sm:py-44">
         <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="w-full">
               <p className="text-emerald-500 text-base sm:text-xl font-medium tracking-wide sm:tracking-wider mb-4 sm:mb-6">
                  About Our Foundetion
               </p>
               <h1 className="text-blue-950 text-3xl sm:text-5xl font-semibold tracking-wide leading-normal mb-6 sm:mb-12 w-full">
                  Empowering Lives: A Dual Approach to Health
               </h1>
               <p className="text-sm sm:text-base text-gray-500 tracking-normal sm:tracking-wide font-light leading-7 mb-5 sm:mb-10">
                  In 2020, the non-profit organization "Health Empowerment Initiative" recognized the
                  urgent need for health awareness in a diverse urban community facing high rates of
                  HIV/AIDS and cancer.
               </p>
               <p className="text-sm sm:text-base text-gray-500 tracking-normal sm:tracking-wide font-light leading-7 mb-5 sm:mb-12">
                  Determined to address both public health challenges simultaneously,
                  the organization initiated a comprehensive health awareness program. This case story
                  details the successful implementation of dual HIV and cancer awareness initiatives.
               </p>
               <div className="sm:block hidden">
                  <Button value="About US" onClick={() => navigate('/about')} />
               </div>
               <div className="sm:hidden block">
                  <Button value="About US" onClick={() => navigate('/about')} sm />
               </div>
            </div>
            <div className="relative w-full bg-white sm:block hidden">
               <div className="flex flex-col items-end">
                  <img src="./images/about1.jpg" alt="about-1" className="w-96" />
               </div>
               <div className="absolute -bottom-8 left-28">
                  <img src="./images/about2.jpg" alt="about-2" className="w-64 border-r-[14px] border-t-[14px] border-emerald-500" />
               </div>
            </div>
         </div>
      </div>
   );
};
