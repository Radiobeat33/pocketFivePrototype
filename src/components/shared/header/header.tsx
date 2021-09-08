import React from 'react';
import TopNav from './top-nav/top-nav';
import SecondaryNav from './secondary-nav/secondary-nav';
import BottomNav from './bottom-nav/bottom-nav';
import MobileNavMenu from '../../../components/shared/mobile-nav-menu/mobile-nav-menu';
import './header.module.scss';

interface NewProps {
  currentSection: string;
  currentSubSection: string;
}

const Header: React.FunctionComponent<NewProps> = (props: NewProps) => (
  <div data-testid="header" className="header">
    <div className="mobile">
      <MobileNavMenu />
    </div>
    <div className="desktop">
      <div className="desktop-border">
        <TopNav currentSection={props.currentSection} />
        <SecondaryNav />
      </div>
      <BottomNav
        currentSection={props.currentSection}
        currentSubSection={props.currentSubSection}
      />
    </div>
  </div>
);
export default Header;
