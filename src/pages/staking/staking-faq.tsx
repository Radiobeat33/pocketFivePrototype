import React, { Fragment } from 'react';

import withAppLayout from '../../components/shared/app-layout/app-layout';
import StakingFAQ from '../../components/sections/staking/staking-faq/staking-faq';
import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';

const currentSection = 'staking';
const currentSubSection = 'staking-faq';

const StakingFAQPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <StakingFAQ />
    <Footer />
  </Fragment>
);

export default withAppLayout(StakingFAQPage);
