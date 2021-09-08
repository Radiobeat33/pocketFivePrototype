import React from 'react';
import './home.module.scss';
import '../../../styles/main.scss';

const Home: React.FunctionComponent = () => (
  <div data-testid="home" className="grid-body">
    <div className="grid-mid home-item">
      <p>Mid Section</p>
    </div>
    <div className="grid-left home-item">
      <p>Left Section</p>
    </div>
    <div className="grid-right home-item">
      <p>Right Section</p>
    </div>
  </div>
);

export default Home;
