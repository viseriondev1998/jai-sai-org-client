/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { CAUSE_CARD_STYLES } from '../../constants';

import { Button } from '../index';

const STYLES = CAUSE_CARD_STYLES;

type EventCardProps = {
   title: string;
   description: string;
   images: string[];
   onClick?: () => void;
   onDonate?: () => void;
};

export const EventCard: FC<EventCardProps> = ({ title, images, description, onClick, onDonate }): JSX.Element => {
   return (
      <div className={STYLES.MAIN}>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className={STYLES.IMG}>
               <Carousel
                  autoPlay
                  infiniteLoop
                  showStatus={false}
                  showArrows={false}
                  showIndicators={false}
                  interval={5000}
                  transitionTime={1000}
                  stopOnHover
                  dynamicHeight
               >
                  {images.map((img) => (
                     <img src={img} alt="program-image" className="w-full rounded-md-top object-cover aspect-video" />
                  ))}
               </Carousel>
            </div>
            <div className={`text-left ${STYLES.BODY}`}>
               <h3 className={STYLES.TITLE} onClick={onClick}>
                  {title}
               </h3>
               <p className={`${STYLES.DESCRIPTION}`}>
                  <div dangerouslySetInnerHTML={{ __html: description as string | TrustedHTML }} />
               </p>
               <div className="mt-6">
                  <Button value="Donate Now" onClick={onDonate} sm />
               </div>
            </div>
         </div>
      </div>
   );
};