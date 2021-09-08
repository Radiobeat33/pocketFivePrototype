import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import OnlinePoker from '../components/sections/online-poker/online-poker';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'online-poker';
const currentSubSection = '';

const OnlinePokerPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <OnlinePoker />
    <Footer />
  </Fragment>
);

export default withAppLayout(OnlinePokerPage);
