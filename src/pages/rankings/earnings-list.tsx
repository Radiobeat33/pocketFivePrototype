import React, { Fragment } from 'react';

import withAppLayout from '../../components/shared/app-layout/app-layout';
import EarningsList from '../../components/sections/rankings/earnings-list/earnings-list';
import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';

const currentSection = 'rankings';
const currentSubSection = 'earnings-list';

const EarningsListPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <EarningsList />
    <Footer />
  </Fragment>
);

export default withAppLayout(EarningsListPage);
