import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SellerApplicationStep3: React.FunctionComponent = () => {
  return (
    <Fragment>
      <div id="seller-application-step-3" className="seller-application-step-3">
        <img className="seller-illustration-3" src="/assets/step3.png" alt="step-3-illustrations" />
        <div className="current-step-header-3">
          ONLINE ACCOUNTS{' '}
          <span className="current-step-header-icon">
            <InfoOutlinedIcon />
          </span>
        </div>
        <div className="info-container-3">
          <Row className="step-3-row">
            <Col className="step-3-icon" xs={1}>
              <InfoOutlinedIcon />
            </Col>
            <Col className="step-3-wording-section" xs>
              <div className="info-wording step-3-wording">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt id odio et
                lobortis. Phasellus nec mollis augue.
              </div>
            </Col>
          </Row>
        </div>
        <form className="step-3-form" noValidate autoComplete="off">
          <div className="seller-application-input-container-3">
            <TextField
              id="platform"
              className="seller-application-input"
              label="PLATFORM"
              size="small"
              type="text"
              variant="outlined"
            />
          </div>
          <div className="seller-application-input-container-3">
            <TextField
              label="USERNAME"
              id="username"
              className="seller-application-input"
              size="small"
              type="username"
              variant="outlined"
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SellerApplicationStep3;
