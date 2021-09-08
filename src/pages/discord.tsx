import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import Discord from '../components/sections/discord/discord';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';

const currentSection = 'discord';
const currentSubSection = '';

const DiscordPage: React.FunctionComponent = () => (
  <Fragment>
    <Header currentSection={currentSection} currentSubSection={currentSubSection} />
    <Discord />
    <Footer />
  </Fragment>
);

export default withAppLayout(DiscordPage);
