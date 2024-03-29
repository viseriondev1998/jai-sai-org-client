import React, { FC } from 'react';

export const IntroductionModule: FC = () => {

   return (
      <div className="flex flex-col items-center justify-center w-full">
         <div className="flex flex-col items-center justify-center w-full">
            <p className="text-emerald-500 text-lg sm:text-2xl font-medium tracking-wide sm:tracking-wider mb-1 sm:mb-2.5">Who Are We</p>
            <div className="bg-emerald-500 h-0.5 w-12 sm:w-24 mb-6" />
            <div className="flex flex-col items-center justify-center mb-8 sm:mb-14">
               <img src="/images/intro.jpg" alt="introduction-img" className="aspect-video w-full rounded" />
            </div>
            <h1 className="text-blue-950 text-xl sm:text-3xl font-semibold tracking-wide leading-normal mb-6 sm:mb-10 text-center">
               Empowering Lives: A Dual Approach to Health <br /> Implementing HIV and Cancer
               Awareness Programs
            </h1>
         </div>

         <div className="w-full sm:w-3/4 mb-10 sm:mb-16">
            <p className="text-slate-500 text-sm sm:text-lg font-normal tracking-wide sm:tracking-wider mb-4 sm:mb-6 text-center">
               In 2020, the non-profit organization "Health Empowerment Initiative" recognized the
               urgent need for health awareness in a diverse urban community facing high rates of
               HIV/AIDS and cancer. Determined to address both public health challenges simultaneously,
               the organization initiated a comprehensive health awareness program. This case story
               details the successful implementation of dual HIV and cancer awareness initiatives.
            </p>
         </div>

         <div className="w-full sm:w-3/4 mb-4 sm:mb-8">
            <p className="text-emerald-500 text-xl sm:text-2xl font-medium tracking-wide sm:tracking-wider mb-1 sm:mb-2.5 text-center">Vision</p>
            <div className="flex flex-col items-center justify-center w-full">
               <div className="bg-emerald-500 h-0.5 w-8 sm:w-12 mb-3.5 sm:mb-6" />
            </div>
            <p className="text-slate-500 text-sm sm:text-base font-normal tracking-wide sm:tracking-wider mb-4 sm:mb-6 text-center">
               We envision making a significant to quality education and environment.
            </p>
         </div>

         <div className="w-full sm:w-3/4 mb-4 sm:mb-8">
            <p className="text-emerald-500 text-xl sm:text-2xl font-medium tracking-wide sm:tracking-wider mb-1 sm:mb-2.5 text-center">Mission</p>
            <div className="flex flex-col items-center justify-center w-full">
               <div className="bg-emerald-500 h-0.5 w-8 sm:w-16 mb-4 sm:mb-6" />
            </div>
            <p className="text-slate-500 text-sm sm:text-base font-normal tracking-wide sm:tracking-wider mb-4 sm:mb-6 text-center">
               We strive to provide awareness, education, knowledge,
               skills, values to the less privileged children, women and
               youth which prepares them to compete in the
               mainstream environment and live with dignity in the
               society.
            </p>
         </div>

         <div className="w-full sm:w-3/4">
            <p className="text-emerald-500 text-xl sm:text-2xl font-medium tracking-wide sm:tracking-wider mb-1 sm:mb-2.5 text-center">Beneficiary Groups</p>
            <div className="flex flex-col items-center justify-center w-full">
               <div className="bg-emerald-500 h-0.5 w-28 sm:w-40 mb-4 sm:mb-6" />
            </div>
            <p className="text-slate-500 text-sm sm:text-base font-normal tracking-wide sm:tracking-wider mb-4 sm:mb-6 text-center">
               The beneficiaries will be from weaker sections and propoor communities irrespective of any caste or creed and
               the main criteria will be homelessness and financial
               backwardness. The selection of beneficiaries will be
               done by a committee constituted by the Foundation
               headed by its Chairman and other members nominated
               from inside and outside the Foundation.
            </p>
         </div>
      </div>
   );
};
