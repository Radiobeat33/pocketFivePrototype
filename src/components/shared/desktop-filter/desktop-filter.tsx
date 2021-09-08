import React, { Fragment, useEffect, useState } from 'react';

import './desktop-filter.module.scss';

interface NewProps {
  filterOptions: string[];
  filterOverride: string;
  onFilterOptionUpdate(arg0: string): void;
}

const DesktopFilter: React.FunctionComponent<NewProps> = (props: NewProps) => {
  const [activeFilter, setActiveFilter] = useState(props.filterOverride);

  useEffect(() => {
    props.onFilterOptionUpdate(activeFilter);
  }, [activeFilter]);

  return (
    <Fragment>
      <div className="filter-container filter-container-mobile-hide">
        <div className="filter-options">
          <span className="filter-header">Filter By</span>
          <span
            className={`filter-item${props.filterOverride === 'All' ? '__active' : ''}`}
            onClick={() => setActiveFilter('All')}
            onKeyDown={() => setActiveFilter('All')}
            role="button"
            tabIndex={-1}
          >
            All
          </span>
          {props.filterOptions.map((option, index) => (
            <span
              className={`filter-item${props.filterOverride === option ? '__active' : ''}`}
              key={index}
              onClick={() => setActiveFilter(option)}
              onKeyDown={() => setActiveFilter(option)}
              role="button"
              tabIndex={index}
            >
              {option}
            </span>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default DesktopFilter;
