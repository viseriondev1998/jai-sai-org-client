import React, { FC } from 'react';

import { Layout } from '../../core/components/Layout';
import { PageLayout } from '../../core/components/Layout/Page';
import { AboutModule, MissionModule, IntroductionModule, FoundersModule, ActivitiesModule } from '../../modules';

export const About: FC = () => {
   return (
      <Layout>
         <PageLayout title="About US">
            <IntroductionModule />
         </PageLayout>
         <AboutModule />
         <FoundersModule />
         <ActivitiesModule />
         <MissionModule />
      </Layout>
   );
};
