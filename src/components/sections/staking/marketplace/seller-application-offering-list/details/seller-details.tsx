import React, { Component, Fragment } from 'react';
import { OFFERING_MOCK_DATA } from '../../../../../../constants/offering-mockdata.constants';
import { OfferingListPlayer } from '../../../../../../interfaces/nagivation.interface';
import './seller-details.module.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SellerApplicationDetails extends Component<
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

  render(): React.ReactNode {
    const currentList = this.state.offeringList;
    return (
      <Fragment>
        <div className="detail-overview-section">
          <Container>
            <Row>
              <Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 1 }}>
                <div className="detail-left">
                  <div className="tournament-header seller-offering-item-header">
                    Tournament Name
                  </div>
                  <div className="tournament-location seller-offering-item-subheader">
                    Platform/Location
                  </div>
                  <div className="start-time-section seller-desktop-view-hide">
                    <div className="seller-offering-item-header">Start Time:</div>
                    <div className="seller-offering-item-subheader">00/00/00</div>
                  </div>
                  <div className="tournament-details seller-offering-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non nibh et mauris
                    malesuada accumsan. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 2 }}>
                <div className="detail-right">
                  <Container>
                    <Row>
                      <Col xs={{ span: 6, order: 1 }} sm={{ span: 6, order: 1 }}>
                        {' '}
                        <div className="buyin-section">
                          <div className="seller-offering-item-header">Buy In:</div>
                          <div className="seller-offering-item-subheader">$00.00</div>
                        </div>
                      </Col>
                      <Col xs={{ span: 6, order: 2 }} sm={{ span: 6, order: 2 }}>
                        {' '}
                        <div className="markup-section">
                          <div className="seller-offering-item-header">MarkUp:</div>
                          <div className="seller-offering-item-subheader">00%</div>
                        </div>
                      </Col>
                      <Col xs={{ span: 12, order: 3 }} sm={{ span: 6, order: 3 }}>
                        {' '}
                        <div className="available-section">
                          <div className="seller-offering-item-header">Available:</div>
                          <div className="seller-offering-item-subheader">$0.00</div>
                        </div>
                      </Col>
                      <Col
                        className="seller-mobile-view-hide"
                        xs={{ span: 12, order: 3 }}
                        sm={{ span: 6, order: 4 }}
                      >
                        {' '}
                        <div className="available-section">
                          <div className="seller-offering-item-header">Start Time:</div>
                          <div className="seller-offering-item-subheader">00/00/00</div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="winning-input-section">
                  <input
                    className="mailing-list-input"
                    type="text"
                    placeholder="Enter amount of winnings"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="seller-offering-list">
          <div className={'seller-offering-list-container'}>
            <Container className="seller-sort-list-container seller-mobile-view-hide">
              <Row className="seller-row-header">
                <Col
                  className={
                    'seller-separator seller-offering-item-padding seller-offering-item-header-align'
                  }
                  sm
                >
                  Username
                </Col>
                <Col
                  className={
                    'seller-separator seller-offering-item-padding seller-offering-item-header-align'
                  }
                  sm
                >
                  Stake Amount
                </Col>
                <Col
                  className={
                    'seller-separator seller-offering-item-padding seller-offering-item-header-align'
                  }
                  sm
                >
                  Winnings Percent
                </Col>
                <Col
                  className={
                    'seller-separator seller-offering-item-padding seller-offering-item-header-align'
                  }
                  sm
                >
                  Winning Shares
                </Col>
                <Col sm="1"></Col>
              </Row>
            </Container>
            <Container className={'seller-offering-list-container '}>
              {currentList.map((item, index) => (
                <Row className={'seller-offering-list-item'} key={index}>
                  <Col
                    xs={{ span: 6, order: 1 }}
                    sm={{ order: 1 }}
                    className={
                      'seller-offering-list-item-player-info seller-offering-item-align offering-item-mobile-left'
                    }
                  >
                    <img className={'seller-player-picture'} src={item.profilepic} alt="player" />
                    <div className={'seller-player-details'}>
                      <div className="seller-offering-item-header">{item.player}</div>
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 12, order: 3 }}
                    sm={{ order: 2 }}
                    className={
                      'seller-offering-list-item-player-info seller-offering-item-align seller-offering-item-mobile-left'
                    }
                  >
                    <div className="seller-offering-item-margin-align seller-offering-item-mobile-left">
                      <div className="seller-offering-item-header">${item.stakeamount}</div>
                      <div className={'seller-desktop-view-hide'}>Stake Amount</div>
                    </div>
                  </Col>
                  <Col
                    className={
                      'seller-offering-list-item-markup-container seller-offering-item-mobile-left seller-offering-item-wrapper'
                    }
                    xs={{ span: 12, order: 4 }}
                    sm={{ order: 3 }}
                  >
                    <div className="seller-offering-item-margin-align seller-offering-item-mobile-left">
                      <div className="seller-offering-item-header">{item.winningpercent}%</div>
                      <div className={'seller-desktop-view-hide'}>Winning Percent</div>
                    </div>
                  </Col>
                  <Col
                    className={
                      'seller-offering-list-item-available-container seller-offering-item-align offering-item-wrapper seller-offering-item-mobile-right'
                    }
                    xs={{ span: 6, order: 2 }}
                    sm={{ order: 4 }}
                  >
                    <div className="seller-offering-item-margin-align">
                      <div className="seller-offering-item-header">${item.winningstake}</div>
                      <div className={'seller-desktop-view-hide'}>Winning Share</div>
                    </div>
                  </Col>
                  <Col sm={{ span: 1, order: 5 }}></Col>
                </Row>
              ))}
            </Container>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SellerApplicationDetails;
