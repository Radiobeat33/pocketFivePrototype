import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import SellerOfferingList from '../components/sections/staking/marketplace/seller-application-offering-list/sellerApplicationOfferingList';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import '../components/sections/staking/marketplace/marketplace.module.scss';

const currentSection = 'create-offering';
const currentSubSection = '';

const SellerApplicationPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <SellerOfferingList />
    <Footer />
  </Fragment>
);

export default withAppLayout(SellerApplicationPage);
