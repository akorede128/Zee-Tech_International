import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './LoginPage';
import AccountPage from './AccountPage';
import Courses from './Courses';
import Instructors from './Instructors';
import getPublicImageUrl, { getPublicPageUrl } from './publicImage';

 
function App() {
  const [courseFilter, setCourseFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(() => {
    const route = window.location.hash.slice(1);
    return route.startsWith('/') ? route : '/';
  });
  useEffect(() => {
    const handleHashChange = () => {
      const route = window.location.hash.slice(1);
      if (route.startsWith('/')) setCurrentPage(route);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const matchesCourseFilter = ({ featured = false, free = false, beginner = false }) => {
    if (courseFilter === 'featured') return featured;
    if (courseFilter === 'free') return free;
    if (courseFilter === 'beginners') return beginner;
    return true;
  };

  if (currentPage === '/login') {
    return <LoginPage />;
  }

  if (currentPage === '/account' || currentPage === '/signup') {
    return <AccountPage />;
  }

  if (currentPage === '/courses') {
    return <Courses />;
  }

  if (currentPage === '/instructors' || currentPage === '/intructors') {
    return <Instructors />;
  }

  return (
    <div className="min-vh-100z flex-column">
      <Header />
            <main className="flex-grow-1">
              {/* first flip start */}
              <div className='container-fluid px-3 px-lg-5 py-2 pt-5 hero'>
                {/* first row start */}
                <div className='row align-items-center g-5 hero-content' style={{paddingTop: "130px",}}>
                  <div className='col-12 col-xl-6 hero-copy'>
                    <div className='d-inline-flex align-items-center gap-2 px-2 py-1 border rounded-pill bg-light small fw-medium' style={{color: "#191970"}}>
                      <span className='brand-dot rounded-circle bg-success flex-shrink-0' aria-hidden='true'></span>
                      <span>ZEE TECH INTERNATIONAL</span>
                    </div>
                    <h1 className='display-4 fw-bold text-dark mt-4 mb-3'>Where Young Coders<br />Become <span style={{color: "#191970"}}>World</span><br /><span className='text-warning'>Changers.</span></h1>
                    <p className='lead text-secondary mb-2'>Code. Create. Impact.</p>
                    <p className='text-secondary lh-lg hero-description'>The premier EdTech platform for children, teens, parents, and professionals. Learn cutting-edge tech skills through expert-led courses, personalised AI tutoring, and hands-on projects.</p>
                    <div className='d-flex flex-wrap gap-3 mt-4'>
                      <a className='btn btn-warning px-4 py-3 rounded-3 fw-semibold' href={getPublicPageUrl('/account')}>Start Learning Free &rarr;</a>
                      <a className='btn btn-light border px-4 py-3 rounded-3 fw-semibold' href={getPublicPageUrl('/courses')}>Explore 183+ Courses</a>
                    </div>
                    <div className='d-flex flex-wrap gap-3 gap-lg-4 mt-5 text-secondary small'>
                      <span>&#10003; No credit card required</span>
                      <span>&#10003; Free courses available</span>
                      <span>&#10003; AI Tutor included</span>
                    </div>
                  </div>
                  {/* first row end */}
                  {/* second row start */}
                  <div className='col-12 col-xl-6 hero-visuals'>
                    <div className='card border-0 shadow rounded-4 course-card'>
                      <div className='card-body p-3'>
                        <img src={getPublicImageUrl('hold-python.avif')} className='card-img-top rounded-3' alt='Python course' />
                        <small className='d-block fw-semibold mt-3' style={{color: "#191970"}}>Programming . Beginner</small>
                        <h2 className='h6 fw-bold mt-2'>Python for Young Coders</h2>
                        <div className='d-flex align-items-center gap-2 mt-3 text-secondary small'>
                          <img src={getPublicImageUrl('Dr. Sarah Chen.avif')} className='rounded-circle instructor-image' alt='Dr. Sarah Chen' />
                          <span>Dr. Sarah Chen</span><span className='text-primary'>&#10003;</span>
                        </div>
                        <div className='progress mt-3' role='progressbar' aria-label='Course progress' aria-valuenow='68' aria-valuemin='0' aria-valuemax='100'>
                          <div className='progress-bar bg-primary' style={{width: '68%',}}></div>
                        </div>
                        <div className='d-flex justify-content-between text-secondary small mt-2'><span>Progress</span><strong style={{color: "#191970"}}>68%</strong></div>
                      </div>
                    </div>
                    <div className='card border-0 shadow rounded-4 bg-dark text-white tutor-card'>
                      <div className='card-body p-3'>
                        <div className='d-flex align-items-center gap-2'>
                          <span className='badge bg-warning text-dark p-2'>AI</span><strong>AI Tutor</strong><span className='badge bg-success-subtle text-success rounded-pill ms-auto'>Live</span>
                        </div>
                        <div className='bg-secondary rounded-3 p-3 mt-3 small'>Let me explain how <span className='text-warning'>for</span> loops<br />work using a fun pizza example! &#9654;</div>
                        <div className='bg-primary rounded-3 p-3 mt-2 small text-end'>Can you give me a coding<br />challenge?</div>
                      </div>
                    </div>
                    <div className='card border-0 shadow rounded-3 enrollment-card'>
                      <div className='card-body d-flex align-items-center gap-2 p-3 small'>
                        <div className='d-flex avatar-stack'>
                          <img src={getPublicImageUrl('Amara Okonkwo.avif')} className='rounded-circle' alt='' />
                          <img src={getPublicImageUrl('Kofi Mensah.avif')} className='rounded-circle' alt='' />
                          <img src={getPublicImageUrl('Blessing Adeyemi.avif')} className='rounded-circle' alt='' />
                        </div>
                        <div><strong>8,400+ students enrolled</strong><div className='text-warning mt-1'>★★★★★ <span className='text-secondary'>4.9</span></div></div>
                      </div>
                    </div>
                    <div className='card border-0 shadow rounded-3 achievement-card'>
                      <div className='card-body d-flex align-items-center gap-3 p-3'><span className='fs-3'>&#127942;</span><div><strong>Achievement Unlocked!</strong><small className='d-block text-secondary'>7-Day Learning Streak &#128293;</small></div></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* first flip end */}
              {/* second flip start */}
              <div className='p-4 justify-content-center d-flex align-item-center justify-content-around stats-strip' style={{backgroundColor: "#191970"}}>
                <div className='text-center'>
                  <span className='fs-3'>👩‍💻</span>
                  <h4 className='text-light'>25,000+</h4>
                  <p className='text-white text-opacity-50'>Active TechStars</p>
                </div>
                <div className='text-center'>
                  <span className='fs-3'>📚</span>
                  <h4 className='text-light'>183</h4>
                  <p className='text-white text-opacity-50'>Expert-led Courses</p>
                </div>
                <div className='text-center'>
                  <span className='fs-3'>🌍</span>
                  <h4 className='text-light'>42</h4>
                  <p className='text-white text-opacity-50'>Countries</p>
                </div>
                <div className='text-center'>
                  <span className='fs-3'>🏅</span>
                  <h4 className='text-light'>347</h4>
                  <p className='text-white text-opacity-50'>Verified Instructors</p>
                </div>
              </div>
              {/* second flip end */}
              {/* third flip start */}
              <div className='bg-body py-5'>
                <div className='text-center pt-4'>
                  <p style={{color: "#191970"}}>How It Works</p>
                  <h1>Learning made <span style={{color: "#191970"}}>beautifully simple</span></h1>
                  <span className='text-black text-opacity-50'>Start your tech journey in three steps. Whether you're 8 or 80, we make</span>
                  <br/>
                  <span className='text-black text-opacity-50'>coding accessible, enjoyable, and rewarding.</span>
                </div>
                <div className='d-flex gap-4 px-5 my-5 steps-grid'>
                  <div className='col bg-body-secondary text-center rounded-4 p-4 pt-5 flex-shrink-0 shadow-sm category-card'>
                    <div className='rounded-4 d-flex justify-content-center align-items-center mx-auto mb-3' style={{width: "64px", height: "64px", backgroundColor: "#191970",}}>
                      <span className='fs-5'>✨</span>
                    </div>
                    <span className='text-warning'>01</span>
                    <h5 className='mt-2'>Create an Account</h5>
                    <span className='text-black text-opacity-50'>Sign up as a student, parent, or instructor.</span>
                    <br/>
                    <span className='text-black text-opacity-50'>Personalise your learning profile in minutes.</span>
                  </div>
                  <div className='col bg-body-secondary text-center rounded-4 p-4 pt-5 flex-shrink-0 shadow-sm category-card'>
                    <div className='rounded-4 d-flex justify-content-center align-items-center mx-auto mb-3' style={{width: "64px", height: "64px", backgroundColor: "#191970",}}>
                      <span className='fs-5'>🎯</span>
                    </div>
                    <span className='text-warning'>02</span>
                    <h5 className='mt-2'>Browse & Enrol</h5>
                    <span className='text-black text-opacity-50'>Explore 180+ expert-led courses. Filter by age,</span>
                    <br/>
                    <span className='text-black text-opacity-50'>skill level, and category.</span>
                  </div>
                  <div className='col bg-body-secondary text-center rounded-4 p-4 pt-5 flex-shrink-0 shadow-sm category-card'>
                    <div  className='rounded-4 d-flex justify-content-center align-items-center mx-auto mb-3' style={{width: "64px", height: "64px", backgroundColor: "#191970",}}>
                      <span className='fs-5'>🚀</span>
                    </div>
                    <span className='text-warning my-5'>03</span>
                    <h5 className='mt-2'>Learn & Level Up</h5>
                    <span className='text-black text-opacity-50'>Watch lessons, get AI-powered help, complete</span>
                    <br/>
                    <span className='text-black text-opacity-50'>quizzes, and earn achievements.</span>
                  </div>
                </div>
              </div>
              {/* third flip end */}
              {/* fourth flip start */}
              <div className='bg-body-secondary p-4 py-5'>
                <div className='mt-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mx-3 mb-4'>
                  <div>
                    <span className='d-block text-uppercase small fw-semibold mb-2' style={{color: "#191970"}}>Categories</span>
                    <h2 className='fw-bold text-dark mb-0'>Explore every field of technology</h2>
                  </div>
                  <a className='view-all-link text-secondary text-decoration-none small mb-1 mt-3 mt-md-0' href={getPublicPageUrl('/courses')}>View all &rsaquo;</a>
                </div>
                <div id='categories' className='d-flex gap-3 m-3 mb-4 category-strip'>
                  <div className='category-card border border-secondary-subtle rounded-4 bg-white text-center d-flex flex-column align-items-center justify-content-center flex-shrink-0 shadow-sm' style={{width: '145px', height: '110px'}}>
                    <div className='fs-3 lh-1 mb-2'>💻</div>
                    <span className='text-dark lh-sm'>Programming</span>
                    <span className='lh-sm mt-1' style={{color: '#8b98c8'}}>24 courses</span>
                  </div>
                  <div className='category-card border border-secondary-subtle rounded-4 bg-white text-center d-flex flex-column align-items-center justify-content-center flex-shrink-0 shadow-sm' style={{width: '145px', height: '110px'}}>
                    <div className='fs-3 lh-1 mb-2'>🌐</div>
                    <span className='text-dark lh-sm'>Web Development</span>
                    <span className='lh-sm mt-1' style={{color: '#8b98c8'}}>18 courses</span>
                  </div>
                  <div className='category-card border border-secondary-subtle rounded-4 bg-white text-center d-flex flex-column align-items-center justify-content-center flex-shrink-0 shadow-sm' style={{width: '145px', height: '110px'}}>
                    <div className='fs-3 lh-1 mb-2'>🤖</div>
                    <span className='text-dark lh-sm'>AI & Machine...</span>
                    <span className='lh-sm mt-1' style={{color: '#8b98c8'}}>12 courses</span>
                  </div>
                  <div className='category-card border border-secondary-subtle rounded-4 bg-white text-center d-flex flex-column align-items-center justify-content-center flex-shrink-0 shadow-sm' style={{width: '145px', height: '110px'}}>
                    <div className='fs-3 lh-1 mb-2'>🎮</div>
                    <span className='text-dark lh-sm'>Game...</span>
                    <span className='lh-sm mt-1' style={{color: '#8b98c8'}}>15 courses</span>
                  </div>
                  <div className='category-card border border-secondary-subtle rounded-4 bg-white text-center d-flex flex-column align-items-center justify-content-center flex-shrink-0 shadow-sm' style={{width: '145px', height: '110px'}}>
                    <div className='fs-3 lh-1 mb-2'>📊</div>
                    <span className='text-dark lh-sm'>Data Science</span>
                    <span className='lh-sm mt-1' style={{color: '#8b98c8'}}>10 courses</span>
                  </div>
                  <div className='category-card border border-secondary-subtle rounded-4 bg-white text-center d-flex flex-column align-items-center justify-content-center flex-shrink-0 shadow-sm' style={{width: '145px', height: '110px'}}>
                    <div className='fs-3 lh-1 mb-2'>📱</div>
                    <span className='text-dark lh-sm'>Mobile...</span>
                    <span className='lh-sm mt-1' style={{color: '#8b98c8'}}>8 courses</span>
                  </div>
                  <div className='category-card border border-secondary-subtle rounded-4 bg-white text-center d-flex flex-column align-items-center justify-content-center flex-shrink-0 shadow-sm' style={{width: '145px', height: '110px'}}>
                    <div className='fs-3 lh-1 mb-2'>🔒</div>
                    <span className='text-dark lh-sm'>Cybersecurity</span>
                    <span className='lh-sm mt-1' style={{color: '#8b98c8'}}>6 courses</span>
                  </div>
                  <div className='category-card border border-secondary-subtle rounded-4 bg-white text-center d-flex flex-column align-items-center justify-content-center flex-shrink-0 shadow-sm' style={{width: '145px', height: '110px'}}>
                    <div className='fs-3 lh-1 mb-2'>🦾</div>
                    <span className='text-dark lh-sm'>Robotics</span>
                    <span className='lh-sm mt-1' style={{color: '#8b98c8'}}>9 courses</span>
                  </div>
                </div>
              </div>
              {/* fourth flip end */}
              {/* fifth flip start */}
              <div className='pt-5'>
                <div className='mt-5 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mx-5 mb-4 homepage-course-heading'>
                  <div>
                    <span className='d-block text-uppercase small fw-semibold mb-2' style={{color: "#191970"}}>Courses</span>
                    <h2 className='fw-bold text-dark mb-0'>Start your tech journey today</h2>
                  </div>
                  {/* <a className='view-all-link text-secondary text-decoration-none small mb-1 mt-3 mt-md-0' href='#categories'>View all &rsaquo;</a> */}
                  <div className='d-flex flex-wrap gap-2'>
                    <button className={`btn ${courseFilter === 'all' ? 'text-white' : 'bg-body-secondary text-secondary'}`} style={courseFilter === 'all' ? { backgroundColor: '#191970' } : undefined} type='button' aria-pressed={courseFilter === 'all'} onClick={() => setCourseFilter('all')}>All Courses</button>
                    <button className={`btn ${courseFilter === 'featured' ? 'text-white' : 'bg-body-secondary text-secondary'}`} style={courseFilter === 'featured' ? { backgroundColor: '#191970' } : undefined} type='button' aria-pressed={courseFilter === 'featured'} onClick={() => setCourseFilter('featured')}>Featured</button>
                    <button className={`btn ${courseFilter === 'free' ? 'text-white' : 'bg-body-secondary text-secondary'}`} style={courseFilter === 'free' ? { backgroundColor: '#191970' } : undefined} type='button' aria-pressed={courseFilter === 'free'} onClick={() => setCourseFilter('free')}>Free</button>
                    <button className={`btn ${courseFilter === 'beginners' ? 'text-white' : 'bg-body-secondary text-secondary'}`} style={courseFilter === 'beginners' ? { backgroundColor: '#191970' } : undefined} type='button' aria-pressed={courseFilter === 'beginners'} onClick={() => setCourseFilter('beginners')}>For Beginners</button>
                  </div>
                </div>
                <div className='my-2 p-3'>
                  <div className='d-flex gap-3 justify-content-center align-items-center homepage-course-grid'>
                    <div hidden={!matchesCourseFilter({ featured: true, beginner: true })} className="card rounded-4 course-card-item flex-shrink-0 shadow-sm category-card" style={{ width: '19rem', cursor: "pointer",}}>
                      <div className="position-relative overflow-hidden rounded-top-4">
                        <img src={getPublicImageUrl('hold-python.avif')} className="card-img-top course-card-thumb" alt="Python course" />
                        <div className="position-absolute top-0 start-0 end-0 p-2 d-flex justify-content-between align-items-center" style={{ zIndex: 2 }}>
                          <div className='d-flex gap-4 align-items-center justify-content-center'>
                            <span className="badge bg-warning text-dark px-2 py-1 rounded-pill fw-semibold align-items-center" style={{ fontSize: '12px', color: "#191970"}}>Featured</span>
                            <span className="fw-semibold d-inline-block rounded-pill" style={{fontSize: '11px',padding: '4px 10px',lineHeight: 1.2,textShadow: '0 1px 2px rgba(0,0,0,0.5)',backgroundColor: 'rgba(18, 196, 113, 0.25)', color: "#198754"}}>Beginner</span>
                          </div>
                          <span className="badge text-white px-2 py-1 rounded-pill fw-semibold align-items-center" style={{ fontSize: '12px', backgroundColor: "#191970"}}>$79</span>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className='d-inline fw-semibold' style={{color: "#191970", fontSize: "14px"}}>Programming</p>
                        <h6 className='mt-1'>Python for Young Coders</h6>
                        <p className="card-text text-secondary" style={{fontSize: "14px"}}>
                        Learn Python through games and fun projects. Perfect for ages 10-15. 
                        </p>

                        <div className='d-flex gap-2 align-items-center text-secondary'>
                          <img src={getPublicImageUrl('Dr. Sarah Chen.avif')} className="rounded-circle" alt="..." style={{ width: "25px", height: "25px", objectFit: "cover" }}/>
                          <span style={{fontSize: "14px"}}>Dr, Sarah Chen</span>
                          <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-patch-check-fill text-primary' viewBox='0 0 16 16' aria-label='Verified instructor' role='img' title='Verified instructor'>
                            <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708'/>
                          </svg>
                        </div>
                        <div className='d-flex mt-2 justify-content-between justify-content-center text-secondary' style={{fontSize: "14px"}}>
                          <p><span className='text-dark'>⭐ 4.9</span> (612)</p>
                          <p><i className="bi bi-people-fill"></i> 8,400</p>
                        </div>
                        <hr/>
                        <div className='d-flex gap-2 align-items-center text-secondary' style={{fontSize: "14px"}}>
                          <span>24 hours</span>
                          <span>.</span>
                          <span>48 Lessons</span>
                        </div>
                      </div>
                    </div>

                    <div hidden={!matchesCourseFilter({ featured: true, beginner: true })} className="card rounded-4 course-card-item flex-shrink-0 shadow-sm category-card" style={{ width: '19rem', cursor: "pointer",}}>
                      <div className="position-relative overflow-hidden rounded-top-4">
                        <img src={getPublicImageUrl('Web Development.avif')} className="card-img-top course-card-thumb" alt="Python course" />
                        <div className="position-absolute top-0 start-0 end-0 p-2 d-flex justify-content-between align-items-center" style={{ zIndex: 2 }}>
                          <div className='d-flex gap-4 align-items-center justify-content-center'>
                            <span className="badge bg-warning text-dark px-2 py-1 rounded-pill fw-semibold align-items-center" style={{ fontSize: '12px', color: "#191970"}}>Featured</span>
                            <span className="fw-semibold d-inline-block rounded-pill" style={{fontSize: '11px',padding: '4px 10px',lineHeight: 1.2,textShadow: '0 1px 2px rgba(0,0,0,0.5)',backgroundColor: 'rgba(18, 196, 113, 0.25)', color: "#198754"}}>Beginner</span>
                          </div>
                          <span className="badge text-white px-2 py-1 rounded-pill fw-semibold align-items-center" style={{ fontSize: '12px', backgroundColor: "#191970"}}>$99</span>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className='d-inline fw-semibold' style={{color: "#191970", fontSize: "14px"}}>Web Development</p>
                        <h6 className='mt-1'>Web Development Bootcamp for Teens</h6>
                        <p className="card-text text-secondary" style={{fontSize: "14px"}}>
                        Build real websites form scratch with HTML, CSS, and JavaScript. 
                        </p>

                        <div className='d-flex gap-2 align-items-center text-secondary'>
                          <img src={getPublicImageUrl('Mr. James Okoye.avif')} className="rounded-circle" alt="..." style={{ width: "25px", height: "25px", objectFit: "cover" }}/>
                          <span style={{fontSize: "14px"}}>Mr. James Okoye</span>
                          <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-patch-check-fill text-primary' viewBox='0 0 16 16' aria-label='Verified instructor' role='img' title='Verified instructor'>
                            <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708'/>
                          </svg>
                        </div>
                        <div className='d-flex mt-2 justify-content-between justify-content-center text-secondary' style={{fontSize: "14px"}}>
                          <p><span className='text-dark'>⭐ 4.8</span> (487)</p>
                          <p><i className="bi bi-people-fill"></i> 6,200</p>
                        </div>
                        <hr/>
                        <div className='d-flex gap-2 align-items-center text-secondary' style={{fontSize: "14px"}}>
                          <span>36 hours</span>
                          <span>.</span>
                          <span>72 Lessons</span>
                        </div>
                      </div>
                    </div>

                    <div hidden={!matchesCourseFilter({ featured: true })} className="card rounded-4 course-card-item flex-shrink-0 shadow-sm category-card" style={{ width: '19rem', cursor: "pointer",}}>
                      <div className="position-relative overflow-hidden rounded-top-4">
                        <img src={getPublicImageUrl('AI & Machine Learning.avif')} className="card-img-top course-card-thumb" alt="Python course" />
                        <div className="position-absolute top-0 start-0 end-0 p-2 d-flex justify-content-between align-items-center" style={{ zIndex: 2 }}>
                          <div className='d-flex gap-4 align-items-center justify-content-center'>
                            <span className="badge bg-warning text-dark px-2 py-1 rounded-pill fw-semibold align-items-center" style={{ fontSize: '12px', color: "#191970"}}>Featured</span>
                            <span className="fw-semibold d-inline-block rounded-pill" style={{fontSize: '11px',padding: '4px 10px',lineHeight: 1.2,textShadow: '0 1px 2px rgba(0,0,0,0.5)',backgroundColor: 'rgba(153, 144, 16, 0.48)', color: "#e5b521"}}>Intermediate</span>
                          </div>
                          <span className="badge text-white px-2 py-1 rounded-pill fw-semibold align-items-center" style={{ fontSize: '12px', backgroundColor: "#191970"}}>$129</span>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className='d-inline fw-semibold' style={{color: "#191970", fontSize: "14px"}}>AI & Machine Learning</p>
                        <h6 className='mt-1'>Introduction to Artificial Intelligence</h6>
                        <p className="card-text text-secondary" style={{fontSize: "14px"}}>
                        Discover how AI works and build your first machine learning models. 
                        </p>

                        <div className='d-flex gap-2 align-items-center text-secondary'>
                          <img src={getPublicImageUrl('Dr. Sarah Chen.avif')} className="rounded-circle" alt="..." style={{ width: "25px", height: "25px", objectFit: "cover" }}/>
                          <span style={{fontSize: "14px"}}>Dr, Sarah Chen</span>
                          <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-patch-check-fill text-primary' viewBox='0 0 16 16' aria-label='Verified instructor' role='img' title='Verified instructor'>
                            <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708'/>
                          </svg>
                        </div>
                        <div className='d-flex mt-2 justify-content-between justify-content-center text-secondary' style={{fontSize: "14px"}}>
                          <p><span className='text-dark'>⭐ 4.9</span> (823)</p>
                          <p><i className="bi bi-people-fill"></i> 11,200</p>
                        </div>
                        <hr/>
                        <div className='d-flex gap-2 align-items-center text-secondary' style={{fontSize: "14px"}}>
                          <span>40 hours</span>
                          <span>.</span>
                          <span>65 Lessons</span>
                        </div>
                      </div>
                    </div>

                    <div hidden={!matchesCourseFilter({ free: true, beginner: true })} className="card rounded-4 course-card-item flex-shrink-0 shadow-sm category-card" style={{ width: '19rem', cursor: "pointer",}}>
                      <div className="position-relative overflow-hidden rounded-top-4">
                        <img src={getPublicImageUrl('Game Development.avif')} className="card-img-top course-card-thumb" alt="Python course" />
                        <div className="position-absolute top-0 start-0 end-0 p-2 d-flex justify-content-between align-items-center" style={{ zIndex: 2 }}>
                          <div className='d-flex gap-4 align-items-center justify-content-center'>
                            <span className="fw-semibold d-inline-block rounded-pill" style={{fontSize: '11px',padding: '4px 10px',lineHeight: 1.2,textShadow: '0 1px 2px rgba(0,0,0,0.5)',backgroundColor: 'rgba(18, 196, 113, 0.25)', color: "#198754"}}>Beginner</span>
                          </div>
                          <span className="badge text-white px-2 py-1 rounded-pill fw-semibold align-items-center" style={{ fontSize: '12px', backgroundColor: "#198754"}}>Free</span>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className='d-inline fw-semibold' style={{color: "#191970", fontSize: "14px"}}>Game Development</p>
                        <h6 className='mt-1'>Game Development with Unity</h6>
                        <p className="card-text text-secondary" style={{fontSize: "14px"}}>
                        Build 2D and 3D games with Unity. Create and publish your first game! 
                        </p>

                        <div className='d-flex gap-2 align-items-center text-secondary'>
                          <img src={getPublicImageUrl('Ms. Aisha Patel.avif')} className="rounded-circle" alt="..." style={{ width: "25px", height: "25px", objectFit: "cover" }}/>
                          <span style={{fontSize: "14px"}}>Ms. Aisha Patel</span>
                          <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-patch-check-fill text-primary' viewBox='0 0 16 16' aria-label='Verified instructor' role='img' title='Verified instructor'>
                            <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708'/>
                          </svg>
                        </div>
                        <div className='d-flex mt-2 justify-content-between justify-content-center text-secondary' style={{fontSize: "14px"}}>
                          <p><span className='text-dark'>⭐ 4.9</span> (612)</p>
                          <p><i className="bi bi-people-fill"></i> 8,400</p>
                        </div>
                        <hr/>
                        <div className='d-flex gap-2 align-items-center text-secondary' style={{fontSize: "14px"}}>
                          <span>24 hours</span>
                          <span>.</span>
                          <span>48 Lessons</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div hidden={courseFilter === 'featured' || courseFilter === 'free'} className='my-4 d-flex gap-3 justify-content-center align-items-center homepage-course-grid'>
                    <div hidden={!matchesCourseFilter({})} className="card rounded-4 course-card-item flex-shrink-0 shadow-sm category-card" style={{ width: '19rem', cursor: "pointer",}}>
                      <div className="position-relative overflow-hidden rounded-top-4">
                        <img src={getPublicImageUrl('Data Science foe Teens.avif')} className="card-img-top course-card-thumb" alt="Python course" />
                        <div className="position-absolute top-0 start-0 end-0 p-2 d-flex justify-content-between align-items-center" style={{ zIndex: 2 }}>
                          <div className='d-flex gap-4 align-items-center justify-content-center'>
                            <span className="fw-semibold d-inline-block rounded-pill" style={{fontSize: '11px',padding: '4px 10px',lineHeight: 1.2,textShadow: '0 1px 2px rgba(0,0,0,0.5)',backgroundColor: 'rgba(153, 144, 16, 0.48)', color: "#e5b521"}}>Intermediate</span>
                          </div>
                          <span className="badge text-white px-2 py-1 rounded-pill fw-semibold align-items-center" style={{ fontSize: '12px', backgroundColor: "#191970"}}>$89</span>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className='d-inline fw-semibold' style={{color: "#191970", fontSize: "14px"}}>Data Science</p>
                        <h6 className='mt-1'>Data Science for Teens</h6>
                        <p className="card-text text-secondary" style={{fontSize: "14px"}}>
                        Analyse real data and create stunning visualisation with Python. 
                        </p>

                        <div className='d-flex gap-2 align-items-center text-secondary'>
                          <img src={getPublicImageUrl('Prof. Michael Torres.avif')} className="rounded-circle" alt="..." style={{ width: "25px", height: "25px", objectFit: "cover" }}/>
                          <span style={{fontSize: "14px"}}>Prof. Michael Torres</span>
                          <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-patch-check-fill text-primary' viewBox='0 0 16 16' aria-label='Verified instructor' role='img' title='Verified instructor'>
                            <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708'/>
                          </svg>
                        </div>
                        <div className='d-flex mt-2 justify-content-between justify-content-center text-secondary' style={{fontSize: "14px"}}>
                          <p><span className='text-dark'>⭐ 4.8</span> (267)</p>
                          <p><i className="bi bi-people-fill"></i> 3,900</p>
                        </div>
                        <hr/>
                        <div className='d-flex gap-2 align-items-center text-secondary' style={{fontSize: "14px"}}>
                          <span>32 hours</span>
                          <span>.</span>
                          <span>58 Lessons</span>
                        </div>
                      </div>
                    </div>

                    <div hidden={!matchesCourseFilter({})} className="card rounded-4 course-card-item flex-shrink-0 shadow-sm category-card" style={{ width: '19rem', cursor: "pointer",}}>
                      <div className="position-relative overflow-hidden rounded-top-4">
                        <img src={getPublicImageUrl('Mobile Development.avif')} className="card-img-top course-card-thumb" alt="Python course" />
                        <div className="position-absolute top-0 start-0 end-0 p-2 d-flex justify-content-between align-items-center" style={{ zIndex: 2 }}>
                          <div className='d-flex gap-4 align-items-center justify-content-center'>
                            <span className="fw-semibold d-inline-block rounded-pill" style={{fontSize: '11px',padding: '4px 10px',lineHeight: 1.2,textShadow: '0 1px 2px rgba(0,0,0,0.5)',backgroundColor: 'rgba(173, 24, 24, 0.48)', color: "#f11d1d"}}>Advanced</span>
                          </div>
                          <span className="badge text-white px-2 py-1 rounded-pill fw-semibold align-items-center" style={{ fontSize: '12px', backgroundColor: "#191970"}}>$149</span>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className='d-inline fw-semibold' style={{color: "#191970", fontSize: "14px"}}>Mobile Development</p>
                        <h6 className='mt-1'>Mobile App Development</h6>
                        <p className="card-text text-secondary" style={{fontSize: "14px"}}>
                        Create mobile apps for iOS and Android with React Native. 
                        </p>

                        <div className='d-flex gap-2 align-items-center text-secondary'>
                          <img src={getPublicImageUrl('Blessing Adeyemi.avif')} className="rounded-circle" alt="..." style={{ width: "25px", height: "25px", objectFit: "cover" }}/>
                          <span style={{fontSize: "14px"}}>Ms,Lisa Wang</span>
                          <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-patch-check-fill text-primary' viewBox='0 0 16 16' aria-label='Verified instructor' role='img' title='Verified instructor'>
                            <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708'/>
                          </svg>
                        </div>
                        <div className='d-flex mt-2 justify-content-between justify-content-center text-secondary' style={{fontSize: "14px"}}>
                          <p><span className='text-dark'>⭐ 4.6</span> (198)</p>
                          <p><i className="bi bi-people-fill"></i> 2,800</p>
                        </div>
                        <hr/>
                        <div className='d-flex gap-2 align-items-center text-secondary' style={{fontSize: "14px"}}>
                          <span>50 hours</span>
                          <span>.</span>
                          <span>95 Lessons</span>
                        </div>
                      </div>
                    </div>

                    <div hidden={!matchesCourseFilter({ beginner: true })} className="card rounded-4 course-card-item flex-shrink-0 shadow-sm category-card" style={{ width: '19rem', cursor: "pointer",}}>
                      <div className="position-relative overflow-hidden rounded-top-4">
                        <img src={getPublicImageUrl('Scratch Programming.avif')} className="card-img-top course-card-thumb" alt="Python course" />
                        <div className="position-absolute top-0 start-0 end-0 p-2 d-flex justify-content-between align-items-center" style={{ zIndex: 2 }}>
                          <div className='d-flex gap-4 align-items-center justify-content-center'>
                            <span className="fw-semibold d-inline-block rounded-pill" style={{fontSize: '11px',padding: '4px 10px',lineHeight: 1.2,textShadow: '0 1px 2px rgba(0,0,0,0.5)',backgroundColor: 'rgba(18, 196, 113, 0.25)', color: "#198754"}}>Beginner</span>
                          </div>
                          <span className="badge text-white px-2 py-1 rounded-pill fw-semibold align-items-center" style={{ fontSize: '12px', backgroundColor: "#191970"}}>$49</span>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className='d-inline fw-semibold' style={{color: "#191970", fontSize: "14px"}}>Programming</p>
                        <h6 className='mt-1'>Scratch Programming for Kids</h6>
                        <p className="card-text text-secondary" style={{fontSize: "14px"}}>
                        Learn coding fundamentals through fun Scratch projects. Ages 7-12 
                        </p>

                        <div className='d-flex gap-2 align-items-center text-secondary'>
                          <img src={getPublicImageUrl('Ms. Aisha Patel.avif')} className="rounded-circle" alt="..." style={{ width: "25px", height: "25px", objectFit: "cover" }}/>
                          <span style={{fontSize: "14px"}}>Ms, Aisha Patel</span>
                          <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-patch-check-fill text-primary' viewBox='0 0 16 16' aria-label='Verified instructor' role='img' title='Verified instructor'>
                            <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708'/>
                          </svg>
                        </div>
                        <div className='d-flex mt-2 justify-content-between justify-content-center text-secondary' style={{fontSize: "14px"}}>
                          <p><span className='text-dark'>⭐ 4.9</span> (742)</p>
                          <p><i className="bi bi-people-fill"></i> 14,200</p>
                        </div>
                        <hr/>
                        <div className='d-flex gap-2 align-items-center text-secondary' style={{fontSize: "14px"}}>
                          <span>16 hours</span>
                          <span>.</span>
                          <span>32 Lessons</span>
                        </div>
                      </div>
                    </div>

                    <div hidden={!matchesCourseFilter({ beginner: true })} className="card rounded-4 course-card-item flex-shrink-0 shadow-sm category-card" style={{ width: '19rem', cursor: "pointer",}}>
                      <div className="position-relative overflow-hidden rounded-top-4">
                        <img src={getPublicImageUrl('Cybersecurity.png')} className="card-img-top course-card-thumb" alt="Python course" />
                        <div className="position-absolute top-0 start-0 end-0 p-2 d-flex justify-content-between align-items-center" style={{ zIndex: 2 }}>
                          <div className='d-flex gap-4 align-items-center justify-content-center'>
                            <span className="fw-semibold d-inline-block rounded-pill" style={{fontSize: '11px',padding: '4px 10px',lineHeight: 1.2,textShadow: '0 1px 2px rgba(0,0,0,0.5)',backgroundColor: 'rgba(18, 196, 113, 0.25)', color: "#198754"}}>Beginner</span>
                          </div>
                          <span className="badge text-white px-2 py-1 rounded-pill fw-semibold align-items-center" style={{ fontSize: '12px', backgroundColor: "#191970"}}>$69</span>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className='d-inline fw-semibold' style={{color: "#191970", fontSize: "14px"}}>Cybersecurity</p>
                        <h6 className='mt-1'>Cybersecurity Fundamentals</h6>
                        <p className="card-text text-secondary" style={{fontSize: "14px"}}>
                        Learn how to stay safe online and understand cybersecurity basics.
                        </p>

                        <div className='d-flex gap-2 align-items-center text-secondary'>
                          <img src={getPublicImageUrl('Mr. Chukwudi Eze.avif')} className="rounded-circle" alt="..." style={{ width: "25px", height: "25px", objectFit: "cover" }}/>
                          <span style={{fontSize: "14px"}}>Mr, Chukwudi Eze</span>
                          <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-patch-check-fill text-primary' viewBox='0 0 16 16' aria-label='Verified instructor' role='img' title='Verified instructor'>
                            <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708'/>
                          </svg>
                        </div>
                        <div className='d-flex mt-2 justify-content-between justify-content-center text-secondary' style={{fontSize: "14px"}}>
                          <p><span className='text-dark'>⭐ 4.7</span> (321)</p>
                          <p><i className="bi bi-people-fill"></i> 4,500</p>
                        </div>
                        <hr/>
                        <div className='d-flex gap-2 align-items-center text-secondary' style={{fontSize: "14px"}}>
                          <span>24 hours</span>
                          <span>.</span>
                          <span>48 Lessons</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='py-5 pb-5 d-flex justify-content-center'>
                  <a className='btn btn-white btn-lg px-4 d-flex align-items-center gap-2 py-2 mb-5 rounded-4 cta-primary-button role-button' href={getPublicPageUrl('/courses')}>Browse All 183 Courses<i className="bi bi-chevron-right" aria-hidden="true"></i></a>
                </div>
              </div>
              {/* fifth flip end */}
              {/* sixth flip start */}
              <div className='p-4 justify-content-center  py-4 bg-body-secondary'>
                <p className='text-center text-uppercase fw-medium' style={{color: "#191970"}}>Built for Everyone</p>
                <h1 className='text-center fw-bolder'>One platform, every perspective</h1>
                <div className='py-5 d-flex flex-column flex-lg-row gap-4 justify-content-center'>
                  <div className='p-4 bg-white flex-shrink-0 shadow-sm category-card rounded-4 border border-secondary-subtle flex-fill' style={{maxWidth: "394px"}}>
                    <div className='d-flex align-items-center justify-content-center rounded-4 mb-4' style={{width: "48px", height: "48px", backgroundColor: "#f0f0f7"}}>
                      <span className='fs-4' aria-hidden='true'>🎓</span>
                    </div>
                    <h3 className='h5 fw-semibold mb-3'>For TechStars (Students)</h3>
                    <ul className='list-unstyled text-secondary mb-4'>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Self-paced video lessons</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>24/7 AI Tutor support</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Interactive quizzes & projects</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Achievements & certificates</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Live coding challenges</li>
                      <li className='d-flex align-items-center gap-2'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Progress tracking</li>
                    </ul>
                    <div className='d-grid'>
                      <button className='btn text-light fw-semibold rounded-3' style={{backgroundColor: "#040446"}} type='button'>
                        <a className="nav-link active" aria-current="page" href={getPublicPageUrl('/account')}>Start Learning</a>
                      </button>
                    </div>
                  </div>
                  <div className='p-4 bg-white flex-shrink-0 shadow-sm category-card rounded-4 border border-secondary-subtle flex-fill' style={{maxWidth: "394px"}}>
                    <div className='d-flex align-items-center justify-content-center rounded-4 mb-4' style={{width: "48px", height: "48px", backgroundColor: "#fff9e8"}}>
                      <span className='fs-4' aria-hidden='true'>👨‍👩‍👧</span>
                    </div>
                    <h3 className='h5 fw-semibold mb-3'>For Parents</h3>
                    <ul className='list-unstyled text-secondary mb-4'>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-warning flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Real-time progress reports</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-warning flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Multi-child management</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-warning flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Book private instructor sessions</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-warning flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Course purchase & billing</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-warning flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Learning goal setting</li>
                      <li className='d-flex align-items-center gap-2'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-warning flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Weekly summaries</li>
                    </ul>
                    <div className='d-grid'>
                      <button className='btn text-dark fw-semibold rounded-3' style={{backgroundColor: "#e5b521"}} type='button'>
                        <a className="nav-link active" aria-current="page" href={getPublicPageUrl('/account')}>Manage Learning</a>
                      </button>
                    </div>
                  </div>
                  <div className='p-4 bg-white flex-shrink-0 shadow-sm category-card rounded-4 border border-secondary-subtle flex-fill' style={{maxWidth: "394px"}}>
                    <div className='d-flex align-items-center justify-content-center rounded-4 mb-4' style={{width: "48px", height: "48px", backgroundColor: "#eefaf7"}}>
                      <span className='fs-4' aria-hidden='true'>🏅</span>
                    </div>
                    <h3 className='h5 fw-semibold mb-3'>For Instructors</h3>
                    <ul className='list-unstyled text-secondary mb-4'>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Course creation studio</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Video hosting & streaming</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Student analytics dashboard</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Private session bookings</li>
                      <li className='d-flex align-items-center gap-2 mb-3'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Automated earnings</li>
                      <li className='d-flex align-items-center gap-2'><span className='d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success flex-shrink-0' style={{width: "16px", height: "16px"}}><i className='bi bi-check'></i></span>Marketing tools</li>
                    </ul>
                    <div className='d-grid'>
                      <button className='btn text-dark fw-semibold rounded-3' style={{backgroundColor: "#edf2f8"}} type='button'>
                        <a className="nav-link active" aria-current="page" href={getPublicPageUrl('/account')}>Start Teaching</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* sixth flip end */}
              {/* seventh flip start */}
              <div className='p-5'>
                <div className='mt-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-4'>
                  <div>
                    <span className='d-block text-uppercase small fw-semibold mb-2' style={{color: "#191970"}}>Instructors</span>
                    <h2 className='fw-bold text-dark mb-0'>Learn from world-class experts</h2>
                  </div>
                  <a className='view-all-link text-secondary text-decoration-none fs-6 mb-1 mt-3 mt-md-0' href={getPublicPageUrl('/instructors')}>See all &rsaquo;</a>
                </div>
                <div className='d-flex gap-3 justify-content-center my-4 mt-3 featured-instructors-grid'>
                  <a className="nav-link active" aria-current="page" href={getPublicPageUrl('/instructors')}>
                    <div className='p-3 flex-shrink-0 shadow-sm category-card rounded-4 border border-secondary-subtle' style={{cursor: "pointer", fontSize: "14px"}}>
                    <div className='d-flex gap-3'>
                      <div className='position-relative flex-shrink-0' style={{width: "60px", height: "60px"}}>
                        <img src={getPublicImageUrl('Dr. Sarah Chen.avif')} className='d-block rounded-3 instructor-image' alt='Dr. Sarah Chen' style={{width: "60px", height: "60px"}}/>
                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-patch-check-fill position-absolute bottom-0 end-0 text-primary bg-white rounded-circle' viewBox='0 0 16 16' aria-label='Verified instructor' role='img' title='Verified instructor'>
                          <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708'/>
                        </svg>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between align-items-start align-items-md-end'>
                          <div className=''>
                            <span className='d-block text-body-emphasis text-dark lh-1 fs-6 fw-semibold'>Dr. Sarah Chen</span>
                            <span className='d-block text-secondary'>Senior AI & Python Instructor</span> 
                          </div>
                          <span style={{color: "#040446"}}>$85/hr</span>
                        </div>
                        <div className='d-flex gap-2 mt-2' style={{color: "#040446"}}>
                          <p className='p-1 px-2 bg-body-secondary rounded-5'>Python</p>
                          <p className='p-1 px-2 bg-body-secondary rounded-5'>Machine Learning</p>
                          <p className='p-1 px-2 bg-body-secondary rounded-5'>Data Science</p>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-between'>
                      <p className='text-secondary'><span className='text-body'>4.9</span> (847)</p>
                      <p className='text-secondary'>12,400 students</p>
                      <p className='text-secondary'>8 courses</p>
                    </div>
                    <div className='d-flex gap-2'>
                      <p className='p-1 px-2 rounded-5 fw-semibold text-black' style={{backgroundColor: "#cc9a26"}}>Top Instructor</p>
                      <p className='p-1 px-2 rounded-5 fw-semibold text-black' style={{backgroundColor: "#cc9a26"}}>Expert Verified</p>
                    </div>
                  </div>
                  </a>
                  <a className="nav-link active" aria-current="page" href={getPublicPageUrl('/instructors')}>
                      <div className='p-3 flex-shrink-0 shadow-sm category-card rounded-4 border border-secondary-subtle' style={{cursor: "pointer", fontSize: "14px"}}>
                    <div className='d-flex gap-3'>
                      <div className='position-relative flex-shrink-0' style={{width: "60px", height: "60px"}}>
                        <img src={getPublicImageUrl('Mr. James Okoye.avif')} className='d-block rounded-3 instructor-image' alt='Mr. James Okoye' style={{width: "60px", height: "60px"}}/>
                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-patch-check-fill position-absolute bottom-0 end-0 text-primary bg-white rounded-circle' viewBox='0 0 16 16' aria-label='Verified instructor' role='img' title='Verified instructor'>
                          <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708'/>
                        </svg>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between gap-4 align-items-start align-items-md-end'>
                          <div className=''>
                            <span className='d-block text-body-emphasis text-dark lh-1 fs-6 fw-semibold'>Mr. James Okoye</span>
                            <span className='d-block text-secondary'>Full-Stack Web Developer & Educator</span> 
                          </div>
                          <span style={{color: "#040446"}}>$70/hr</span>
                        </div>
                        <div className='d-flex gap-2 mt-2' style={{color: "#040446"}}>
                          <p className='p-1 px-2 bg-body-secondary rounded-5'>HTML/CSS</p>
                          <p className='p-1 px-2 bg-body-secondary rounded-5'>JavaScript</p>
                          <p className='p-1 px-2 bg-body-secondary rounded-5'>React</p>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-between'>
                      <p className='text-secondary'><span className='text-body'>4.8</span> (632)</p>
                      <p className='text-secondary'>9,800 students</p>
                      <p className='text-secondary'>6 courses</p>
                    </div>
                    <div className='d-flex gap-2'>
                      <p className='p-1 px-2 rounded-5 fw-semibold text-black' style={{backgroundColor: "#cc9a26"}}>Top Instructor</p>
                    </div>
                  </div>
                  </a>
                  <a className="nav-link active" aria-current="page" href={getPublicPageUrl('/instructors')}>
                      <div className='p-3 flex-shrink-0 shadow-sm category-card rounded-4 border border-secondary-subtle' style={{cursor: "pointer", fontSize: "14px"}}>
                    <div className='d-flex gap-3'>
                      <div className='position-relative flex-shrink-0' style={{width: "60px", height: "60px"}}>
                        <img src={getPublicImageUrl('Ms. Aisha Patel.avif')} className='d-block rounded-3 instructor-image' alt='Ms. Aisha Patel' style={{width: "60px", height: "60px"}}/>
                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='bi bi-patch-check-fill position-absolute bottom-0 end-0 text-primary bg-white rounded-circle' viewBox='0 0 16 16' aria-label='Verified instructor' role='img' title='Verified instructor'>
                          <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708'/>
                        </svg>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between gap-4 align-items-start align-items-md-end'>
                          <div className=''>
                            <span className='d-block text-body-emphasis text-dark lh-1 fs-6 fw-semibold'>Ms. Aisha Patel</span>
                            <span className='d-block text-secondary'>Game Development & Unity Expert</span> 
                          </div>
                          <span style={{color: "#040446"}}>$65/hr</span>
                        </div>
                        <div className='d-flex gap-2 mt-2' style={{color: "#040446"}}>
                          <p className='p-1 px-2 bg-body-secondary rounded-5'>Unity</p>
                          <p className='p-1 px-2 bg-body-secondary rounded-5'>C#</p>
                          <p className='p-1 px-2 bg-body-secondary rounded-5'>Game Design</p>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-between'>
                      <p className='text-secondary'><span className='text-body'>4.7</span> (415)</p>
                      <p className='text-secondary'>6,200 students</p>
                      <p className='text-secondary'>5 courses</p>
                    </div>
                    <div className='d-flex gap-2'>
                      <p className='p-1 px-2 rounded-5 fw-semibold text-black' style={{backgroundColor: "#cc9a26"}}>Rising Star</p>
                    </div>
                  </div>
                  </a>
                </div>
              </div> 
              {/* seventh flip end */}
              {/* eighth flip start */}
              <div className='bg-body-secondary p-5'>
                <p className='text-center text-uppercase' style={{color: "#191970"}}>Testimonials</p>
                <h1 className='text-center'>Changing lives, one line of code</h1>
                <div className='d-flex gap-3 my-5 testimonial-grid'>
                  <div className='bg-light p-3 rounded-4 border border-secondary-subtle'>
                    <p>⭐⭐⭐⭐⭐</p>
                    <span className='text-secondary'>"My daughter went from zero coding knowledge to building her first Python game in just 6 weeks. The AI Tutor feature is incredible — she gets personalised help 24/7."</span>
                    <div className='d-flex gap-3'>
                      <img src={getPublicImageUrl('Amara Okonkwo.avif')} className='my-3 rounded-circle' alt='Dr. Sarah Chen' style={{width: "40px", height: "40px"}}/>
                      <div className='d-flex flex-column align-items-start gap-0 my-3'>
                        <span className='d-block text-body-emphasis text-dark lh-1'>Amara Okonkwo</span>
                        <span className='d-block text-secondary lh-1 mt-1'>Parent of 2 TechStars</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-light p-3 rounded-4 border border-secondary-subtle'>
                    <p>⭐⭐⭐⭐⭐</p>
                    <span className='text-secondary'>"I've learned Python, web dev, and now I'm building my first mobile app. Zee Tech makes learning feel like a game — the achievements and AI tutor keep me motivated."</span>
                    <div className='d-flex gap-3'>
                      <img src={getPublicImageUrl('Kofi Mensah.avif')} className='my-3 rounded-circle' alt='Dr. Sarah Chen' style={{width: "40px", height: "40px"}}/>
                      <div className='d-flex flex-column align-items-start gap-0 my-3'>
                        <span className='d-block text-body-emphasis text-dark lh-1'>Kofi Mensah</span>
                        <span className='d-block text-secondary lh-1 mt-1'>TechStar, Age 15</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-light p-3 rounded-4 border border-secondary-subtle'>
                    <p>⭐⭐⭐⭐⭐</p>
                    <span className='text-secondary'>"The platform's tools are exceptional. Course creation is intuitive, student analytics are deep, and the booking system for private sessions is seamless."</span>
                    <div className='d-flex gap-3'>
                      <img src={getPublicImageUrl('Dr. Sarah Chen.avif')} className='my-3 rounded-circle' alt='Dr. Sarah Chen' style={{width: "40px", height: "40px"}}/>
                      <div className='d-flex flex-column align-items-start gap-0 my-3'>
                        <span className='d-block text-body-emphasis text-dark lh-1'>Dr. Sarah Chen</span>
                        <span className='d-block text-secondary lh-1 mt-1'>Verified Instructor</span>
                      </div>
                    </div>
                  </div>
                  <div className='bg-light p-3 rounded-4 border border-secondary-subtle'>
                    <p>⭐⭐⭐⭐⭐</p>
                    <span className='text-secondary'>"Being able to track my children's progress in real-time gives me real peace of mind. The progress reports are detailed and the instructors are world-class."</span>
                    <div className='d-flex gap-3'>
                      <img src={getPublicImageUrl('Blessing Adeyemi.avif')} className='my-3 rounded-circle' alt='Dr. Sarah Chen' style={{width: "40px", height: "40px"}}/>
                      <div className='d-flex flex-column align-items-start gap-0 my-3'>
                        <span className='d-block text-body-emphasis text-dark lh-1'>Blessing Adeyemi</span>
                        <span className='d-block text-secondary lh-1 mt-1'>Parent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* eighth flip end */}
              {/* ninth flip start */}
              <div className='cta-section d-flex align-items-center justify-content-center text-center' style={{ backgroundColor: '#191970', color: '#ffffff' }}>
                <div className='container'>
                  <span className='d-inline-block px-3 py-2 border border-warning border-opacity-50 rounded-pill text-warning bg-warning bg-opacity-10 small fw-bold'>JOIN 25,000+ TECHSTARS</span>
                  <h2 className='display-5 fw-bold text-white mt-4 mb-3'>Ready to code your future?</h2>
                  <p className='lead text-white mb-4'>
                    Join thousands of young coders and their families building tomorrow's<br className='d-none d-md-inline' />
                    technology today. Start with a free course — no credit card needed.
                  </p>
                  <div className='d-flex justify-content-center gap-3 flex-wrap'>
                    <button className='btn btn-warning btn-lg px-4 py-2 rounded-3 fw-semibold cta-primary-button'>
                      <a className="nav-link active" aria-current="page" href={getPublicPageUrl('/account')}>Create Free Account &rarr;</a>
                    </button>
                    <button className='btn btn-outline-light text-white bg-white bg-opacity-10 border-white border-opacity-25 btn-lg px-4 py-2 rounded-3 fw-semibold'>
                      <a className="nav-link active" aria-current="page" href={getPublicPageUrl('/courses')}>Browse Courses</a>
                    </button>
                  </div>
                  <p className='small text-white text-opacity-50 mt-4 mb-0'>Trusted by families in 42 countries · ISO-certified security · GDPR compliant</p>
                </div>
              </div>
              {/* ninth flip end */}
            </main>
            <Footer />
    </div>
  );
}

export default App;
