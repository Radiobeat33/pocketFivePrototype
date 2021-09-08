import React from 'react';
import Button from '@material-ui/core/Button';
import './footer.module.scss';

const facebookLink = 'https://www.facebook.com/pocketfives/';
const twitterLink = 'https://twitter.com/PocketFives';
// const discordLink = 'https://discord.com/';

const Footer: React.FunctionComponent = () => (
  <div data-testid="footer" className="footer">
    <div className="footer-border">
      <div className="footer-border__contact-section footer-section">
        <div className="contact-section-need-help">
          <p className="footer-title">Need Pocketfives Help?</p>
          <p>Got Questions? Call us 24/7!</p>
          <p>Call Us: +1 123-456-7890</p>
          <p>
            Email Us: <a href="/">info@pocketfives.com</a>
          </p>
        </div>
        <div className="contact-section-contact-info">
          <p className="footer-title">Contact Info:</p>
          <p>Atlanta, GA</p>
        </div>
      </div>
      <div className="footer-border__company-details-section footer-section">
        <p className="footer-title">Company</p>
        <div className="footer-inner-section">
          <div className="footer-sub-section">
            <p>About Us</p>
            <p>Careers</p>
            <p>Terms Of Use</p>
          </div>
          <div className="footer-sub-section">
            <p>Privacy Statement</p>
            <p>Give Us Feedback</p>
            <p>Partner With Us</p>
          </div>
        </div>
      </div>
      <div className="footer-border__other-services-section footer-section">
        <p className="footer-title">Other Services & Support</p>
        <div className="footer-inner-section">
          <div className="footer-sub-section">
            <p>Rewards Program</p>
            <p>Partners</p>
            <p>Legal</p>
          </div>
          <div className="footer-sub-section">
            <p>Privacy Policy</p>
            <p>Customer Service Help</p>
          </div>
        </div>
      </div>
      <div className="footer-border__social-links-section footer-section">
        <p className="footer-title">Social Links</p>
        <div className="social-media-icons">
          <a href={facebookLink}>
            <img className="icon" src="/assets/facebook-square.png" alt="facebook" />
          </a>
          <a href={twitterLink}>
            <img className="icon" src="/assets/twitter-square.png" alt="twitter" />
          </a>
        </div>
      </div>
      <div className="footer-border__mailing-list-section footer-section">
        <p className="footer-title">Mailing List</p>
        <p>Sign Up for our mailing lists and get the latest info straight in your inbox</p>
        <div className="mailing-list-input-section">
          <input className="mailing-list-input" type="text" placeholder="Your Email" />
          <Button className="button-nav-primary subscribe-button" variant="contained">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
    <div className="footer-copyright footer-copyright-flex">
      <span>Copyright &#169; 2020 Pocketfives Inc. All rights reserved</span>
      <span className="made-in-usa-floater">Made in U.S.A.</span>
    </div>
  </div>
);
export default Footer;
