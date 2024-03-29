/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ROUTES } from '../../core/enums';
import { CAUSE_CARD_STYLES } from '../../core/constants';
import { useLazyGetProgramByIdQuery } from '../../core/services';

import { Loader, Button } from '../../core/components';

const STYLES = CAUSE_CARD_STYLES;

export const ProgramDetailsModule: FC = () => {
   const { programId } = useParams();
   const navigate = useNavigate();

   const [
      GetProgramById,
      {
         data : program,
         error,
         isError,
         isLoading,
      }
   ] = useLazyGetProgramByIdQuery();
   
   useEffect(() => {
      if (isError) {
         console.log(error);
      }
      if (programId) {
         (() => {
            GetProgramById(programId);
         })();
      }
   }, [isError, error, programId, GetProgramById, program]);

   if (isLoading) {
      return (
         <Loader />
      );
   }

   return (
      <div>
         <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-16 mb-16">
            <div className={`col-span-6 ${STYLES.IMG}`}>
               <img src={program?.data?.image} alt="program-image" className="aspect-video max-w-100 rounded-sm" />
            </div>
            <div className="col-span-6">
               <h4 className={`sm:mt-auto mt-6 ${STYLES.SUB_TITLE}`}>{program?.data?.subTitle}</h4>
               <h1 className={STYLES.TITLE}>{program?.data?.label}</h1>
               <p className={STYLES.DESCRIPTION}>
                  <div dangerouslySetInnerHTML={{ __html: program?.data?.description as string | TrustedHTML }} />
               </p>
               <div className="sm:hidden block -mt-16 sm:-mt-14">
                  <Button value="Donate Now" onClick={() => navigate(`${ROUTES.DONATION}?programId=${programId}`)} sm />
               </div>
               <div className="sm:block hidden -mt-20 sm:-mt-14">
                  <Button value="Donate Now" onClick={() => navigate(`${ROUTES.DONATION}?programId=${programId}`)} />
               </div>
            </div>
         </div>
      </div>
   );
};