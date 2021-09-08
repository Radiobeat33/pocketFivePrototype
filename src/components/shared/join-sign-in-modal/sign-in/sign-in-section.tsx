import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const SignInSection: React.FunctionComponent = () => {
  const [checkedState, setCheckedState] = React.useState({ staySignedIn: false });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState({ ...checkedState, [event.target.name]: event.target.checked });
  };

  return (
    <div className="signin-step-1">
      <div className="signin-wording">Sign in with your Pocketfives Account</div>
      <div className="facebook-sign-in">
        <img
          className="facebook-sign-in-icon"
          src="/assets/facebook-sign-in.png"
          alt="facebook-sign-in-button"
        />
        Continue with facebook
      </div>
      <form noValidate autoComplete="off">
        <div className="signin-input-container">
          <TextField
            className="signin-input"
            id="signin-username"
            label="USERNAME"
            type="text"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="signin-input-container">
          <TextField
            className="signin-input"
            id="signin-password"
            label="PASSWORD"
            type="password"
            variant="outlined"
            size="small"
          />
        </div>
        <Fragment>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  className="p5-checkbox"
                  checked={checkedState.staySignedIn}
                  onChange={handleChange}
                  name="staySignedIn"
                />
              }
              label="Stay signed in"
            />
          </FormGroup>
        </Fragment>
        <div className="proceed-button-container">
          <Button
            className="proceed-button"
            variant="contained"
            onClick={() => {
              console.log('next steps here');
            }}
          >
            <ArrowForwardIcon fontSize="large" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInSection;
