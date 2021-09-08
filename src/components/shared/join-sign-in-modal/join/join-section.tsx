import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import OnboardingSection from '../onboarding/onboarding-section';

interface NewProps {
  currentSection: string;
  onStepUpdate(arg0: string): void;
}

const JoinSection: React.FunctionComponent<NewProps> = (props: NewProps) => {
  const [currentStep, setCurrentStep] = useState(props.currentSection);

  const stepUpdate = (step: string) => {
    setCurrentStep(step);
  };

  const parentStepUpdate = (step: string) => {
    props.onStepUpdate(step);
  };

  return (
    <Fragment>
      {currentStep === 'create-account' ? (
        <div className="create-account-step-1">
          <div className="create-account-wording">Create your Pocketfives Account</div>
          <div className="facebook-sign-in">
            <img
              className="facebook-sign-in-icon"
              src="/assets/facebook-sign-in.png"
              alt="facebook-sign-in-button"
            />
            Continue with facebook
          </div>
          <form noValidate autoComplete="off">
            <div className="create-account-input-container">
              <TextField
                className="create-account-input"
                id="email"
                label="EMAIL ADDRESS"
                type="email"
                variant="outlined"
                size="small"
              />
            </div>
            <div className="create-account-input-container">
              <TextField
                className="create-account-input"
                id="username"
                label="USERNAME"
                type="text"
                variant="outlined"
                size="small"
              />
            </div>
            <div className="create-account-input-container">
              <TextField
                className="create-account-input"
                id="password"
                label="PASSWORD"
                type="password"
                variant="outlined"
                size="small"
              />
            </div>
            <div className="create-account-input-container">
              <TextField
                className="create-account-input"
                id="confirm-password"
                type="password"
                label="CONFIRM PASSWORD"
                variant="outlined"
                size="small"
              />
            </div>
            <div className="proceed-button-container">
              <Button
                className="proceed-button"
                variant="contained"
                onClick={() => stepUpdate('create-account-2')}
              >
                <ArrowForwardIcon fontSize="large" />
              </Button>
            </div>
          </form>
        </div>
      ) : null}
      {currentStep === 'create-account-2' ? (
        <div className="create-account-step-2">
          <div className="verify-email-wording">Please verify your email!</div>
          <div className="email-sent-wording">You&#39;re almost there! We sent an email to:</div>
          <div className="current-email">johnsmith@email.com</div>
          <div className="just-click-wording">
            Just click on the link in that email to complete your sign up. If you don&#39;t see it,
            you have to check your spam folder.
          </div>
          <div className="cannot-find-email">Still can&#39;t find the email?</div>
          <Button className="resend-email-button" variant="contained">
            Resend email
          </Button>
          {/* Onboarding modal for testing, but hidden until we have email services set up */}
          {/* <OnboardingSection /> */}
          <div className="contact-us-container">
            Need Help?{' '}
            <a className="contact-us-link" href="/">
              Contact us.
            </a>
          </div>
        </div>
      ) : null}
      {currentStep === 'create-account' ? (
        <div className="mobile-center">
          <div className="switch-to-sign-in">
            ALREADY HAVE AN ACCOUNT?{' '}
            <span
              className="sign-in-link"
              onKeyDown={() => parentStepUpdate('signin')}
              onClick={() => parentStepUpdate('signin')}
              role="button"
              tabIndex={-3}
            >
              SIGN IN
            </span>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default JoinSection;
