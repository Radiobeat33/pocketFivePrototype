import React from 'react';
import { topNavList } from '../../../constants/paths.constants';
import { SubNavItem } from '../../../interfaces/nagivation.interface';

import './desktop-nav-menu.module.scss';

interface NewProps {
  currentSection: string;
}

const DesktopNavMenu: React.FunctionComponent<NewProps> = () => (
  <nav aria-label="Main Navigation">
    <ul>
      {topNavList.map((item, index) => (
        <li className="dropdown" key={index}>
          <button
            type="button"
            className="dropdown__title"
            aria-expanded="false"
            aria-controls="sweets-dropdown"
          >
            <a href={item.endpoint}>{item.title}</a>
          </button>
          <ul className="dropdown__menu" id="sweets-dropdown">
            {item.submenu.map((subItem: SubNavItem, subIndex: number) => (
              <li className="nav__submenu-item" key={subIndex}>
                <a href={subItem.endpoint}>{subItem.title}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </nav>
);

export default DesktopNavMenu;
