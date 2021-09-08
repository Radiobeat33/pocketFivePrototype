import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import Articles from '../components/sections/articles/articles';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'articles';
const currentSubSection = '';

const ArticlesPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <Articles />
    <Footer />
  </Fragment>
);

export default withAppLayout(ArticlesPage);
