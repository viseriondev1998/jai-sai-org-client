import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetAllProgramQuery, useGetAllEventsCategoryQuery } from '../../core/services';
import { ProgramCard as Card, Button, Loader } from '../../core/components';

import { ROUTES } from '../../core/enums';


type ProgramsModuleProps = {
   tagLine?: string;
   heading?: string;
   isHomePage?: boolean;
};

type SelectedCategoryProps = {
   label: string;
   id: string | null;
};


const smallButtonStyles = 'px-8 py-2 text-s font-medium rounded-sm capitalize';

export const ProgramsModule: FC<ProgramsModuleProps> = ({ tagLine, heading, isHomePage }) => {
   const [selectedCategory, setSelectedCategory] = useState<SelectedCategoryProps>({ label: 'All', id: null });
   const { data: programs, isError: isProgramError, error: programError, isLoading: programLoading } = useGetAllProgramQuery();
   const { data: categories, isError: isCategoryError, error: categoryError, isLoading: categoryLoading } = useGetAllEventsCategoryQuery();

   const navigate = useNavigate();

   const handleCategoryChange = (label: string, id: string | null) => {
      setSelectedCategory({ label, id });
   }

   useEffect(() => {
            if (isProgramError) {
         console.log('Error:', programError);
      }
      if (isCategoryError) {
         console.log('Error:', categoryError);
      }
   }, [isProgramError, programError, programs, programLoading, isCategoryError, categoryError, categories, categoryLoading]);


   const renderPrograms = () => {
      if (programLoading) {
         return <Loader />;
      }

      return (
         <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 sm:gap-8">
            {programs?.data && programs?.data.length ? programs?.data
               ?.slice(0, isHomePage ? 3 : programs?.data.length)
               ?.filter((program) => {
                  if (isHomePage || selectedCategory.label === 'All') {
                     return program;
                  }
                  return program.categoryId._id === selectedCategory.id;
               })
               ?.map((program) => (
                  <Card
                     title={program.label}
                     subTitle={program.subTitle}
                     description={program.description}
                     img={program.image || './images/no-image.jpeg'}
                     onClick={() => navigate(`${ROUTES.PROGRAMS}/${program._id}`)}
                     onDonate={() => navigate(`${ROUTES.DONATION}?programId=${program._id}`)}
                  />
            )) : (
               <>
                  <Card
                     img="./images/case1.png"
                     title="Ensure education for every poor childen"
                     subTitle="The printing and typesetting industry."
                     description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  />
                  <Card
                     img="./images/case2.png"
                     title="Providing healthy food for the children"
                     subTitle="The printing and typesetting industry."
                     description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  />
                  <Card
                     img="./images/case3.png"
                     title="Supply drinking water for the people"
                     subTitle="The printing and typesetting industry."
                     description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  />
               </>
            )}
         </div>
      );
   };

   if (isHomePage) {
      return (
         <div className="bg-slate-50 px-8 sm:px-40 py-16 sm:py-40">
            {tagLine && heading ? (
               <div className="flex flex-col items-center justify-center w-full text-center">
                  <p className="text-emerald-500 text-sm sm:text-xl font-medium tracking-wide sm:tracking-wider mb-4 sm:mb-6">
                     {tagLine}
                  </p>
                  <h1 className="text-blue-950 text-3xl sm:text-5xl font-semibold tracking-wide leading-normal mb-8 sm:mb-12 w-full sm:w-3/5">
                     {heading}
                  </h1>
               </div>
            ) : null}
            {renderPrograms()}
         </div>
      );
   };

   return (
      <div>
         <div className="flex items-center gap-x-2 mb-8">
            <Button
               onClick={() => handleCategoryChange('All', null)}
               value="All"
               styles={smallButtonStyles}
               transparent={selectedCategory.label !== 'All'}
               sm
            />
            {!categoryLoading && categories?.data && categories?.data.length ? categories?.data?.map((category) => (
               <Button
                  onClick={() => handleCategoryChange(category.label, category._id)}
                  styles={smallButtonStyles}
                  transparent={selectedCategory.label !== category.label && selectedCategory.id !== category._id}
                  sm
               >
                  <span className={selectedCategory.label !== category.label && selectedCategory.id !== category._id ? 'text-slate-500' : 'text-white'}>{category.label}</span>
               </Button>
            )) : null}
         </div>

         {renderPrograms()}
      </div>
   );
};