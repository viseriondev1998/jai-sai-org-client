import React, { FC } from 'react';

import { MISSION_CARD_STYLES } from '../../constants';

const STYLES = MISSION_CARD_STYLES;

type FounderCardProps = {
   title: string;
   description: string;
};

export const FounderCard: FC<FounderCardProps> = ({ title, description}) => {
   return (
      <div className={STYLES.MAIN}>
         <div className={STYLES.BODY}>
            <h3 className={`${STYLES.TITLE} text-2xl sm:text-3xl -mt-3 sm:-mt-2`}>
               {title}
            </h3>
            <p className={STYLES.DESCRIPTION}>
               {description}
            </p>
         </div>
      </div>
   );
}  