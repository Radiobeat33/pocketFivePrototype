import React, { Fragment, useState, ChangeEvent } from 'react';
import Button from '@material-ui/core/Button';
import { OfferingListPlayer } from '../../../../../../interfaces/nagivation.interface';

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

interface NewProps {
  player: OfferingListPlayer;
}

const OfferingPurchaseModal: React.FunctionComponent<NewProps> = (props: NewProps) => {
  const [show, setShow] = useState(false);
  const [purchaseInput, setPurchaseInput] = useState(0);
  const [purchaseStep, setPurchaseStep] = useState(1);

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseInput(Number(e.target.value));
  };

  const generateCloseButton = () => {
    return (
      <div className="close-button-container">
        <svg
          onKeyDown={() => {
            setShow(false);
            setPurchaseStep(1);
          }}
          role="button"
          onClick={() => {
            setShow(false);
            setPurchaseStep(1);
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
          setPurchaseStep(1);
        }}
        className={'offering-list-container'}
        size="lg"
        dialogClassName="offering-modal"
        aria-labelledby="offering-modal"
        centered
      >
        {purchaseStep === 1 ? (
          <Modal.Header className={'step-1-title header-sizing'}>
            <h4 className={'title-close-flex'}>Listing Details</h4>
            <span className="close-button">{generateCloseButton()}</span>
          </Modal.Header>
        ) : null}
        {purchaseStep === 2 ? (
          <Modal.Header className={'step-2-title header-sizing'}>
            <h4 className={'title-close-flex'}>Confirm Purchase</h4>
            <span className="close-button">{generateCloseButton()}</span>
          </Modal.Header>
        ) : null}
        {purchaseStep === 3 ? (
          <Modal.Header className={'step-3-title header-sizing'}>
            <h4 className={'title-close-flex'}>Success!</h4>
            <span className="close-button">{generateCloseButton()}</span>
          </Modal.Header>
        ) : null}

        <Modal.Body>
          <Container>
            <Row>
              <Col xs={'12'} className="no-padding">
                {purchaseStep === 1 ? (
                  <div className="offering-modal-container">
                    <Container>
                      <Row>
                        <Col
                          xs={{ span: 6 }}
                          className={
                            'offering-list-item-player-info offering-item-desktop-right offering-item-no-padding'
                          }
                        >
                          <img
                            className={'modal-player-purchase-picture'}
                            src={props.player.profilepic}
                            alt="player"
                          />
                        </Col>
                        <Col xs={{ span: 6 }} className={'offering-item-no-padding'}>
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
                        </Col>
                        <Col
                          xs={{ span: 12 }}
                          className={
                            'offering-list-item-tournament-name-container offering-item-wrapper offering-item-wrapper-purchase-width'
                          }
                        >
                          <div className="offering-item-center offering-desc-width">
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum.
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={{ span: 12 }}
                          className={
                            'offering-list-item-tournament-name-container offering-item-wrapper offering-item-center'
                          }
                        >
                          <div className="offering-item-margin-align offering-item-wrapper-tourney-width offering-item-center">
                            <div className="modal-item-header offering-margin-top">
                              {props.player.tourneyname}
                            </div>
                            <div className="modal-item-handle">{props.player.tourneylocation}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={{ span: 6 }}
                          className={
                            'offering-list-item-tournament-name-container offering-item-center offering-item-wrapper'
                          }
                        >
                          <div className="offering-item-margin-align offering-item-wrapper-tourney-width modal-purchase-header-margin offering-item-center">
                            <div className="modal-item-header">Buy In:</div>
                            <div className="modal-item-handle">${props.player.buyin}</div>
                          </div>
                          <div className="offering-item-margin-align offering-item-wrapper-tourney-width offering-item-center">
                            <div className="modal-item-header">Available:</div>
                            <div className="modal-item-handle">${props.player.available}</div>
                          </div>
                        </Col>
                        <Col
                          xs={{ span: 6 }}
                          className={
                            'offering-list-item-tournament-name-container offering-item-center offering-item-wrapper'
                          }
                        >
                          <div className="offering-item-margin-align offering-item-wrapper-tourney-width modal-purchase-header-margin offering-item-center">
                            <div className="modal-item-header">Mark Up:</div>
                            <div className="modal-item-handle">{props.player.markup}%</div>
                          </div>
                          <div className="offering-item-margin-align offering-item-wrapper-tourney-width offering-item-center">
                            <div className="modal-item-header">Start Time:</div>
                            <div className="modal-item-handle">{props.player.start}</div>
                          </div>
                        </Col>
                        <Col
                          xs={{ span: 12 }}
                          className={
                            'offering-list-item-tournament-name-container offering-item-center'
                          }
                        >
                          <div className="buying-input-section modal-align-center">
                            <input
                              className="offering-input modal-align-center"
                              type="number"
                              min="0.01"
                              step="0.01"
                              max="99999"
                              placeholder="Enter Amount"
                              onChange={updateInput}
                            />
                          </div>
                          <div className="modal-align-center">
                            <Button
                              className="buy-button"
                              variant="contained"
                              onClick={() => setPurchaseStep(2)}
                            >
                              BUY
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                ) : null}
                {purchaseStep === 2 ? (
                  <div className="offering-modal-container">
                    <div className="link-description">
                      <div className="offering-item-center offering-desc-width margin-top-20">
                        You are about to purchase{' '}
                        <span className="modal-item-small-header">{'0%'}</span> of{' '}
                        <span className="modal-item-small-header">{props.player.player}</span> in{' '}
                        <span className="modal-item-small-header">{props.player.tourneyname}</span>{' '}
                        for <span className="modal-item-small-header">${purchaseInput}</span>
                      </div>
                      <div className="offering-item-center offering-desc-width margin-top-50">
                        To accept this purchase click{' '}
                        <span className="modal-item-small-header">confirm</span>.
                      </div>
                    </div>
                    <Button
                      className="buy-button margin-top-30"
                      variant="contained"
                      onClick={() => setPurchaseStep(3)}
                    >
                      Confirm
                    </Button>
                    <Button
                      className="back-button margin-top-20"
                      variant="contained"
                      onClick={() => setPurchaseStep(1)}
                    >
                      Back
                    </Button>
                    <div className="offering-item-center offering-desc-width margin-top-50">
                      by clicking confirm you are accepting the{' '}
                      <span className="modal-item-small-header">{'Terms of Use'}</span> for
                      Pocketfives, Inc.
                    </div>
                  </div>
                ) : null}
                {purchaseStep === 3 ? (
                  <div className="offering-modal-container">
                    <CheckCircleOutlineIcon className="success-check" />
                    <div className="offering-item-center offering-desc-width margin-top-20">
                      Your purchase of <span className="modal-item-small-header">{'0%'}</span> of{' '}
                      <span className="modal-item-small-header">{props.player.player}</span> in{' '}
                      <span className="modal-item-small-header">{props.player.tourneyname}</span> is
                      confirmed!
                    </div>
                    <Button
                      className="buy-button margin-top-30"
                      variant="contained"
                      onClick={() => {
                        setShow(false);
                        setPurchaseStep(1);
                      }}
                    >
                      Close
                    </Button>
                  </div>
                ) : null}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default OfferingPurchaseModal;
