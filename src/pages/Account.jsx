import React from 'react';
import './Account.css';
import {Link} from "react-router-dom";
import SavedShow from '../components/SavedShow'
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Account = () => {
  return (
    <div>
          <div className='w-full text-white'>
            <img
              src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
              alt="/"
              className="hidden sm:block absolute w-full h-full object-cover"
                />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-full'>
            </div>
            <h1 className='absolute right-0 left-0 bottom-0 top-[15%] text-3xl md:text-5xl font-bold text-center'>My Account</h1>
          </div>
          <div className="account-container">
              <div className="account-body">
                <div className="account-form-container">
                  <div className="account-form-header">
                    <h4>PERSONAL INFORMATION AND SERVICE PACKAGES</h4>
                    <button className="btn-lock">LOCK ACCOUNT</button>
                  </div>
                <div className="account-form">

                <div className="avatar">
                  <div className="avatar-img">
                    <img src="https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png" alt="/" width="60px"/>
                  </div>
                    <div className="change">
                      <button className="btn-change">Change icon</button>
                    </div>
                  </div>

                  <div className="email">
                    <div className="title">Email:
                      <input type="checkbox" name="" className="mail_input" id="change-mail-input"/>
                      <div className="input-email">
                        <form>
                          <input type="text" name="email" placeholder="Enter a new email...." />
                          <button type="submit"><FontAwesomeIcon icon={faCircleCheck} /></button>
                        </form>
                      </div>
                    </div>
                    <label for="change-mail-input" className="change">
                      <div className="btn-change-mail">
                        <FontAwesomeIcon icon={faRepeat} spin/>
                        
                      </div>
                    </label>
                  </div>

                  <div className="password">
                    <div className="title">Passwords:
                      <input type="checkbox" name="" className="pass_input" id="change-pass-input"/>
                      <div className="input-pass">
                        <form>
                          <input type="text" name="pass" placeholder="Enter a new password...." />
                          <button type="submit"><FontAwesomeIcon icon={faCircleCheck} /></button>
                        </form>
                      </div>
                    </div>
                      <label for="change-pass-input" className="change">
                        <div className="btn-change-pass">
                          <FontAwesomeIcon icon={faRepeat} spin/>
                        </div>
                      </label>
                  </div>

                  <div className="payment-methods">
                    <div className="title">Payment Methods:</div>
                      <div className="change">
                        <button className="btn-change">Change Payment Methods</button>
                      </div>
                  </div>

                  <div className="service-packages">
                    <div className="title">Service Packages:</div>
                      <div className="change">
                        <Link to="/Services">
                          <button className="btn-change">Change Service Packages</button>
                        </Link>
                      </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Account