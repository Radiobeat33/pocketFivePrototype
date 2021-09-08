import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import Accolades from '../components/sections/accolades/accolades';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'accolades';
const currentSubSection = '';

const AccoladesPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <Accolades />
    <Footer />
  </Fragment>
);

export default withAppLayout(AccoladesPage);
