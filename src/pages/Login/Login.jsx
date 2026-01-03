import './Login.css';

import { FiBriefcase } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { FiLock } from 'react-icons/fi';
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

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
          <form className='form' onSubmit={handleSubmit}>
            <label className='label-text'>Email Address</label>
            <div className='email-container'>
              <MdOutlineEmail className='mail-icon' />
              <input
                type='text'
                placeholder='admin@jobportal.com'
                className='input-email'
                name='email'
                value={user.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <label className='label-text'>Password</label>
            <div className='email-container'>
              <FiLock className='mail-icon' />
              <input
                type='text'
                placeholder='Enter your password'
                className='input-email'
                name='password'
                value={user.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='login-page-checkbox-remember-container'>
              <div className='login-page-checkbox-container'>
                <input
                  type='checkbox'
                  className='input-checkbox'
                  name='rememberMe'
                  value={user.rememberMe}
                  onChange={(e) => handleChange(e)}
                  checked={user.rememberMe === true}
                />
                <label className='label-text'>Remember Me</label>
              </div>
              <p className='password-text'>Forgot Password?</p>
            </div>
            <button type='submit' className='signin-btn'>
              Sign In
            </button>
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
          <div className='login-page-testimonial-container'>
            <div className='testimonial-container'>
              <p className='testimonial-number'>10K+</p>
              <p className='testimonial-caption'>Active Jobs</p>
            </div>
            <div className='testimonial-container-two'>
              <p className='testimonial-number-two'>50K+</p>
              <p className='testimonial-caption-two'>Users</p>
            </div>
            <div className='testimonial-container'>
              <p className='testimonial-number'>5K+</p>
              <p className='testimonial-caption'>Companies</p>
            </div>
          </div>
        </div>
        <div className='login-page-gradient-container'></div>
      </div>
    </div>
  );
};

export default Login;
