import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';

import SellerApplicationStep1 from './seller-application-steps/seller-application-step-1';
import SellerApplicationStep2 from './seller-application-steps/seller-application-step-2';
import SellerApplicationStep3 from './seller-application-steps/seller-application-step-3';
import SellerApplicationStep4 from './seller-application-steps/seller-application-step-4';
import SellerApplicationStep5 from './seller-application-steps/seller-application-step-5';
import SellerApplicationStep6 from './seller-application-steps/seller-application-step-6';

import Container from 'react-bootstrap/Container';

import './seller-application.module.scss';

const SellerApplication: React.FunctionComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const stepIncrement = (step?: number) => {
    if (step) {
      setCurrentStep(step);
    } else if (currentStep < 6) {
      setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
    }
  };

  const stepDecrement = () => {
    if (currentStep > 1) {
      setCurrentStep((prevCurrentStep) => prevCurrentStep - 1);
    }
  };

  return (
    <Fragment>
      <div className="step-container ">
        <div className="seller-description-container">
          <div className="seller-application-wording">Seller Application</div>
          {currentStep < 6 ? (
            <div className="seller-application-description">
              Apply to be a Seller!
              <br />
              Crowdfund your Tournaments
            </div>
          ) : null}
        </div>
        <Container>
          {currentStep === 1 ? <SellerApplicationStep1 /> : null}
          {currentStep === 2 ? <SellerApplicationStep2 /> : null}
          {currentStep === 3 ? <SellerApplicationStep3 /> : null}
          {currentStep === 4 ? <SellerApplicationStep4 /> : null}
          {currentStep === 5 ? <SellerApplicationStep5 /> : null}
          {currentStep === 6 ? <SellerApplicationStep6 /> : null}
        </Container>
        <div className="offering-button-container">
          {currentStep < 6 ? (
            <div className="offering-button-container">
              <Button
                className="offering-button-submit"
                variant="contained"
                onClick={() => stepIncrement()}
              >
                NEXT
              </Button>
              <Button
                className="offering-button-cancel"
                variant="contained"
                onClick={() => stepDecrement()}
              >
                CANCEL
              </Button>
            </div>
          ) : (
            <div className="offering-button-container">
              <Button
                className="offering-button-close"
                variant="contained"
                onClick={() => stepIncrement(1)}
              >
                CLOSE
              </Button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default SellerApplication;
