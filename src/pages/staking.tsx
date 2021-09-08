import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import Staking from '../components/sections/staking/staking';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'staking';
const currentSubSection = '';

const StakingPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <Staking />
    <Footer />
  </Fragment>
);

export default withAppLayout(StakingPage);
