import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SellerApplicationStep5: React.FunctionComponent = () => {
  return (
    <Fragment>
      <div id="seller-application-step-5" className="seller-application-step-5">
        <img className="seller-illustration-5" src="/assets/step5.png" alt="step-5-illustrations" />
        <div className="current-step-header-5">
          POKER TOURNAMENT LINKS{' '}
          <span className="current-step-header-icon step-5-icon">
            <InfoOutlinedIcon />
          </span>
        </div>
        <div className="info-container-5">
          <Row className="step-5-row">
            <Col className="step-5-col-1" xs={1}>
              <InfoOutlinedIcon />
            </Col>
            <Col className="step-5-col-2" xs>
              <div className="info-wording">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt id odio et
                lobortis. Phasellus nec mollis augue.
              </div>
            </Col>
          </Row>
        </div>
        <form noValidate autoComplete="off">
          <div className="seller-application-input-container-5">
            <TextField
              id="tournamentLink1"
              label="TOURNAMENT LINK 1"
              className="seller-application-input input-text-1"
              type="text"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="seller-application-input-container-5">
            <TextField
              id="tournamentLink2"
              label="TOURNAMENT LINK 2"
              className="seller-application-input input-text-2"
              type="text"
              size="small"
              variant="outlined"
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SellerApplicationStep5;
