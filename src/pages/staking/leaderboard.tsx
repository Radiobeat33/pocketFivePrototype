import React, { Fragment } from 'react';

import withAppLayout from '../../components/shared/app-layout/app-layout';
import Leaderboard from '../../components/sections/staking/leaderboard/leaderboard';
import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';

const currentSection = 'staking';
const currentSubSection = 'leaderboard';

const LeaderboardPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <Leaderboard />
    <Footer />
  </Fragment>
);

export default withAppLayout(LeaderboardPage);
