import React, { FC } from 'react';

import { Layout } from '../../core/components/Layout';
import { PageLayout } from '../../core/components/Layout/Page';
import { ProgramDetailsModule } from '../../modules';

export const ProgramDetails: FC = () => {
   return (
      <Layout>
         <PageLayout title="Program Details">
            <ProgramDetailsModule />
         </PageLayout>
      </Layout>
   );
};
