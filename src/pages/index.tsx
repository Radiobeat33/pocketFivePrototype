import React, { Fragment } from 'react';

import Home from '../components/sections/home/home';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import withAppLayout from '../components/shared/app-layout/app-layout';
import '../styles/main.scss';

const currentSection = 'home';
const currentSubSection = '';

const HomePage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <Home />
    <Footer />
  </Fragment>
);

export default withAppLayout(HomePage);
