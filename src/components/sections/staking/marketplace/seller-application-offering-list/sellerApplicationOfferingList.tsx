import React, { Component, Fragment } from 'react';
import { OFFERING_MOCK_DATA } from '../../../../../constants/offering-mockdata.constants';
import { DropdownStatus, OfferingListPlayer } from '../../../../../interfaces/nagivation.interface';
import DesktopFilter from '../../../../shared/desktop-filter/desktop-filter';
import MobileFilter from '../../../../shared/mobile-filter/mobile-filter';
import './sellerApplicationOfferingList.module.scss';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SellerApplicationOfferingList extends Component<
  unknown,
  { offeringList: OfferingListPlayer[]; sellerActiveFilter: string }
> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      offeringList: OFFERING_MOCK_DATA,
      sellerActiveFilter: 'All',
    };
  }

  sellerConvertToCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  sellerDropdownStatus: DropdownStatus = {
    buyin: false,
    markup: false,
    available: false,
  };

  sellerFilterOptions: string[] = [
    'Live',
    'Pending',
    'Refunded',
    'StakeReleased',
    'Settled',
    'Cancelled',
  ];

  getActiveFilter = (filter: string): void => {
    this.setState({ sellerActiveFilter: filter });
  };

  sellerUpdateListCallback = (): void => {
    console.log('this.state update complete', this.state);
  };

  sellerWithoutTime = (date: Date): Date => {
    date.setHours(0, 0, 0, 0);
    return date;
  };

  sellerAscSortedArray = (sortByStr: string): OfferingListPlayer[] => {
    const currentList = this.state;
    if (sortByStr !== 'start') {
      return currentList.offeringList.sort((a, b) =>
        Number(a[sortByStr]) < Number(b[sortByStr])
          ? 1
          : Number(a[sortByStr]) === Number(b[sortByStr])
          ? a.player < b.player
            ? 1
            : -1
          : -1
      );
    } else {
      return currentList.offeringList.sort(
        (a, b) => new Date(b[sortByStr]).getTime() - new Date(a[sortByStr]).getTime()
      );
    }
  };

  sellerDescSortedArray = (sortByStr: string): OfferingListPlayer[] => {
    const currentList = this.state;
    if (sortByStr !== 'start') {
      return currentList.offeringList.sort((a, b) =>
        Number(a[sortByStr]) > Number(b[sortByStr])
          ? 1
          : Number(a[sortByStr]) === Number(b[sortByStr])
          ? a.player > b.player
            ? 1
            : -1
          : -1
      );
    } else {
      return currentList.offeringList.sort(
        (a, b) => new Date(a[sortByStr]).getTime() - new Date(b[sortByStr]).getTime()
      );
    }
  };

  sellerSortOfferingList = (sortByStr: string): void => {
    let sortedArray;
    // ascending
    if (!this.sellerDropdownStatus[sortByStr]) {
      this.sellerDropdownStatus = {
        buyin: false,
        markup: false,
        available: false,
      };
      this.sellerDropdownStatus[sortByStr] = true;
      sortedArray = this.sellerAscSortedArray(sortByStr);
    } else {
      // descending
      this.sellerDropdownStatus = {
        buyin: false,
        markup: false,
        available: false,
      };
      sortedArray = this.sellerDescSortedArray(sortByStr);
    }
    this.setState({ offeringList: sortedArray }, this.sellerUpdateListCallback);
  };

  sellerGetCurrency = (num: number): string => {
    return this.sellerConvertToCurrency.format(num);
  };

  render(): React.ReactNode {
    const currentList = this.state.offeringList;
    const sortedAndFilteredList = currentList.filter((filterItem) => {
      if (
        this.state.sellerActiveFilter === 'All' ||
        filterItem.status === this.state.sellerActiveFilter
      ) {
        return filterItem;
      }
    });
    return (
      <Fragment>
        <div className="seller-desktop-view-hide">
          <MobileFilter
            filterOptions={this.sellerFilterOptions}
            filterOverride={this.state.sellerActiveFilter}
            onFilterOptionUpdate={this.getActiveFilter}
          />
        </div>
        <div className="seller-offering-list">
          <DesktopFilter
            filterOptions={this.sellerFilterOptions}
            filterOverride={this.state.sellerActiveFilter}
            onFilterOptionUpdate={this.getActiveFilter}
          />
          <div className={'seller-offering-list-container'}>
            <Container className="seller-sort-list-container seller-mobile-view-hide">
              <Row className="seller-row-header">
                <Col
                  className={
                    'seller-separator seller-offering-item-padding seller-offering-item-header-align'
                  }
                  sm
                >
                  Tournament
                </Col>
                <Col
                  className={'seller-separator seller-offering-item-padding'}
                  sm
                  onKeyDown={() => this.sellerSortOfferingList('buyin')}
                  role="button"
                  onClick={() => this.sellerSortOfferingList('buyin')}
                  tabIndex={-1}
                >
                  Buy In{' '}
                  {this.sellerDropdownStatus.buyin ? (
                    <ArrowDropDownIcon style={{ fontSize: 16 }} />
                  ) : (
                    <ArrowDropUpIcon style={{ fontSize: 16 }} />
                  )}
                </Col>
                <Col
                  sm
                  onKeyDown={() => this.sellerSortOfferingList('markup')}
                  role="button"
                  onClick={() => this.sellerSortOfferingList('markup')}
                  tabIndex={-2}
                  className={'seller-separator seller-offering-item-padding'}
                >
                  Mark up{' '}
                  {this.sellerDropdownStatus.markup ? (
                    <ArrowDropDownIcon style={{ fontSize: 16 }} />
                  ) : (
                    <ArrowDropUpIcon style={{ fontSize: 16 }} />
                  )}
                </Col>
                <Col
                  className={'seller-separator seller-offering-item-padding'}
                  sm
                  onKeyDown={() => this.sellerSortOfferingList('available')}
                  role="button"
                  onClick={() => this.sellerSortOfferingList('available')}
                  tabIndex={-3}
                >
                  Available{' '}
                  {this.sellerDropdownStatus.available ? (
                    <ArrowDropDownIcon style={{ fontSize: 16 }} />
                  ) : (
                    <ArrowDropUpIcon style={{ fontSize: 16 }} />
                  )}
                </Col>
                <Col
                  sm
                  className={'seller-separator seller-offering-item-padding'}
                  onKeyDown={() => this.sellerSortOfferingList('start')}
                  role="button"
                  onClick={() => this.sellerSortOfferingList('start')}
                  tabIndex={-4}
                >
                  Start Time{' '}
                  {this.sellerDropdownStatus.start ? (
                    <ArrowDropDownIcon style={{ fontSize: 16 }} />
                  ) : (
                    <ArrowDropUpIcon style={{ fontSize: 16 }} />
                  )}
                </Col>
                <Col
                  className={'seller-offering-item-padding seller-offering-item-header-align'}
                  sm
                >
                  Status
                </Col>
              </Row>
            </Container>
            <Container className={'seller-offering-list-container'}>
              {sortedAndFilteredList.map((item, index) => (
                <Row className={'seller-offering-list-item'} key={index}>
                  <Col
                    xs={{ span: 12, order: 2 }}
                    md={{ order: 1 }}
                    className={
                      'seller-offering-list-item-tournament-name-container seller-offering-item-mobile-left seller-offering-item-wrapper'
                    }
                  >
                    <div className="seller-offering-item-margin-align seller-offering-item-wrapper-tourney-width">
                      <div className="seller-offering-item-header">{item.tourneyname}</div>
                      <div>{item.tourneylocation}</div>
                    </div>
                  </Col>
                  <Col
                    className={
                      'seller-offering-list-item-buy-in-container seller-offering-item-wrapper seller-offering-item-mobile-right'
                    }
                    xs={{ span: 4, order: 5 }}
                    md={{ order: 2 }}
                  >
                    <div className="seller-offering-item-margin-align">
                      <div className="seller-offering-item-header">
                        {this.sellerGetCurrency(item.buyin)}
                      </div>
                      <div className={'seller-desktop-view-hide'}>Buy In</div>
                    </div>
                  </Col>
                  <Col
                    className={
                      'seller-offering-list-item-markup-container seller-offering-item-mobile-left seller-offering-item-wrapper'
                    }
                    md={{ order: 3 }}
                    xs={{ span: 4, order: 3 }}
                  >
                    <div className="seller-offering-item-margin-align">
                      <div className="seller-offering-item-header">{item.markup}%</div>
                      <div className={'seller-desktop-view-hide'}>Markup</div>
                    </div>
                  </Col>
                  <Col
                    className={
                      'seller-offering-list-item-available-container seller-offering-item-align seller-offering-item-wrapper'
                    }
                    md={{ order: 4 }}
                    xs={{ span: 4, order: 4 }}
                  >
                    <div className="seller-offering-item-margin-align">
                      <div className="seller-offering-item-header">
                        {this.sellerGetCurrency(item.available)}
                      </div>
                      <div className={'seller-desktop-view-hide'}>Amount</div>
                    </div>
                  </Col>
                  <Col
                    className={
                      'seller-offering-list-item-start-time-container seller-offering-item-mobile-left seller-offering-item-wrapper'
                    }
                    md={{ order: 5 }}
                    xs={{ span: 6, order: 6 }}
                  >
                    <div className="seller-offering-item-margin-align">
                      <div className="seller-offering-item-header">{item.start}</div>
                      <div className={'seller-desktop-view-hide'}>Start Time</div>
                    </div>
                  </Col>
                  <Col
                    className={
                      'seller-offering-list-item-buy-button-container seller-offering-item-align seller-offering-item-mobile-right seller-offering-item-wrapper'
                    }
                    xs={{ span: 6, order: 7 }}
                    md={{ order: 6 }}
                  >
                    <div className="seller-offering-item-margin-align">
                      <div className="seller-offering-item-status-header">{item.status}</div>
                    </div>
                  </Col>
                </Row>
              ))}
            </Container>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SellerApplicationOfferingList;
