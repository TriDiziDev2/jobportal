import './Login.css';

import { FiBriefcase } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { FiLock } from 'react-icons/fi';

const Login = () => {
  return (
    <div className='login-page-container'>
      <div className='login-page-form-content-container'>
        <div className='login-page-form-container'>
          <div className='job-portal-container'>
            <div className='job-portal-icon-container'>
              <FiBriefcase className='brief-case-icon' />
            </div>
            <div className='job-portal-content-container'>
              <h3 className='job-portal-heading'>JobPortal</h3>
              <p className='job-portal-text'>Super Admin Panel</p>
            </div>
          </div>
          <h2 className='login-page-heading'>Welcome Back</h2>
          <p className='login-page-text'>
            Sign in to access your admin dashboard
          </p>
          <form className='form'>
            <label className='label-text'>Email Address</label>
            <div className='email-container'>
              <MdOutlineEmail className='mail-icon' />
              <input
                type='text'
                placeholder='admin@jobportal.com'
                className='input-email'
              />
            </div>
            <label className='label-text'>Password</label>
            <div className='email-container'>
              <FiLock className='mail-icon' />
              <input
                type='text'
                placeholder='Enter your password'
                className='input-email'
              />
            </div>
            <div className='login-page-checkbox-remember-container'>
              <div className='login-page-checkbox-container'>
                <input type='checkbox' className='input-checkbox' />
                <label className='label-text'>Remember Me</label>
              </div>
              <p className='password-text'>Forgot Password?</p>
            </div>
            <button className='signin-btn'>Sign In</button>
            <p className='account-text'>
              Don't have an account?<span className='signup-text'>Sign Up</span>
            </p>
          </form>
        </div>
        <div className='login-page-content-container'>
          <div className='login-page-content-brief-case-container'>
            <FiBriefcase className='content-briefcase-icon' />
          </div>
          <h2 className='content-heading'>Manage Your Job Portal</h2>
          <p className='content-text'>
            Access powerful tools to manage jobs, internships, freelance gigs,
            users, and companies all in one place.
          </p>
        </div>
        <div className='login-page-gradient-container'></div>
      </div>
    </div>
  );
};

export default Login;
