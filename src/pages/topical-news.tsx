import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import TopicalNews from '../components/sections/topical-news/topical-news';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'topical-news';
const currentSubSection = '';

const TopicalNewsPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <TopicalNews />
    <Footer />
  </Fragment>
);

export default withAppLayout(TopicalNewsPage);
