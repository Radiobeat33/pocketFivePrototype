import React, { Fragment } from 'react';

import withAppLayout from '../../components/shared/app-layout/app-layout';
import Marketplace from '../../components/sections/staking/marketplace/marketplace';
import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';

const currentSection = 'staking';
const currentSubSection = 'marketplace';

const MarketplacePage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <Marketplace />
    <Footer />
  </Fragment>
);

export default withAppLayout(MarketplacePage);
