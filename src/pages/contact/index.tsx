import React, { FC } from 'react';

import { Layout } from '../../core/components/Layout';
import { PageLayout } from '../../core/components/Layout/Page';

import { ContactModule } from '../../modules';

export const Contact: FC = () => {
   return (
      <Layout>
         <PageLayout title="Contact US">
            <ContactModule />
         </PageLayout>
      </Layout>
   );
};
