import React, { FC } from 'react';

import { Layout } from '../../core/components/Layout';
import { PageLayout } from '../../core/components/Layout/Page';
import { DonationModule } from '../../modules';

export const Donation: FC = () => {
   return (
      <Layout>
         <PageLayout title="Donation">
            <DonationModule />
         </PageLayout>
      </Layout>
   );
};
