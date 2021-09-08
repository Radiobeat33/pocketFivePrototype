import React from 'react';
import DynamicLink from '../../link/dynamicLink';
import { topNavList } from '../../../../constants/paths.constants';
import './bottom-nav.module.scss';

interface NewProps {
  currentSection: string;
  currentSubSection: string;
}

const hasSubmenuItems = (str: string) => {
  return ['articles', 'rankings', 'staking'].includes(str);
};

const BottomNav: React.FunctionComponent<NewProps> = (props: NewProps) => {
  const currentList = topNavList.find((listItem) => {
    return listItem.stateName === props.currentSection;
  });
  return (
    <nav
      data-testid="bottom-nav"
      className={`bottom-nav${hasSubmenuItems(props.currentSection) ? '' : '__hide'}`}
    >
      <div className="secondary-nav-group">
        <span
          className={`secondary-nav-item-section ${
            hasSubmenuItems(props.currentSection) && !props.currentSubSection ? 'active' : ''
          }`}
        >
          <DynamicLink
            to={{ title: currentList?.title || 'N/A', endpoint: currentList?.endpoint || 'N/A' }}
          />
        </span>
        {currentList?.submenu.map((item, index) => (
          <span
            className={`secondary-nav-item ${
              item.stateName === props.currentSubSection ? 'active' : ''
            }`}
            key={index}
          >
            <DynamicLink to={item} />
          </span>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
