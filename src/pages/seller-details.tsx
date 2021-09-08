import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import SellerApplicationDetails from '../components/sections/staking/marketplace/seller-application-offering-list/details/seller-details';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'create-detail';
const currentSubSection = '';

const SellerApplicationPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <SellerApplicationDetails />
    <Footer />
  </Fragment>
);

export default withAppLayout(SellerApplicationPage);
