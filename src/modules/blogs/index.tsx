import React, { FC } from 'react';

// import { EventCard as Card } from '../../core/components';

export const BlogsModule: FC = (): JSX.Element => {
   return (
      <div className="bg-slate-50 px-72 py-48 w-full h-screen">
         <div className="text-center">
            <p className="text-emerald-500 text-xl font-medium tracking-wider mb-6">
               Our Recent Blog
            </p>
            <h1 className="text-blue-950 text-5xl font-semibold tracking-wide leading-normal mb-12">
               Latest News From Our <br /> Recent Blog
            </h1>
         </div>
         <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-slate-300 text-4xl font-medium tracking-wide leading-normal mb-12">
               Comming soon
            </h1>
            {/* <Card title="Donation is hope" img="" date="8:30 - 9:30" location="Gujarat, India" />
            <Card title="" img="A hand for children" date="8:30 - 9:30" location="Gujarat, India" />
            <Card title="Help for children" img="" date="8:30 - 9:30" location="Gujarat, India" /> */}
         </div>
      </div>
   );
};