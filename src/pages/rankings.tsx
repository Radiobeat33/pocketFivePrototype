import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import Rankings from '../components/sections/rankings/rankings';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'rankings';
const currentSubSection = '';

const RankingsPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <Rankings />
    <Footer />
  </Fragment>
);

export default withAppLayout(RankingsPage);
