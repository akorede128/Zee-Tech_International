import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import getPublicImageUrl, { getPublicPageUrl } from './publicImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const instructors = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Senior AI & Python Instructor',
    badge: 'Top Instructor',
    status: 'Available this week',
    bio: 'PhD in Computer Science from MIT. Former engineer at Google DeepMind with 12 years of teaching experience.',
    skills: ['Python', 'Machine Learning', 'Data Science', 'AI'],
    rating: '4.9', students: '12,400', courses: '8', price: '$85/hr',
    schedule: 'Mon–Fri · 9 AM–6 PM',
    image: getPublicImageUrl('Dr. Sarah Chen.avif'),
  },
  {
    id: 2,
    name: 'Mr. James Okoye',
    role: 'Full-Stack Web Developer & Educator',
    badge: 'Top Instructor',
    status: 'Available this week',
    bio: 'Self-taught developer turned educator with nine years of industry experience. Builds products used by millions.',
    skills: ['Web Development', 'JavaScript', 'React', 'Node.js'],
    rating: '4.8', students: '9,800', courses: '6', price: '$70/hr',
    schedule: 'Mon–Sat · 10 AM–8 PM',
    image: getPublicImageUrl('Mr. James Okoye.avif'),
  },
  {
    id: 3,
    name: 'Ms. Aisha Patel',
    role: 'Game Development & Unity Expert',
    badge: 'Rising Star',
    status: 'Available this weekend',
    bio: 'Independent game developer with three published games. Passionate about teaching creative coding to young learners.',
    skills: ['Game Development', 'Unity', 'C#', 'Scratch'],
    rating: '4.7', students: '6,200', courses: '5', price: '$65/hr',
    schedule: 'Weekends · 10 AM–5 PM',
    image: getPublicImageUrl('Ms. Aisha Patel.avif'),
  },
  {
    id: 4,
    name: 'Prof. Michael Torres',
    role: 'Data Science & Analytics Professor',
    badge: 'Top Instructor',
    status: 'Available next week',
    bio: 'University professor and published researcher, focused on making complex data concepts understandable and practical.',
    skills: ['Data Science', 'Python', 'Statistics', 'Visualization'],
    rating: '4.9', students: '7,800', courses: '7', price: '$95/hr',
    schedule: 'Tue–Thu · 2 PM–7 PM',
    image: getPublicImageUrl('Prof. Michael Torres.avif'),
  },
  {
    id: 5,
    name: 'Ms. Lisa Wang',
    role: 'Mobile App Development Instructor',
    badge: 'Rising Star',
    status: 'Available this week',
    bio: 'iOS and Android developer with eight years in the industry. Committed to helping beginners build confidence.',
    skills: ['Mobile Development', 'iOS', 'Android', 'React Native'],
    rating: '4.6', students: '4,100', courses: '4', price: '$75/hr',
    schedule: 'Mon–Wed–Fri · 11 AM–7 PM',
    image: getPublicImageUrl('Blessing Adeyemi.avif'),
  },
  {
    id: 6,
    name: 'Mr. Chukwudi Eze',
    role: 'Cybersecurity & Networking Expert',
    badge: 'Expert Verified',
    status: 'Available this week',
    bio: 'Certified ethical hacker and security consultant with more than ten years protecting enterprise systems.',
    skills: ['Cybersecurity', 'Networking', 'Ethical Hacking', 'Linux'],
    rating: '4.8', students: '5,600', courses: '5', price: '$90/hr',
    schedule: 'Mon–Fri · 6 PM–10 PM',
    image: getPublicImageUrl('Mr. Chukwudi Eze.avif'),
  },
];

function InstructorCard({ instructor }) {
  return (
    <article className="col-12 col-md-6 col-xl-4 mb-4">
      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden instructor-card">
        <div className="card-body p-0">
          <div className="position-relative p-4 pb-2 bg-white">
            <div className="d-flex align-items-start justify-content-between gap-2">
              <div className="d-flex align-items-center min-w-0">
                <img src={instructor.image} alt={instructor.name} className="rounded-3 flex-shrink-0" style={{ width: 55, height: 55, objectFit: 'cover' }} />
                <div className="min-w-0 ps-2">
                  <h2 className="h6 fw-bold text-dark mb-1" style={{ fontSize: '1.13rem' }}>{instructor.name}</h2>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.86rem' }}>{instructor.role}</p>
                </div>
              </div>
              <span className="badge rounded-pill px-2 py-1 fw-semibold" style={{ backgroundColor: '#f5d85c', color: '#1d1e3d', fontSize: '0.77rem' }}>{instructor.badge}</span>
            </div>

            <p className="text-secondary mt-3 mb-3" style={{ lineHeight: 1.45, fontSize: '0.91rem' }}>{instructor.bio}</p>

            <div className="d-flex flex-wrap gap-1.5">
              {instructor.skills.map((skill) => (
                <span key={skill} className="badge rounded-pill border px-1.5 py-1 text-dark" style={{ backgroundColor: '#f4f6fb', borderColor: '#e4e8f0', fontSize: '0.79rem' }}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="card-footer bg-white border-0 p-3 pt-2">
            <div className="row g-1 text-center mb-3">
              <div className="col-4"><div className="fw-bold" style={{ fontSize: '0.93rem', color: '#1d1d79' }}>{instructor.rating}</div><div className="text-secondary" style={{ fontSize: '0.79rem' }}>Rating</div></div>
              <div className="col-4 border-start border-end"><div className="fw-bold" style={{ fontSize: '0.93rem', color: '#1d1d79' }}>{instructor.students}</div><div className="text-secondary" style={{ fontSize: '0.79rem' }}>Students</div></div>
              <div className="col-4"><div className="fw-bold" style={{ fontSize: '0.93rem', color: '#1d1d79' }}>{instructor.courses}</div><div className="text-secondary" style={{ fontSize: '0.79rem' }}>Courses</div></div>
            </div>

            <div className="d-flex gap-2 mb-2">
              <button className="btn btn-outline-dark flex-fill rounded-pill px-2 py-1 fw-semibold" type="button" style={{ fontSize: '0.83rem' }}>View Profile</button>
              <button className="btn flex-fill rounded-pill px-2 py-1 fw-semibold text-white" type="button" style={{ backgroundColor: '#1d1d79', fontSize: '0.83rem' }}>Book Lesson</button>
            </div>

            <div className="d-flex align-items-center justify-content-between gap-2 text-secondary" style={{ fontSize: '0.81rem' }}>
              <span className="d-flex align-items-center gap-1"><span aria-hidden="true">🗓</span>{instructor.schedule}</span>
              <span className="fw-semibold text-success">{instructor.status}</span>
            </div>
          </div>
        </div>
      </div>
      </article>
    );
}

function Instructors() {
  const [search, setSearch] = useState('');

  const visibleInstructors = useMemo(() => {
    const query = search.trim().toLowerCase();
    return instructors.filter((instructor) => {
      const matchesSearch = !query || [instructor.name, instructor.role, instructor.bio, ...instructor.skills]
        .join(' ')
        .toLowerCase()
        .includes(query);
      return matchesSearch;
    });
  }, [search]);

  return (
    <div className="courses-page">
      <Header />

      <main className="courses-shell pt-5">
        <section className="courses-header pt-4 px-4 px-lg-5 mt-5 mb-5">
          <div className="courses-heading-block">
            <h1 className="h4 fs-1 fw-bold mb-1 lh-1 text-dark" style={{ fontSize: '2.05rem' }}>Find Your Perfect Instructor</h1>
            <p className="text-secondary mb-2 small fs-6" style={{ fontSize: '0.97rem' }}>6 verified expert instructors available for courses and private sessions.</p>
          </div>

          <div className="d-flex align-items-center gap-2 py-1 flex-wrap">
            <a className="btn btn-sm rounded-3 px-3 py-2 fw-semibold d-flex align-items-center gap-2 text-decoration-none" href={getPublicPageUrl('/courses')} style={{ backgroundColor: '#f4f5f7', color: '#1d1d79' }}>
              <span aria-hidden="true">📚</span>
              Courses
            </a>
            <a className="btn btn-sm rounded-3 px-3 py-2 fw-semibold d-flex align-items-center gap-2 border-0 text-decoration-none" href={getPublicPageUrl('/instructors')} style={{ backgroundColor: '#1d1d79', color: 'white' }}>
              <span aria-hidden="true">🏅</span>
              Instructors
            </a>
          </div>
        </section>

        <div className="border-top pb-3" style={{ backgroundColor: '#f4f5f7' }}>
          <div className="px-4 px-lg-5 py-3">
            <section className="d-flex flex-column flex-lg-row gap-3 mb-3">
              <div className="col-12 input-group rounded-3 border" style={{ backgroundColor: '#fff', borderColor: '#dfe5ee', width: '100%' }}>
                <span className="input-group-text border-0 bg-transparent text-secondary px-2" style={{ fontSize: '0.8rem' }}>⌕</span>
                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search instructors..."
                  aria-label="Search instructors"
                  className="form-control border-0 shadow-none bg-transparent p-1"
                  style={{ height: '37px', minHeight: '37px', fontSize: '0.92rem' }}
                />
              </div>
            </section>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="text-secondary mb-0 small">Showing <strong className="text-dark">{visibleInstructors.length}</strong> instructors</p>
            </div>

            {visibleInstructors.length > 0 ? (
              <div className="row g-4">
                {visibleInstructors.map((instructor) => <InstructorCard key={instructor.id} instructor={instructor} />)}
              </div>
            ) : (
              <div className="card rounded-4 text-center py-5 border-0 bg-white">
                <h2 className="h5 fw-bold text-dark">No instructors found</h2>
                <p className="text-secondary">Try another search.</p>
                <button className="btn btn-outline-dark rounded-pill" type="button" onClick={() => setSearch('')}>Clear search</button>
              </div>
            )}
          </div>

            <section className="px-4 px-lg-5 py-5 mt-3 mx-lg-5 mb-5 rounded-5 text-center text-white" style={{ background: 'linear-gradient(135deg, #1d1d79 0%, #191970 100%)' }}>
                <h3 className="fw-bold mb-3">Are you a tech expert?</h3>
                <p className="text-secondary text-white-50 mb-4">Share your knowledge, build a student base, and earn doing what you love.</p>
                <a className="btn btn-light rounded-pill px-4 py-2 fw-bold text-dark" href={getPublicPageUrl('/account')}>Apply to teach</a>
            </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Instructors;
