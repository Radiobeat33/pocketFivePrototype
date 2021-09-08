import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import CreateOffering from '../components/sections/create-offering/create-offering';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'create-offering';
const currentSubSection = '';

const CreateOfferingPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <CreateOffering />
    <Footer />
  </Fragment>
);

export default withAppLayout(CreateOfferingPage);
