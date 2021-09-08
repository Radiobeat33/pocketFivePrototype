import React from 'react';
import DynamicLink from '../../link/dynamicLink';
import { secondaryNavList } from '../../../../constants/paths.constants';

import './secondary-nav.module.scss';

const SecondaryNav: React.FunctionComponent = () => (
  <div data-testid="secondary-nav" className="secondary-nav">
    <div className="secondary-nav-group">
      {secondaryNavList.map((item, index) => (
        <span className="secondary-nav-item" key={index}>
          <DynamicLink to={item} />
        </span>
      ))}
    </div>
  </div>
);

export default SecondaryNav;
