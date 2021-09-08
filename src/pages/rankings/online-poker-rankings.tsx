import React, { Fragment } from 'react';

import withAppLayout from '../../components/shared/app-layout/app-layout';
import OnlinePokerRankings from '../../components/sections/rankings/online-poker-rankings/online-poker-rankings';
import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';

const currentSection = 'rankings';
const currentSubSection = 'online-poker-rankings';

const OnlinePokerRankingsPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <OnlinePokerRankings />
    <Footer />
  </Fragment>
);

export default withAppLayout(OnlinePokerRankingsPage);
