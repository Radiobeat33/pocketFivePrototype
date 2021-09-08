import React, { Fragment } from 'react';

import withAppLayout from '../components/shared/app-layout/app-layout';
import LoginSignup from '../components/sections/login-signup/login-signup';

const LoginSignupPage: React.FunctionComponent = () => (
  <Fragment>
    <LoginSignup />
  </Fragment>
);

export default withAppLayout(LoginSignupPage);
