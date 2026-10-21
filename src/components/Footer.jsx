import React from 'react'


const Footer = () => {
  return (
    <footer className='p-5 text-white d-flex flex-column gap-3 site-footer' style={{backgroundColor: "#0d1b2a"}}>
        <div className='d-flex px-5 justify-content-between site-footer-columns'>
            <div className=''>
                <div className='d-flex gap-3 mb-4'>
                    <div className='fs-6 p-3 rounded-3 fw-bolder' style={{width: "35px", height: "35px", display: "flex", justifyContent: "center", alignItems: "center", color: "#0d1b2a", backgroundColor: "#cc9a26",}}>Z</div>
                    <div className=''>
                        <p className='text-secondary fw-bolder text-light m-0' style={{ display: "block", margin: 0, padding: 0, lineHeight: 1 }}>Zee Tech</p>

                        <p className='text-secondary fw-bolder m-0'  style={{ display: "block", margin: 0, padding: 0, lineHeight: 1 }}>LEARNING</p>
                    </div>
                </div>
                <div className='text-secondary fw-bolder'>
                    <span>Empowering the next generation of tech <br/> innovators across Africa and the world. <br/> Code. Create. Impact.</span>
                </div>
                <div className='d-flex gap-3 mt-4 text-secondary fw-bolder'>
                    <p className='rounded-3' style={{width: "40px", height: "40px", backgroundColor: "#1b263b", justifyContent: "center", alignItems: "center", display: "flex",}}>T</p>
                    <p className='rounded-3' style={{width: "40px", height: "40px", backgroundColor: "#1b263b", justifyContent: "center", alignItems: "center", display: "flex",}}>L</p>
                    <p className='rounded-3' style={{width: "40px", height: "40px", backgroundColor: "#1b263b", justifyContent: "center", alignItems: "center", display: "flex",}}>I</p>
                    <p className='rounded-3' style={{width: "40px", height: "40px", backgroundColor: "#1b263b", justifyContent: "center", alignItems: "center", display: "flex",}}>Y</p>
                </div>
            </div>
            <div className='text-secondary fw-bolder'>
                <p className='text-light'>Learn</p>
                <p>Browse Courses</p>
                <p>Course Categories</p>
                <p>Free Courses</p>
                <p>Cartifications</p>
                <p>AI Tutor</p>
            </div>
            <div className='text-secondary fw-bolder'>
                <p className='text-light'>Teach</p>
                <p>Become Instructor</p>
                <p>Instructor Guide</p>
                <p>Teaching Resources</p>
                <p>Instructor Support</p>
            </div>
            <div className='text-secondary fw-bolder'>
                <p className='text-light'>Company</p>
                <p>About Zee Tech</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Press</p>
                <p>Contact</p>
            </div>
        </div>
        <div className='px-5'>
            <hr/>
        </div>
        <div className='d-flex gap-5 px-5 justify-content-between text-secondary fw-bolder site-footer-bottom' style={{fontSize: "12px",}}>
            <div>&copy; 2026 Zee Tech International. All rights reserved.</div>
            <div className='d-flex gap-3'>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookie Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer