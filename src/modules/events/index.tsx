
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import { useGetAllGalleryQuery } from '../../core/services';
import { ROUTES } from '../../core/enums';

import { EventCard as Card, Loader } from '../../core/components';

type EventsProps = {
   isHomePage?: boolean;
}

export const EventsModule: FC<EventsProps> = ({ isHomePage }): JSX.Element => {
   const { data: gallery, isError, error, isLoading } = useGetAllGalleryQuery();

   const navigate = useNavigate();
   
   useEffect(() => {
      if (isError) {
         console.log('Error:', error);
      }
   }, [isError, error]);

   const renderEvents = () => {
      if (isLoading) {
         return <Loader />;
      }

      return (
         <>
            <div className="text-center">
               <p className="text-emerald-500 text-base sm:text-xl font-medium tracking-wider mb-6">
                  What We Are Doing
               </p>
               <h1 className="text-blue-950 text-3xl sm:text-5xl font-semibold tracking-wide leading-normal mb-12">
                  We Arrange Many Social Events <br /> For Charity Donations
               </h1>
            </div>

            <Carousel
               autoPlay
               infiniteLoop
               showThumbs={false}
               showStatus={false}
               showArrows={false}
               showIndicators={false}
               interval={5000}
               transitionTime={1000}
               stopOnHover
            >
               {gallery?.data && gallery?.data
               ?.slice(0, isHomePage ? 3 : gallery?.data.length)
               ?.map((g) => (
                  <Card
                     title={g.title}
                     images={g.images}
                     description={g.description}
                     onClick={() => navigate(`${ROUTES.EVENTS}/${g._id}`)}
                     onDonate={() => navigate(`${ROUTES.DONATION}?eventId=${g._id}`)}
                  />
               ))}
            </Carousel>
         </>
      );
   }

   if (isHomePage) {
      return (
         <div className="px-64 py-44 w-full h-screen" style={{ background: "url('./images/events-bg.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            {renderEvents()}
         </div>
      );
   }

   return renderEvents();
};
