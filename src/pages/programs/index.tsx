import React, { FC } from 'react';

import { Layout } from '../../core/components/Layout';
import { PageLayout } from '../../core/components/Layout/Page';
import { ProgramsModule } from '../../modules';

export const Programs: FC = () => {
   return (
      <Layout>
         <PageLayout title="Latest Programs">
            <ProgramsModule />
         </PageLayout>
      </Layout>
   );
};
