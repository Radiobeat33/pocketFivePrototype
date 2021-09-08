import React, { Fragment, useState } from 'react';
import SignInSection from './sign-in/sign-in-section';
import JoinSection from './join/join-section';
import Button from '@material-ui/core/Button';

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './join-sign-in-modal.module.scss';

interface NewProps {
  currentSection: string;
  buttonWording?: string;
}

const JoinSignInModal: React.FunctionComponent<NewProps> = (props: NewProps) => {
  const [show, setShow] = useState(false);
  const [currentStep, setCurrentStep] = useState(props.currentSection);

  const getStep = (step: string) => {
    setCurrentStep(step);
  };

  return (
    <Fragment>
      {props.currentSection === 'signin' ? (
        props.buttonWording === 'Sign In' ? (
          <Button className="sign-in-button" variant="contained" onClick={() => setShow(true)}>
            {props.buttonWording}
          </Button>
        ) : (
          <span
            className="sign-up-button"
            onKeyDown={() => setShow(true)}
            role="button"
            onClick={() => setShow(true)}
            tabIndex={-1}
          >
            {props.buttonWording || 'Sign In'}
          </span>
        )
      ) : null}
      {props.currentSection === 'create-account' ? (
        props.buttonWording === 'Join Now' ? (
          <span
            className="sign-up-button"
            onKeyDown={() => setShow(true)}
            role="button"
            onClick={() => setShow(true)}
            tabIndex={-1}
          >
            {'Join'}
          </span>
        ) : (
          <Button className="join-button" variant="contained" onClick={() => setShow(true)}>
            {props.buttonWording || 'Join'}
          </Button>
        )
      ) : null}
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
          setCurrentStep(props.currentSection);
        }}
        dialogClassName="join-sign-in-modal"
        aria-labelledby="join-sign-in-modal"
        centered
      >
        <Modal.Body className="no-padding">
          <Container className="no-padding">
            <Row className="no-padding">
              <Col xs={'12'} lg={'6'} className="join-sign-in-column-padding">
                <div className="close-button-container">
                  <svg
                    onKeyDown={() => {
                      setShow(false);
                      setCurrentStep(props.currentSection);
                    }}
                    role="button"
                    onClick={() => {
                      setShow(false);
                      setCurrentStep(props.currentSection);
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
                <div className="p5-logo-container mobile-center">
                  <img
                    className="p5-logo"
                    src="/assets/Logo_130_42_icn@2x.png"
                    alt="pocketfives-logo"
                  />
                </div>
                {currentStep === 'create-account' ? (
                  <JoinSection currentSection={currentStep} onStepUpdate={getStep} />
                ) : null}
                {currentStep === 'signin' ? <SignInSection /> : null}
                {/* Lower Options */}
                {currentStep === 'signin' ? (
                  <div className="mobile-center">
                    <div className="switch-to-sign-in">
                      DON&#39;T HAVE AN ACCOUNT?{' '}
                      <span
                        className="sign-in-link"
                        onKeyDown={() => getStep('create-account')}
                        onClick={() => getStep('create-account')}
                        role="button"
                        tabIndex={-4}
                      >
                        CREATE AN ACCOUNT!
                      </span>
                      <br />
                      CANT SIGN IN?
                    </div>
                  </div>
                ) : null}
              </Col>
              <Col lg={'6'} className="d-none d-lg-block no-padding">
                <img
                  className="right-column-image"
                  src="https://cdn.wallpapersafari.com/65/79/S0NbDO.jpg"
                  alt="pokerChips"
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default JoinSignInModal;
