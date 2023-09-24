import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

type LandingPageLayoutProps = {
  children: React.ReactNode;
};

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
      <div>
          <Header />
          {children}
          <Footer />
      </div>
  );
};

export default LandingPageLayout;
