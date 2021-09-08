import React, { useState } from 'react';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import JoinSignInModal from '../join-sign-in-modal/join-sign-in-modal';
import { topNavList, secondaryNavList } from '../../../constants/paths.constants';
import './mobile-nav-menu.module.scss';

function MobileNavMenu(): JSX.Element {
  const [activeDropdown, setActiveDropdown] = useState('');

  const setDropdown = (str: string): void => {
    const newDropdownState = str !== activeDropdown ? str : '';
    setActiveDropdown(newDropdownState);
  };

  const burgerHandler = () => {
    const header = document.querySelector('.mobile-header');
    header?.classList.toggle('menu-opened');
  };
  return (
    <div className="mobile-nav-menu">
      <div className="mobile-header">
        <div className="mobile-top-section">
          <div
            className="burger-container btn"
            onClick={burgerHandler}
            onKeyDown={burgerHandler}
            role="link"
            tabIndex={0}
          >
            <div id="burger">
              <div className="bar topBar"></div>
              <div className="bar btmBar"></div>
            </div>
          </div>
          <div className="icon">
            <a href="/">
              <img className="logo-mobile" src="/assets/Logo_130_42_icn.png" alt="logo-mobile" />
            </a>
          </div>
          <div className="navigation-buttons"></div>
        </div>
        <ul className="menu">
          <div className="search-container">
            <input type="text" placeholder="Search" />
            <img className="search-icon" src="/assets/search_icn.png" alt="search-icon" />
          </div>
          <div className="divider"></div>
          {topNavList.map((item, index) => (
            <React.Fragment key={index}>
              <li
                className={`menu-item ${index === topNavList.length - 1 ? 'menu-item__last' : ''}`}
              >
                <a href={item.endpoint}>{item.title}</a>
                <span
                  className="menu-item-chevron btn"
                  onClick={() => setDropdown(item.title)}
                  onKeyDown={() => setDropdown(item.title)}
                  role="button"
                  tabIndex={index}
                >
                  {activeDropdown === item.title ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
                </span>
              </li>
              {activeDropdown === item.title ? (
                <div className="submenu-container">
                  {item.submenu.map((subitem, subindex) => (
                    <li className="submenu-item" key={subindex}>
                      <a href={subitem.endpoint}>{subitem.title}</a>
                    </li>
                  ))}
                </div>
              ) : null}
            </React.Fragment>
          ))}
          <div className="divider__large"></div>
          <div className="submenu-container">
            {secondaryNavList.map((secondaryItem, secondaryIndex) => (
              <li className="submenu-item" key={secondaryIndex}>
                <a href={secondaryItem.endpoint}>{secondaryItem.title}</a>
              </li>
            ))}
          </div>
          <div className="divider__large"></div>
          <div className="bottom-navigation-buttons">
            <JoinSignInModal currentSection={'signin'} buttonWording={'Sign In'} />

            <div className="join-section">
              Don&apos;t have an account?{' '}
              <JoinSignInModal currentSection={'create-account'} buttonWording={'Join Now'} />.
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavMenu;
