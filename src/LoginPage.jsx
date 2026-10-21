import React, { useState } from 'react';
import './App.css';
import { getPublicPageUrl } from './publicImage';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('Student');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className='login-page'>
      <section className='login-showcase'>
        <a href={getPublicPageUrl()} className='login-brand text-decoration-none'>
          <span className='login-brand-mark'>Z</span>
          <span><strong>Zee Tech</strong><small>LEARNING</small></span>
        </a>
        <div className='showcase-copy'>
          <h1>Code. Create.<br /><span>Impact.</span></h1>
          <p>Join 25,000+ TechStars building the skills to shape tomorrow's world.</p>
          <ul className='feature-list'>
            <li><span>🎯</span><div><strong>Expert-Led Courses</strong><small>183+ courses across all tech disciplines</small></div></li>
            <li><span>🤖</span><div><strong>AI-Powered Tutoring</strong><small>Personalised help available 24/7</small></div></li>
            <li><span>🏆</span><div><strong>Earn Real Certificates</strong><small>Industry-recognised credentials</small></div></li>
            <li><span>🌍</span><div><strong>Global Community</strong><small>Learn alongside peers in 42 countries</small></div></li>
          </ul>
        </div>
        <small className='copyright'>© 2026 Zee Tech International</small>
        <span className='showcase-orbit orbit-one' />
        <span className='showcase-orbit orbit-two' />
      </section>

      <section className='login-panel'>
        <div className='login-form-wrap'>
          <header className='login-heading'>
            <h2>Welcome back</h2>
            <p>Sign in to continue your learning journey.</p>
          </header>

          <div className='role-tabs' role='tablist' aria-label='Choose account type'>
            {['Student', 'Parent', 'Instructor'].map((item) => (
              <button className={role === item ? 'active' : ''} type='button' role='tab' aria-selected={role === item} onClick={() => setRole(item)} key={item}>
                <span>{item === 'Student' ? '🎓' : item === 'Parent' ? '🧑' : '🏅'}</span>{item}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email address</label>
            <input id='email' name='email' type='email' placeholder='you@example.com' autoComplete='email' required />
            <div className='password-label'>
              <label htmlFor='password'>Password</label>
              <a href='#forgot-password'>Forgot password?</a>
            </div>
            <div className='password-field'>
              <input id='password' name='password' type={showPassword ? 'text' : 'password'} placeholder='Enter your password' autoComplete='current-password' required />
              <button type='button' onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}><i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} aria-hidden='true' /></button>
            </div>
            <div className='form-options'>
              <label className='remember-me'><input type='checkbox' /> <span>Remember me</span></label>
            </div>
            <button className='sign-in-button' type='submit'>Sign In</button>
          </form>

          <div className='social-divider'><span>or continue with</span></div>
          <div className='social-buttons'>
            <button type='button'><b className='google-icon'>G</b> Google</button>
            <button type='button'><b className='facebook-icon'>f</b> Facebook</button>
          </div>
          <p className='signup-prompt'>Don't have an account? <a href={getPublicPageUrl('/account')}>Sign up free</a></p>
          <div className='demo-access'>
            <span>Quick demo access:</span>
            <a href='#student'>→ Student</a><a href='#parent'>→ Parent</a><a href='#instructor'>→ Instructor</a><a href='#admin'>→ Admin</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;