import React, { FC } from 'react';

import { Layout } from '../../core/components/Layout';
import { PageLayout } from '../../core/components/Layout/Page';

export const Blogs: FC = () => {
   return (
      <Layout>
         <PageLayout title="Blogs">
            <h1 className="text-slate-400 text-4xl font-medium tracking-wide leading-normal mb-12 text-center">
               Comming soon
            </h1>
         </PageLayout>
      </Layout>
   );
};
