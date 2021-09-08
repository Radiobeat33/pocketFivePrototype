import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import { OfferingListPlayer } from '../../../../../../interfaces/nagivation.interface';

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface NewProps {
  player: OfferingListPlayer;
}

const OfferingListModal: React.FunctionComponent<NewProps> = (props: NewProps) => {
  const [show, setShow] = useState(false);
  const [offeringStep, setOfferingStep] = useState(1);

  const generateCloseButton = () => {
    return (
      <div className="close-button-container">
        <svg
          onKeyDown={() => {
            setShow(false);
            setOfferingStep(1);
          }}
          role="button"
          onClick={() => {
            setShow(false);
            setOfferingStep(1);
          }}
          tabIndex={-2}
          xmlns="https://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-x-circle-fill close-button"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
          />
        </svg>
      </div>
    );
  };

  return (
    <Fragment>
      <Button className="sign-in-button" variant="contained" onClick={() => setShow(true)}>
        BUY
      </Button>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
          setOfferingStep(1);
        }}
        className={'offering-list-container'}
        size="lg"
        dialogClassName="offering-modal"
        aria-labelledby="offering-modal"
        centered
      >
        {offeringStep === 1 ? (
          <Modal.Header className={'step-1-title header-sizing'}>
            <h4 className={'title-close-flex'}>Listing Details</h4>
            <span className="close-button">{generateCloseButton()}</span>
          </Modal.Header>
        ) : null}

        <Modal.Body>
          <Container>
            <Row>
              <Col xs={'12'} className="no-padding">
                <div className="offering-modal-container">
                  <Container>
                    <Row>
                      <Col
                        xs={{ span: 2 }}
                        sm={{ span: 2 }}
                        md={{ span: 2 }}
                        lg={{ span: 1 }}
                        className={
                          'offering-list-item-player-info offering-item-align offering-item-mobile-left'
                        }
                      >
                        <img
                          className={'modal-player-picture'}
                          src={props.player.profilepic}
                          alt="player"
                        />
                      </Col>
                      <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 5 }}>
                        <div className={'modal-player-details'}>
                          <div className="modal-item-header">{props.player.player}</div>
                          <div className="modal-item-handle">@TestHandle</div>
                          <div className="badge-container">
                            <img
                              className="modal-badge"
                              src="/assets/pokerbadge1.png"
                              alt="red badge"
                            />
                            <img
                              className="modal-badge"
                              src="/assets/pokerbadge2.png"
                              alt="blue badge"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 6 }}
                        className={
                          'offering-list-item-tournament-name-container offering-item-mobile-left offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align offering-item-wrapper-tourney-width">
                          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                          lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum
                          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                          lorem ipsum.
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        className={
                          'offering-list-item-tournament-name-container offering-item-mobile-left offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align offering-item-wrapper-tourney-width">
                          <div className="modal-item-header">{props.player.tourneyname}</div>
                          <div className="modal-item-handle">{props.player.tourneylocation}</div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        className={
                          'offering-list-item-tournament-name-container offering-item-mobile-left offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align offering-item-wrapper-tourney-width modal-header-margin">
                          <div className="modal-item-header">Buy In:</div>
                          <div className="modal-item-handle">${props.player.buyin}</div>
                        </div>
                        <div className="offering-item-margin-align offering-item-wrapper-tourney-width">
                          <div className="modal-item-header">Available:</div>
                          <div className="modal-item-handle">${props.player.available}</div>
                        </div>
                      </Col>
                      <Col
                        className={
                          'offering-list-item-tournament-name-container offering-item-mobile-left offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align offering-item-wrapper-tourney-width modal-header-margin">
                          <div className="modal-item-header">Mark Up:</div>
                          <div className="modal-item-handle">{props.player.markup}%</div>
                        </div>
                        <div className="offering-item-margin-align offering-item-wrapper-tourney-width">
                          <div className="modal-item-header">Start Time:</div>
                          <div className="modal-item-handle">{props.player.start}</div>
                        </div>
                      </Col>
                      <Col
                        className={
                          'offering-list-item-tournament-name-container offering-item-mobile-left offering-item-wrapper'
                        }
                      ></Col>
                      <Col className={'offering-list-item-tournament-name-container'}>
                        <div className="modal-purchase-percent modal-align-center modal-item-small-header">
                          00% Purchasing
                        </div>
                        <div className="buying-input-section modal-align-center">
                          <input
                            className="offering-input modal-align-center"
                            type="text"
                            placeholder="Enter Amount"
                          />
                        </div>
                        <div className="modal-align-center">
                          <Button
                            className="buy-button"
                            variant="contained"
                            onClick={() => console.log('')}
                          >
                            BUY
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default OfferingListModal;
