import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import SellerApplication from '../components/sections/seller-application/seller-application';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'create-offering';
const currentSubSection = '';

const SellerApplicationPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <SellerApplication />
    <Footer />
  </Fragment>
);

export default withAppLayout(SellerApplicationPage);
