import React, { FC } from 'react';

import { HomeModule } from "../../modules";
import { Layout } from "../../core/components/Layout";

export const Home: FC = (): JSX.Element => {
    return (
        <Layout>
            <HomeModule />
        </Layout>
    )
}