import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import Coaches from '../components/sections/coaches/coaches';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'coaches';
const currentSubSection = '';

const CoachesPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <Coaches />
    <Footer />
  </Fragment>
);

export default withAppLayout(CoachesPage);
