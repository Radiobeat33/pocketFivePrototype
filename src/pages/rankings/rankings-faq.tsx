import React, { Fragment } from 'react';

import withAppLayout from '../../components/shared/app-layout/app-layout';
import RankingsFAQ from '../../components/sections/rankings/rankings-faq/rankings-faq';
import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';

const currentSection = 'rankings';
const currentSubSection = 'rankings-faq';

const RankingsFAQPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <RankingsFAQ />
    <Footer />
  </Fragment>
);

export default withAppLayout(RankingsFAQPage);
