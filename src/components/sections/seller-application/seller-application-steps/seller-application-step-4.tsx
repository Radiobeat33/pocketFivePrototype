import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SellerApplicationStep4: React.FunctionComponent = () => {
  return (
    <Fragment>
      <div id="seller-application-step-4" className="seller-application-step-4">
        <img className="seller-illustration-4" src="/assets/step4.png" alt="step-4-illustration" />
        <div className="current-step-header-4">
          SOCIAL LINKS{' '}
          <span className="current-step-header-icon">
            <InfoOutlinedIcon />
          </span>
        </div>
        <div className="info-container-4">
          <Row className="step-4-row">
            <Col xs={1}>
              <InfoOutlinedIcon />
            </Col>
            <Col xs>
              <div className="info-wording">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt id odio et
                lobortis. Phasellus nec mollis augue.
              </div>
            </Col>
          </Row>
        </div>
        <form noValidate autoComplete="off">
          <Row className="step-4-row">
            <Col className="step-4-social-1" xs={12} md={6}>
              <div className="seller-application-input-container-4">
                <TextField
                  id="facebook"
                  className="seller-application-input"
                  label="FACEBOOK LINK / USERNAME"
                  type="text"
                  size="small"
                  variant="outlined"
                />
              </div>
            </Col>
            <Col className="step-4-social-2" xs={12} md={6}>
              <div className="seller-application-input-container-4">
                <TextField
                  id="discord"
                  className="seller-application-input"
                  label="DISCORD LINK / USERNAME"
                  type="text"
                  size="small"
                  variant="outlined"
                />
              </div>
            </Col>
          </Row>
          <Row className="step-4-row">
            <Col className="step-4-social-3" xs={12} md={6}>
              <div className="seller-application-input-container-4 row-2-text-1">
                <TextField
                  className="seller-application-input"
                  id="instagram"
                  label="INSTAGRAM LINK / USERNAME"
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </div>
            </Col>
            <Col id="step-4-social-4" xs={12} md={6}>
              <div className="seller-application-input-container-4 row-2-text-2">
                <TextField
                  id="twitter"
                  className="seller-application-input"
                  label="TWITTER LINK / USERNAME"
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </div>
            </Col>
          </Row>
          <Row className="step-4-row">
            <Col id="step-4-social-5" xs={12} md={6}>
              <div className="seller-application-input-container-4 step-4-text-3">
                <TextField
                  className="seller-application-input"
                  label="TWITCH LINK / USERNAME"
                  id="twitch"
                  size="small"
                  variant="outlined"
                />
              </div>
            </Col>
            <Col id="step-4-social-6" xs={12} md={6}>
              <div className="seller-application-input-container-4 step-text-4">
                <TextField
                  className="seller-application-input"
                  id="youtube"
                  label="YOUTUBE LINK / USERNAME"
                  size="small"
                  variant="outlined"
                />
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </Fragment>
  );
};

export default SellerApplicationStep4;
