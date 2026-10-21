import React, { useState } from 'react';
import { getPublicPageUrl } from './publicImage';

const roles = [
	{ value: 'student', icon: '🎓', title: 'TechStar (Student)', description: 'Browse and enrol in courses, use AI Tutor, earn achievements.' },
	{ value: 'parent', icon: '🧑', title: 'Parent', description: "Manage your children's learning journey and book instructors." },
	{ value: 'instructor', icon: '🏅', title: 'Instructor', description: 'Create courses, manage students, and grow your teaching business.' },
];

const AccountPage = () => {
	const [role, setRole] = useState('student');
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<main className='account-page'>
			<section className='account-showcase'>
				<a className='account-brand text-decoration-none' href={getPublicPageUrl()}>
					<span className='account-brand-mark'>Z</span>
					<span>
						<strong>Zee Tech</strong>
						<small>LEARNING</small>
					</span>
				</a>

				<div className='account-showcase-copy'>
					<h1>Code. Create.<br /><span>Impact.</span></h1>
					<p>Join 25,000+ TechStars building the skills to shape tomorrow's world.</p>
					<ul className='account-feature-list list-unstyled mb-0'>
						<li><span>🎯</span><div><strong>Expert-Led Courses</strong><small>183+ courses across all tech disciplines</small></div></li>
						<li><span>🤖</span><div><strong>AI-Powered Tutoring</strong><small>Personalised help available 24/7</small></div></li>
						<li><span>🏆</span><div><strong>Earn Real Certificates</strong><small>Industry-recognised credentials</small></div></li>
						<li><span>🌍</span><div><strong>Global Community</strong><small>Learn alongside peers in 42 countries</small></div></li>
					</ul>
				</div>

				<small className='account-copyright'>© 2026 Zee Tech International</small>
				<span className='account-orbit account-orbit-one' />
				<span className='account-orbit account-orbit-two' />
			</section>

			<section className='account-form-panel'>
				<div className='account-form-wrap'>
					<header className='account-heading'>
						<h2>Create your account</h2>
						<p>Join 25,000+ learners. Start for free.</p>
					</header>

					<form onSubmit={handleSubmit}>
						<fieldset className='border-0 p-0 m-0'>
							<legend className='account-label'>I am a...</legend>
							<div className='account-role-list'>
								{roles.map((item) => (
									<label className={`account-role-card ${role === item.value ? 'selected' : ''}`} key={item.value}>
										<input type='radio' name='role' value={item.value} checked={role === item.value} onChange={() => setRole(item.value)} />
										<span className='account-role-icon' aria-hidden='true'>{item.icon}</span>
										<span className='account-role-copy'><strong>{item.title}</strong><small>{item.description}</small></span>
									</label>
								))}
							</div>
						</fieldset>

						<div className='account-fields'>
							<label className='account-label' htmlFor='full-name'>Full name</label>
							<input className='form-control account-input' id='full-name' name='fullName' type='text' placeholder='Your full name' autoComplete='name' required />

							<label className='account-label' htmlFor='account-email'>Email address</label>
							<input className='form-control account-input' id='account-email' name='email' type='email' placeholder='you@example.com' autoComplete='email' required />

							<label className='account-label' htmlFor='account-password'>Password</label>
							<div className='account-password-field'>
								<input className='form-control account-input' id='account-password' name='password' type={showPassword ? 'text' : 'password'} placeholder='Create a strong password' autoComplete='new-password' minLength='8' required />
								<button className='account-password-toggle' type='button' onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
									<i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} aria-hidden='true' />
								</button>
							</div>
							<small className='account-hint'>Minimum 8 characters</small>
						</div>

						<label className='account-consent'>
							<input type='checkbox' required />
							<span>I agree to the <a href='#terms'>Terms of Service</a> and <a href='#privacy'>Privacy Policy</a>. Parental consent required for users under 13.</span>
						</label>
						<button className='btn account-submit' type='submit'>Create Account — It's Free</button>
					</form>

					<p className='account-signin'>Already have an account? <a href={getPublicPageUrl('/login')}>Sign in</a></p>
				</div>
			</section>
		</main>
	);
};

export default AccountPage;
