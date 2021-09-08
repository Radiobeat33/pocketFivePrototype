import React, { Fragment } from 'react';

import withAppLayout from '../../components/shared/app-layout/app-layout';
import Features from '../../components/sections/articles/features/features';
import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';

const currentSection = 'articles';
const currentSubSection = 'features';

const FeaturesPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <Features />
    <Footer />
  </Fragment>
);

export default withAppLayout(FeaturesPage);
