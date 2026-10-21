import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';
import { getPublicPageUrl } from '../publicImage';

const Header = () => {
  const [selectedRole, setSelectedRole] = useState('');

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body bg-opacity-100 border-bottom border-dark border-opacity-25 fixed-top px-5">
        <div className="container-fluid gap-3">
            <div className={"p-2 rounded-3 fs-6"} style={{width: "40px", height: "40px", alignItems: "center", justifyContent: "center", display: 'flex', backgroundColor: "#cc9a26",}}>
              <a className="nav-link active fw-semibold" aria-current="page" href={getPublicPageUrl()}>Z</a>
            </div>
            <a className="navbar-brand fs-6" href={getPublicPageUrl()}>
              <span className='rounded-3 fw-bolder' style={{display: "block", margin: 0, padding: 0, lineHeight: 1}}>Zee Tech</span> 
              <span className='rounded-3 fw-bolder text-secondary' style={{display: "block", margin: 0, padding: 0, lineHeight: 1}}>LEARNING</span>
            </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item">
              <a className="nav-link active text-secondary fw-semibold" aria-current="page" href={getPublicPageUrl('/courses')}>Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-secondary fw-semibold" aria-current="page" href={getPublicPageUrl('/instructors')}>Instructors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-secondary fw-semibold" href={getPublicPageUrl()}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-secondary fw-semibold" href={getPublicPageUrl('/courses')}>Pricing</a>
            </li>
          </ul>
          <form className="d-flex gap-3" role="search">
            <div className="btn-group">
            <button
                className="btn btn-white btn-sm dropdown-toggle rounded-3 role-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
            <span className='text-secondary'>Demo as:</span>
            {selectedRole && <span className="ms-2 fw-semibold text-secondary">{selectedRole}</span>}
            </button>

            <ul className="dropdown-menu">
                <li>
              <button className="dropdown-item" type="button" onClick={() => setSelectedRole('Student')}>
                    Student
              </button>
                </li>
                <li>
              <button className="dropdown-item" type="button" onClick={() => setSelectedRole('Parent')}>
                    Parent
              </button>
                </li>
                <li>
              <button className="dropdown-item" type="button" onClick={() => setSelectedRole('Instructor')}>
                    Instructor
              </button>
                </li>
                <li>
              <button className="dropdown-item" type="button" onClick={() => setSelectedRole('Admin')}>
                    Admin
              </button>
                </li>
            </ul>
            </div>
            
            <a className="btn btn-white rounded-2 login-button fw-semibold text-secondary" href={getPublicPageUrl('/login')}>Log In</a>

            <a className='btn rounded-3 fw-semibold text-white' style={{backgroundColor: "#211f7a", border: "none", padding: "8px 18px"}} href={getPublicPageUrl('/account')}>Get Started</a>
          </form>
        </div>
        </div>
      </nav>
    </header>
  )
}

export default Header