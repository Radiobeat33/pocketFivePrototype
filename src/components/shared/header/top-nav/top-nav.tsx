import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DesktopNavMenu from '../../desktop-nav-menu/desktop-nav-menu';
import JoinSignInModal from '../../join-sign-in-modal/join-sign-in-modal';

import './top-nav.module.scss';

interface NewProps {
  currentSection: string;
}

const TopNav: React.FunctionComponent<NewProps> = (props: NewProps) => (
  <nav data-testid="top-nav" className="top-nav">
    <div className="mobile-menu">
      <MenuIcon />
    </div>
    <div className="logo">
      <a href="/">
        <img className="logo-mobile" src="/assets/logo_20_22_icn.png" alt="logo-mobile" />
        <img className="logo-desktop" src="/assets/logo_20_22_icn@2x.png" alt="logo-desktop" />
      </a>
    </div>
    <div className="navigation-section">
      <DesktopNavMenu {...props} />
    </div>
    <div className="search">
      <SearchIcon />
    </div>
    <div className="navigation-buttons">
      <JoinSignInModal currentSection={'signin'} />
      <JoinSignInModal currentSection={'create-account'} />
    </div>
  </nav>
);

export default TopNav;
