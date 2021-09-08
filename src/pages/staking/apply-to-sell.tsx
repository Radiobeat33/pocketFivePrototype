import React, { Fragment } from 'react';

import withAppLayout from '../../components/shared/app-layout/app-layout';
import ApplyToSell from '../../components/sections/staking/apply-to-sell/apply-to-sell';
import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';

const currentSection = 'staking';
const currentSubSection = 'apply-to-sell';

const ApplyToSellPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <ApplyToSell />
    <Footer />
  </Fragment>
);

export default withAppLayout(ApplyToSellPage);
