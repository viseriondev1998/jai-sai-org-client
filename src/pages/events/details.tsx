import React, { FC } from 'react';

import { Layout } from '../../core/components/Layout';
import { PageLayout } from '../../core/components/Layout/Page';
import { EventsDetailsModule } from '../../modules';

export const EventDetails: FC = () => {
   return (
      <Layout>
         <PageLayout title="Event Details">
            <EventsDetailsModule />
         </PageLayout>
      </Layout>
   );
};
