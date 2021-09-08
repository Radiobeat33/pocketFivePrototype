import React, { Fragment } from 'react';

import withAppLayout from '../../components/shared/app-layout/app-layout';
import PocketfivesLeaderboards from '../../components/sections/rankings/pocketfives-leaderboards/pocketfives-leaderboards';
import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';

const currentSection = 'rankings';
const currentSubSection = 'pocketfives-leaderboards';

const PocketfivesLeaderboardsPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <PocketfivesLeaderboards />
    <Footer />
  </Fragment>
);

export default withAppLayout(PocketfivesLeaderboardsPage);
