import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../join-sign-in-modal.module.scss';

const OnboardingSection: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);
  const navDestination = (str: string) => {
    console.log('current nav', str);
  };

  return (
    <Fragment>
      <Button className="resend-email-button" variant="contained" onClick={() => setShow(true)}>
        Onboarding
      </Button>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        size="lg"
        dialogClassName="onboarding-modal"
        aria-labelledby="onboarding-modal"
        centered
      >
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={'12'} className="no-padding">
                <div className="close-button-container-onboarding">
                  <svg
                    onKeyDown={() => {
                      setShow(false);
                    }}
                    role="button"
                    onClick={() => {
                      setShow(false);
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
                <div className="onboarding-modal-container onboarding-modal-container-padding">
                  <div className="onboarding-title">Welcome to</div>
                  <div className="p5-bitmap-container mobile-center">
                    <img
                      className="p5-bitmap"
                      src="/assets/bitmap.png"
                      alt="pocketfives-bitmap-logo"
                    />
                  </div>
                  <div className="choose-desination-wording">Choose how you want to start!</div>
                  <div></div>
                  <Row xs={1} lg={3}>
                    <Col>
                      <div className="onboarding-links-container">
                        <img
                          className="trophy-icon"
                          src="/assets/trophy_icn.png"
                          alt="trophy-icon"
                        />
                        <p className="link-header">GET RANKED</p>
                        <div className="link-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.{' '}
                        </div>
                        <div className="proceed-button-container">
                          <Button
                            className="proceed-button"
                            variant="contained"
                            onClick={() => navDestination('create-account-2')}
                          >
                            <ArrowForwardIcon fontSize="large" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="onboarding-links-container">
                        <img className="buy-icon" src="/assets/buy_icn.png" alt="buy-icon" />
                        <p className="link-header">BUY ACTION</p>
                        <div className="link-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.{' '}
                        </div>
                        <div className="proceed-button-container">
                          <Button
                            className="proceed-button"
                            variant="contained"
                            onClick={() => navDestination('create-account-2')}
                          >
                            <ArrowForwardIcon fontSize="large" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="onboarding-links-container">
                        <img className="money-icon" src="/assets/money_icn.png" alt="money-icon" />
                        <p className="link-header">SELL ACTION</p>
                        <div className="link-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.{' '}
                        </div>
                        <div className="proceed-button-container">
                          <Button
                            className="proceed-button"
                            variant="contained"
                            onClick={() => navDestination('create-account-2')}
                          >
                            <ArrowForwardIcon fontSize="large" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default OnboardingSection;
