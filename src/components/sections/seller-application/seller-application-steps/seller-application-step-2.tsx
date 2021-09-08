import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { COUNTRIES } from '../../../../constants/countries.constants';

const SellerApplicationStep2: React.FunctionComponent = () => {
  const [country, setCountry] = React.useState('United States');

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <Fragment>
      <div id="seller-application-step-2" className="seller-application-step-2">
        <img className="seller-illustration-2" src="/assets/step2.png" alt="step-2-illustrations" />
        <div className="current-step-header-2">CURRENT ADDRESS</div>

        <form noValidate autoComplete="off">
          <Row className="step-2-row-1">
            <Col className="step-2-col-1" xs={12} md={6}>
              <div className="seller-application-input-container-2">
                <TextField
                  id="address1"
                  className="seller-application-input address1-input"
                  type="text"
                  label="ADDRESS LINE 1"
                  size="small"
                  variant="outlined"
                />
              </div>
            </Col>
            <Col className="step-2-col-2" xs={12} md={6}>
              <div className="seller-application-input-container-2">
                <TextField
                  id="city"
                  className="seller-application-input city-input"
                  label="CITY"
                  type="text"
                  size="small"
                  variant="outlined"
                />
              </div>
            </Col>
          </Row>
          <Row className="step-2-row-2">
            <Col xs={12} md={6}>
              <div className="seller-application-input-container-2">
                <TextField
                  id="address2"
                  className="seller-application-input address2-input"
                  type="text"
                  label="ADDRESS LINE 2"
                  variant="outlined"
                  size="small"
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="seller-application-input-container-2">
                <TextField
                  id="state"
                  className="seller-application-input state-input"
                  label="STATE / PROVIDENCE / REGION"
                  type="text"
                  size="small"
                  variant="outlined"
                />
              </div>
            </Col>
          </Row>
          <Row className="step-2-row-3">
            <Col xs={12} md={6}>
              <div className="seller-application-input-container-2">
                <TextField
                  id="country"
                  className="seller-application-input country-input"
                  label="COUNTRY"
                  size="small"
                  select
                  variant="outlined"
                  type="text"
                  value={country}
                  onChange={handleCountryChange}
                >
                  {COUNTRIES.map((option) => (
                    <MenuItem key={option.label} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="seller-application-input-container-2">
                <TextField
                  className="seller-application-input"
                  id="zipcode"
                  label="ZIP / POSTAL CODE"
                  type="text"
                  variant="outlined"
                  size="small"
                />
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </Fragment>
  );
};

export default SellerApplicationStep2;
