import React from 'react';
import AdSection from './ad-section/ad-section';
import './marketplace.module.scss';
import OfferingListItem from './offering-list/offeringListItem';

function Marketplace(): JSX.Element {
  return (
    <div className="marketplace">
      <AdSection />
      <OfferingListItem />
    </div>
  );
}

export default Marketplace;
