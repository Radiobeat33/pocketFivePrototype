import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { OFFERING_MOCK_DATA } from '../../../constants/offering-mockdata.constants';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import './create-offering.module.scss';
import OfferingListModal from '../staking/marketplace/offering-list/offering-modal/offeringListModal';

const CreateOffering: React.FunctionComponent = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [status, setStatus] = React.useState('');
  const [platform, setPlatform] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());
  const [accolade1, setAccolade1] = React.useState('');
  const [accolade2, setAccolade2] = React.useState('');
  const [accolade3, setAccolade3] = React.useState('');

  const dummyData = OFFERING_MOCK_DATA[0];

  const convertToCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const stepContinue = (step?: number) => {
    if (step) {
      setCurrentStep(step);
    } else if (currentStep < 2) {
      setCurrentStep((prevCurrentStep) => prevCurrentStep + 1);
    }
  };

  const stepBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevCurrentStep) => prevCurrentStep - 1);
    }
  };

  const getCurrency = (num: number): string => {
    return convertToCurrency.format(num);
  };

  const statusList = [
    { value: 'LIVE', label: 'LIVE' },
    { value: 'ONLINE', label: 'ONLINE' },
  ];

  const casinoList = [
    { value: 'PLATFORM/CASINO 1', label: 'PLATFORM/CASINO 1' },
    { value: 'PLATFORM/CASINO 2', label: 'PLATFORM/CASINO 2' },
    { value: 'PLATFORM/CASINO 3', label: 'PLATFORM/CASINO 3' },
    { value: 'PLATFORM/CASINO 4', label: 'PLATFORM/CASINO 4' },
  ];

  const accoladeList = [
    { value: 'ACCOLADE/BADGE 1', label: 'ACCOLADE/BADGE 1' },
    { value: 'ACCOLADE/BADGE 2', label: 'ACCOLADE/BADGE 2' },
    { value: 'ACCOLADE/BADGE 3', label: 'ACCOLADE/BADGE 3' },
    { value: 'ACCOLADE/BADGE 4', label: 'ACCOLADE/BADGE 4' },
  ];

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handlePlatformChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlatform(event.target.value);
  };

  const handleAccolade1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccolade1(event.target.value);
  };

  const handleAccolade2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccolade2(event.target.value);
  };

  const handleAccolade3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccolade3(event.target.value);
  };

  return (
    <Fragment>
      <div className="step-container">
        {currentStep === 1 ? (
          <div className="create-offering-step-1">
            <div className="create-offering-wording mobile-center">Create Offering</div>
            <div className="create-offering-description mobile-center">
              Please fill out the form below to create an offering to sell a piece of action
            </div>
            <form noValidate autoComplete="off" className="mobile-center">
              <div className="create-offering-input-container">
                <TextField
                  className="create-offering-input"
                  id="tournament-name"
                  label="TOURNAMENT NAME"
                  type="text"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="create-offering-input-container">
                <TextField
                  id="outlined-select-live-or-online"
                  className="create-offering-input"
                  select
                  label="LIVE OR ONLINE"
                  value={status}
                  onChange={handleStatusChange}
                  variant="outlined"
                  size="small"
                >
                  {statusList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="create-offering-input-container">
                <TextField
                  id="outlined-select-platform"
                  className="create-offering-input"
                  select
                  label="PLATFORM/CASINO"
                  value={platform}
                  onChange={handlePlatformChange}
                  variant="outlined"
                  size="small"
                >
                  {casinoList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="create-offering-input-container">
                <TextField
                  className="create-offering-input"
                  id="buy-in"
                  label="BUY IN"
                  type="number"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </div>
              <div className="create-offering-input-container">
                <TextField
                  className="create-offering-input"
                  id="mark-up"
                  label="MARK UP"
                  type="number"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="create-offering-input-container">
                <TextField
                  className="create-offering-input"
                  id="min-sold-amount"
                  label="MIN SOLD AMOUNT"
                  type="number"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </div>
              <div className="create-offering-input-container">
                <TextField
                  className="create-offering-input"
                  id="action-available"
                  label="ACTION AVAILABLE"
                  type="number"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                  }}
                />
              </div>
              <div className="create-offering-input-container">
                <div className="date-picker-outline">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      format="MM/dd/yyyy"
                      minDate={new Date()}
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div className="create-offering-input-container">
                <TextField
                  id="outlined-select-accolade-1"
                  className="create-offering-input"
                  select
                  label="ACCOLADE #1"
                  value={accolade1}
                  onChange={handleAccolade1Change}
                  variant="outlined"
                  size="small"
                >
                  {accoladeList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="create-offering-input-container">
                <TextField
                  id="outlined-select-accolade-2"
                  className="create-offering-input"
                  select
                  label="ACCOLADE #2"
                  value={accolade2}
                  onChange={handleAccolade2Change}
                  variant="outlined"
                  size="small"
                >
                  {accoladeList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="create-offering-input-container">
                <TextField
                  id="outlined-select-accolade-3"
                  className="create-offering-input"
                  select
                  label="ACCOLADE #3"
                  value={accolade3}
                  onChange={handleAccolade3Change}
                  variant="outlined"
                  size="small"
                >
                  {accoladeList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="create-offering-input-container">
                <TextField
                  id="additional-info"
                  className="create-offering-text-field"
                  label="ADDITIONAL INFO"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </div>
            </form>
          </div>
        ) : null}
        {currentStep === 2 ? (
          <Container>
            <div className="offering-detail-title offering-detail-center">Review Offering</div>
            <div className="offering-detail-title-description">
              Below is a preview of your offering. If your offering is <br />
              correct, press confirm and GOOD LUCK!
            </div>
            <Row>
              <Col xs={12} md={6}>
                <div className="offering-review-section-left offering-details">
                  <div className="offering-detail-title">Offering Details</div>
                  <Container>
                    <Row className={'offering-list-item'}>
                      <Col
                        xs={{ span: 4, order: 'first' }}
                        className={
                          'offering-list-item-player-info offering-item-align offering-item-mobile-left offering-icon-container'
                        }
                      >
                        <img
                          className={'player-picture offering-icon'}
                          src={dummyData.profilepic}
                          alt="player"
                        />
                      </Col>
                      <Col xs={8} className={'offering-detail'}>
                        <div className={'player-details'}>
                          <div className="offering-detail-header">{dummyData.player}</div>
                          <div className="offering-detail-handle">@Testhandle</div>
                          <div className="badge-container">
                            <img src="/assets/pokerbadge1.png" alt="red badge" />
                            <img src="/assets/pokerbadge2.png" alt="blue badge" />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="offering-details-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ante
                      vitae turpis tempus maximus. Etiam eleifend et ante eu ullamcorper.
                      Pellentesque mattis fringilla odio, ac placerat risus interdum posuere. Sed
                      ultrices aliquet libero gravida accumsan. Aenean laoreet lacus et lectus
                      iaculis venenatis.{' '}
                    </div>
                    <Row className={'offering-list-item'}>
                      <Col
                        xs={{ span: 12, order: 1 }}
                        className={
                          'offering-list-item-tournament-name-container offering-item-mobile-left offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align offering-item-wrapper-tourney-width offering-detail-center margin-bottom-14">
                          <div className="offering-detail-header">{dummyData.tourneyname}</div>
                          <div className="offering-detail-handle">{dummyData.tourneylocation}</div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 6, order: 2 }}
                        className={
                          'offering-list-item-buy-in-container offering-item-wrapper offering-item-mobile-right'
                        }
                      >
                        <div className="offering-item-margin-align margin-bottom-20">
                          <div className="offering-detail-header">Buy In</div>
                          <div className="offering-detail-handle">
                            {getCurrency(dummyData.buyin)}
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 6, order: 3 }}
                        className={
                          'offering-list-item-markup-container offering-item-mobile-left offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align margin-bottom-20">
                          <div className="offering-detail-header">Markup</div>
                          <div className="offering-detail-handle">{dummyData.markup}%</div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 6, order: 4 }}
                        className={
                          'offering-list-item-available-container offering-item-align offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align margin-bottom-20">
                          <div className="offering-detail-header">Amount</div>
                          <div className="offering-detail-handle">
                            {getCurrency(dummyData.available)}
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 6, order: 5 }}
                        className={
                          'offering-list-item-start-time-container offering-item-mobile-left offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align margin-bottom-20">
                          <div className="offering-detail-header">Start Time</div>
                          <div className="offering-detail-handle">{dummyData.start}</div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="offering-review-section-right">
                  <div className="offering-card-title">Offering Card</div>
                  <Container className={'offering-list-container'}>
                    <Row className={'offering-list-item'}>
                      <Col
                        xs={{ span: 12, order: 'first' }}
                        className={
                          'offering-list-item-player-info offering-item-align offering-item-mobile-left'
                        }
                      >
                        <img className={'player-picture'} src={dummyData.profilepic} alt="player" />
                        <div className={'player-details'}>
                          <div className="offering-item-header">{dummyData.player}</div>
                          <div className="badge-container">
                            <img src="/assets/pokerbadge1.png" alt="red badge" />
                            <img src="/assets/pokerbadge2.png" alt="blue badge" />
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 12, order: 2 }}
                        className={
                          'offering-list-item-tournament-name-container offering-item-mobile-left offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align offering-item-wrapper-tourney-width">
                          <div className="offering-item-header">{dummyData.tourneyname}</div>
                          <div>{dummyData.tourneylocation}</div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 4, order: 5 }}
                        className={
                          'offering-list-item-buy-in-container offering-item-wrapper offering-item-mobile-right'
                        }
                      >
                        <div className="offering-item-margin-align">
                          <div className="offering-item-header">{getCurrency(dummyData.buyin)}</div>
                          <div>Buy In</div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 4, order: 3 }}
                        className={
                          'offering-list-item-markup-container offering-item-mobile-left offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align">
                          <div className="offering-item-header">{dummyData.markup}%</div>
                          <div className={'desktop-view-hide'}>Markup</div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 4, order: 4 }}
                        className={
                          'offering-list-item-available-container offering-item-align offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align">
                          <div className="offering-item-header">
                            {getCurrency(dummyData.available)}
                          </div>
                          <div className={'desktop-view-hide'}>Amount</div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 6, order: 6 }}
                        className={
                          'offering-list-item-start-time-container offering-item-mobile-left offering-item-wrapper'
                        }
                      >
                        <div className="offering-item-margin-align">
                          <div className="offering-item-header">{dummyData.start}</div>
                          <div className={'desktop-view-hide'}>Start Time</div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 6, order: 7 }}
                        className={
                          'offering-list-item-buy-button-container offering-item-align offering-item-mobile-right offering-item-wrapper'
                        }
                      >
                        <OfferingListModal player={dummyData} />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        ) : null}
        <div className="offering-button-container">
          <Button
            className="offering-button-submit"
            onClick={() => stepContinue()}
            variant="contained"
          >
            NEXT
          </Button>
          <Button className="offering-button-cancel" onClick={() => stepBack()} variant="contained">
            CANCEL
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateOffering;
