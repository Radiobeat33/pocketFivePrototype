import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import NationalCommunity from '../components/sections/national-community/national-community';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'national-community';
const currentSubSection = '';

const NationalCommunityPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <NationalCommunity />
    <Footer />
  </Fragment>
);

export default withAppLayout(NationalCommunityPage);
