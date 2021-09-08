import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

const SellerApplicationStep1: React.FunctionComponent = () => {
  return (
    <Fragment>
      <div id="seller-application-step-1" className="seller-application-step-1">
        <img className="seller-illustration-1" src="/assets/step1.png" alt="step-1-illustrations" />
        <div className="current-step-header-1">BASIC INFORMATION</div>

        <form noValidate autoComplete="off">
          <div className="seller-application-input-container-1 seller-application-input-override">
            <TextField
              className="seller-application-input"
              id="full-name"
              label="FULL NAME"
              type="text"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="seller-application-input-container-1 seller-application-input-override">
            <TextField
              id="additional-info"
              className="seller-application-text-field"
              label="BIO"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SellerApplicationStep1;
