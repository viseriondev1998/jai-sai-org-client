import React, { FC } from "react";

import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
   children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
   const Main: FC = () => children as React.ReactElement;

   return (
      <section>
         <Header />
         <Main />
         <Footer />
      </section>
   );
}