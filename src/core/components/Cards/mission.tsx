import React, { FC } from 'react';

import { MISSION_CARD_STYLES } from '../../constants';

const STYLES = MISSION_CARD_STYLES;

type MissionCardProps = {
   title: string;
   description: string;
   icon: JSX.Element;
   onClick?: () => void;
};

export const MissionCard: FC<MissionCardProps> = ({ title, description, icon, onClick}) => {
   return (
      <div className={STYLES.MAIN} onClick={onClick}>
         <div className={STYLES.BODY}>
            <div className={STYLES.ICON}>
               {icon}
            </div>
            <h3 className={STYLES.TITLE}>
               {title}
            </h3>
            <p className={STYLES.DESCRIPTION}>
               {description}
            </p>
         </div>
      </div>
   );
}  