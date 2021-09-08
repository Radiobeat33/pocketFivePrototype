import React, { Component } from 'react';
import OfferingPurchaseModal from './offering-modal/offeringPurchaseModal';
import OfferingListModal from './offering-modal/offeringListModal';
import { OFFERING_MOCK_DATA } from '../../../../../constants/offering-mockdata.constants';
import { DropdownStatus, OfferingListPlayer } from '../../../../../interfaces/nagivation.interface';
import './offeringListItem.module.scss';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class OfferingListItem extends Component<unknown, { offeringList: OfferingListPlayer[] }> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      offeringList: OFFERING_MOCK_DATA,
    };
  }

  convertToCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  dropdownStatus: DropdownStatus = {
    buyin: false,
    markup: false,
    available: false,
  };

  withoutTime = (date: Date): Date => {
    date.setHours(0, 0, 0, 0);
    return date;
  };

  ascSortedArray = (sortByStr: string): OfferingListPlayer[] => {
    const currentList = this.state;
    if (sortByStr === 'start') {
      return currentList.offeringList.sort(
        (a, b) => new Date(b[sortByStr]).getTime() - new Date(a[sortByStr]).getTime()
      );
    } else {
      return currentList.offeringList.sort((a, b) =>
        Number(a[sortByStr]) < Number(b[sortByStr])
          ? 1
          : Number(a[sortByStr]) === Number(b[sortByStr])
          ? a.player < b.player
            ? 1
            : -1
          : -1
      );
    }
  };

  descSortedArray = (sortByStr: string): OfferingListPlayer[] => {
    const currentList = this.state;
    if (sortByStr === 'start') {
      return currentList.offeringList.sort(
        (a, b) => new Date(a[sortByStr]).getTime() - new Date(b[sortByStr]).getTime()
      );
    } else {
      return currentList.offeringList.sort((a, b) =>
        Number(a[sortByStr]) > Number(b[sortByStr])
          ? 1
          : Number(a[sortByStr]) === Number(b[sortByStr])
          ? a.player > b.player
            ? 1
            : -1
          : -1
      );
    }
  };

  sortOfferingList = (sortByStr: string): void => {
    let sortedArray;
    // ascending
    if (!this.dropdownStatus[sortByStr]) {
      this.dropdownStatus = {
        buyin: false,
        markup: false,
        available: false,
      };
      this.dropdownStatus[sortByStr] = true;
      sortedArray = this.ascSortedArray(sortByStr);
    } else {
      // descending
      this.dropdownStatus = {
        buyin: false,
        markup: false,
        available: false,
      };
      sortedArray = this.descSortedArray(sortByStr);
    }
    this.setState({ offeringList: sortedArray });
  };

  getCurrency = (num: number): string => {
    return this.convertToCurrency.format(num);
  };

  render(): React.ReactNode {
    const currentList = this.state;
    return (
      <div className={'offering-list-container'}>
        {/* filter table */}
        {/* sort table */}
        {/* offering-items */}
        <Container className="sort-list-container mobile-view-hide">
          <Row className="row-header">
            <Col className={'separator offering-item-padding offering-item-header-align'} sm="3">
              Player
            </Col>
            <Col className={'separator offering-item-padding offering-item-header-align'} sm="3">
              Tournament
            </Col>
            <Col
              className={'separator offering-item-padding'}
              sm
              onKeyDown={() => this.sortOfferingList('buyin')}
              role="button"
              onClick={() => this.sortOfferingList('buyin')}
              tabIndex={-1}
            >
              Buy In{' '}
              {this.dropdownStatus.buyin ? (
                <ArrowDropDownIcon style={{ fontSize: 16 }} />
              ) : (
                <ArrowDropUpIcon style={{ fontSize: 16 }} />
              )}
            </Col>
            <Col
              sm
              onKeyDown={() => this.sortOfferingList('markup')}
              role="button"
              onClick={() => this.sortOfferingList('markup')}
              tabIndex={-2}
              className={'separator offering-item-padding'}
            >
              Mark up{' '}
              {this.dropdownStatus.markup ? (
                <ArrowDropDownIcon style={{ fontSize: 16 }} />
              ) : (
                <ArrowDropUpIcon style={{ fontSize: 16 }} />
              )}
            </Col>
            <Col
              className={'separator offering-item-padding'}
              sm
              onKeyDown={() => this.sortOfferingList('available')}
              role="button"
              onClick={() => this.sortOfferingList('available')}
              tabIndex={-3}
            >
              Available{' '}
              {this.dropdownStatus.available ? (
                <ArrowDropDownIcon style={{ fontSize: 16 }} />
              ) : (
                <ArrowDropUpIcon style={{ fontSize: 16 }} />
              )}
            </Col>
            <Col
              sm
              className={'separator offering-item-padding'}
              onKeyDown={() => this.sortOfferingList('start')}
              role="button"
              onClick={() => this.sortOfferingList('start')}
              tabIndex={-4}
            >
              Start Time{' '}
              {this.dropdownStatus.start ? (
                <ArrowDropDownIcon style={{ fontSize: 16 }} />
              ) : (
                <ArrowDropUpIcon style={{ fontSize: 16 }} />
              )}
            </Col>
            <Col sm="1"></Col>
          </Row>
        </Container>
        <Container className={'offering-list-container'}>
          {currentList.offeringList.map((item, index) => (
            <Row className={'offering-list-item'} key={index}>
              <Col
                xs={{ span: 12, order: 'first' }}
                md={{ span: 3, order: 'first' }}
                className={
                  'offering-list-item-player-info offering-item-align offering-item-mobile-left'
                }
              >
                <img className={'player-picture'} src={item.profilepic} alt="player" />
                <div className={'player-details'}>
                  <div className="offering-item-header">{item.player}</div>
                  <div className="badge-container">
                    <img src="/assets/pokerbadge1.png" alt="red badge" />
                    <img src="/assets/pokerbadge2.png" alt="blue badge" />
                  </div>
                </div>
              </Col>
              <Col
                xs={{ span: 12, order: 2 }}
                md={{ span: 3, order: 1 }}
                className={
                  'offering-list-item-tournament-name-container offering-item-mobile-left offering-item-wrapper'
                }
              >
                <div className="offering-item-margin-align offering-item-wrapper-tourney-width">
                  <div className="offering-item-header">{item.tourneyname}</div>
                  <div>{item.tourneylocation}</div>
                </div>
              </Col>
              <Col
                xs={{ span: 4, order: 5 }}
                md={{ order: 2 }}
                className={
                  'offering-list-item-buy-in-container offering-item-wrapper offering-item-mobile-right'
                }
              >
                <div className="offering-item-margin-align">
                  <div className="offering-item-header">{this.getCurrency(item.buyin)}</div>
                  <div className={'desktop-view-hide'}>Buy In</div>
                </div>
              </Col>
              <Col
                xs={{ span: 4, order: 3 }}
                md={{ order: 3 }}
                className={
                  'offering-list-item-markup-container offering-item-mobile-left offering-item-wrapper'
                }
              >
                <div className="offering-item-margin-align">
                  <div className="offering-item-header">{item.markup}%</div>
                  <div className={'desktop-view-hide'}>Markup</div>
                </div>
              </Col>
              <Col
                xs={{ span: 4, order: 4 }}
                md={{ order: 4 }}
                className={
                  'offering-list-item-available-container offering-item-align offering-item-wrapper'
                }
              >
                <div className="offering-item-margin-align">
                  <div className="offering-item-header">{this.getCurrency(item.available)}</div>
                  <div className={'desktop-view-hide'}>Amount</div>
                </div>
              </Col>
              <Col
                xs={{ span: 6, order: 6 }}
                md={{ order: 5 }}
                className={
                  'offering-list-item-start-time-container offering-item-mobile-left offering-item-wrapper'
                }
              >
                <div className="offering-item-margin-align">
                  <div className="offering-item-header">{item.start}</div>
                  <div className={'desktop-view-hide'}>Start Time</div>
                </div>
              </Col>
              <Col
                xs={{ span: 6, order: 7 }}
                md={{ span: 1, order: 7 }}
                className={
                  'offering-list-item-buy-button-container offering-item-align offering-item-mobile-right offering-item-wrapper'
                }
              >
                <OfferingPurchaseModal player={item} />
                <OfferingListModal player={item} />
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    );
  }
}

export default OfferingListItem;
