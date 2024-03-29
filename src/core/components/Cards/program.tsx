/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from 'react';

import { CAUSE_CARD_STYLES } from '../../constants';

import { Button } from '../index';

const STYLES = CAUSE_CARD_STYLES;

type ProgramCardProps = {
   img: string;
   title: string;
   subTitle?: string;
   description?: string;
   onClick?: () => void;
   onDonate?: () => void;
};

export const ProgramCard: FC<ProgramCardProps> = ({ title, subTitle, description, img, onClick, onDonate }) => {
   return (
      <div className={STYLES.MAIN}>
         <div className={STYLES.IMG}>
            <img src={img} alt="program-image" className="w-full rounded-md-top object-cover aspect-video" />
         </div>
         <div className={STYLES.BODY}>
            <h4 className={STYLES.SUB_TITLE}>
               {subTitle}
            </h4>
            <h3 className={STYLES.TITLE} onClick={onClick}>
               {title}
            </h3>
            <p className={STYLES.DESCRIPTION}>
               <div dangerouslySetInnerHTML={{ __html: description as string | TrustedHTML }} />
            </p>   
            <div className="mt-6">
               <Button value="Donate Now" onClick={onDonate} sm />
            </div>
         </div>
      </div>
   );
}  