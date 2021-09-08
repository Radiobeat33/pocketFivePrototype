import React from 'react';
// import Button from '@material-ui/core/Button';
import './marketplace-filter.module.scss';

function MarketplaceFilter(): JSX.Element {
  return (
    <div className={'marketplace-filter-sort'}>
      <div className={'marketplace-filter-container'}>
        <div className={'marketplace-filter-section-container'}>Filter by</div>
        <div className={'search-player marketplace-filter-section-container'}>
          <input
            id="search-player"
            type="text"
            placeholder="Search Players"
            className={'marketplace-filter-sections'}
          />
        </div>
        <div className={'event-dropdown marketplace-filter-section-container'}>
          <select name="Events" id="Events" className={'marketplace-filter-sections'}>
            <option value="">Events:</option>
            <option value="volvo">WSOP</option>
            <option value="saab">WCOOP</option>
            <option value="mercedes">SCOOP</option>
          </select>
        </div>
        <div className={'featured-status marketplace-filter-section-container'}>
          <button className={'marketplace-filter-sections'}>Featured</button>
        </div>
        <div className={'online-status marketplace-filter-section-container'}>
          <button className={'marketplace-filter-sections'}>Online</button>
        </div>
        <div className={'live-status marketplace-filter-section-container'}>
          <button className={'marketplace-filter-sections'}>Live (On Location)</button>
        </div>
        <div className={'hide-sold-status marketplace-filter-section-container'}>
          <button className={'marketplace-filter-sections'}>Hide Sold</button>
        </div>
        <div className={'reset marketplace-filter-section-container'}>
          <button className={'marketplace-filter-sections'}>Reset</button>
        </div>
        <div className={'info marketplace-filter-section-container'}>
          <button className={'marketplace-filter-sections'}>X</button>
        </div>
      </div>
      <div className={'marketplace-sort-container'}>sort section</div>
    </div>
  );
}

export default MarketplaceFilter;
