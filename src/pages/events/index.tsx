import React, { FC } from 'react';

import { Layout } from "../../core/components/Layout";
import { PageLayout } from "../../core/components/Layout/Page";
import { EventsModule } from "../../modules";

export const Events: FC = () => {
   return (
      <Layout>
         <PageLayout title="Our Events">
            <EventsModule />
         </PageLayout>
      </Layout>
   );
};
