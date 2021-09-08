import React, { Fragment } from 'react';

import withAppLayout from '../../components/shared/app-layout/app-layout';
import Podcasts from '../../components/sections/articles/podcasts/podcasts';
import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';

const currentSection = 'articles';
const currentSubSection = 'podcasts';

const PodcastsPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <Podcasts />
    <Footer />
  </Fragment>
);

export default withAppLayout(PodcastsPage);
