import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const categories = [
  'All',
  'Programming',
  'Web Development',
  'AI & Machine Learning',
  'Game Development',
  'Data Science',
  'Mobile Development',
  'Cybersecurity',
  'Robotics',
];

const courseData = [
  {
    id: 1,
    category: 'Programming',
    title: 'Python for Young Coders',
    level: 'Beginner',
    price: 79,
    featured: true,
    image: '/images/hold-python.avif',
    instructor: 'Dr. Sarah Chen',
    instructorImage: '/images/Dr. Sarah Chen.avif',
    rating: 4.9,
    reviews: 612,
    learners: 8400,
    duration: '24 hours',
    lessons: 48,
    accent: '#191970',
    pill: 'rgba(18, 196, 113, 0.25)',
    levelColor: '#198754',
  },
  {
    id: 2,
    category: 'Web Development',
    title: 'Web Development Bootcamp for Teens',
    level: 'Beginner',
    price: 99,
    featured: true,
    image: '/images/Web Development.avif',
    instructor: 'Mr. James Okoye',
    instructorImage: '/images/Mr. James Okoye.avif',
    rating: 4.8,
    reviews: 487,
    learners: 6200,
    duration: '36 hours',
    lessons: 72,
    accent: '#191970',
    pill: 'rgba(18, 196, 113, 0.25)',
    levelColor: '#198754',
  },
  {
    id: 3,
    category: 'AI & Machine Learning',
    title: 'Introduction to Artificial Intelligence',
    level: 'Intermediate',
    price: 129,
    featured: true,
    image: '/images/AI & Machine Learning.avif',
    instructor: 'Dr. Sarah Chen',
    instructorImage: '/images/Dr. Sarah Chen.avif',
    rating: 4.9,
    reviews: 823,
    learners: 11200,
    duration: '40 hours',
    lessons: 65,
    accent: '#191970',
    pill: 'rgba(153, 144, 16, 0.48)',
    levelColor: '#e5b521',
  },
  {
    id: 4,
    category: 'Game Development',
    title: 'Game Development with Unity',
    level: 'Beginner',
    price: 0,
    featured: false,
    image: '/images/Game Development.avif',
    instructor: 'Ms. Aisha Patel',
    instructorImage: '/images/Ms. Aisha Patel.avif',
    rating: 4.9,
    reviews: 612,
    learners: 8400,
    duration: '24 hours',
    lessons: 48,
    accent: '#191970',
    pill: 'rgba(18, 196, 113, 0.25)',
    levelColor: '#198754',
  },
  {
    id: 5,
    category: 'Data Science',
    title: 'Data Science for Teens',
    level: 'Intermediate',
    price: 89,
    featured: false,
    image: '/images/Data Science foe Teens.avif',
    instructor: 'Prof. Michael Torres',
    instructorImage: '/images/Prof. Michael Torres.avif',
    rating: 4.8,
    reviews: 267,
    learners: 3900,
    duration: '32 hours',
    lessons: 58,
    accent: '#191970',
    pill: 'rgba(153, 144, 16, 0.48)',
    levelColor: '#e5b521',
  },
  {
    id: 6,
    category: 'Mobile Development',
    title: 'Mobile App Development',
    level: 'Advanced',
    price: 149,
    featured: false,
    image: '/images/Mobile Development.avif',
    instructor: 'Ms. Lisa Wang',
    instructorImage: '/images/Blessing Adeyemi.avif',
    rating: 4.6,
    reviews: 198,
    learners: 2800,
    duration: '50 hours',
    lessons: 95,
    accent: '#191970',
    pill: 'rgba(173, 24, 24, 0.48)',
    levelColor: '#f11d1d',
  },
  {
    id: 7,
    category: 'Programming',
    title: 'Scratch Programming for Kids',
    level: 'Beginner',
    price: 49,
    featured: false,
    image: '/images/Scratch Programming.avif',
    instructor: 'Ms. Aisha Patel',
    instructorImage: '/images/Ms. Aisha Patel.avif',
    rating: 4.9,
    reviews: 742,
    learners: 14200,
    duration: '16 hours',
    lessons: 32,
    accent: '#191970',
    pill: 'rgba(18, 196, 113, 0.25)',
    levelColor: '#198754',
  },
  {
    id: 8,
    category: 'Cybersecurity',
    title: 'Cybersecurity Fundamentals',
    level: 'Beginner',
    price: 69,
    featured: false,
    image: '/images/Cybersecurity.png',
    instructor: 'Mr. Chukwudi Eze',
    instructorImage: '/images/Mr. Chukwudi Eze.avif',
    rating: 4.7,
    reviews: 321,
    learners: 4500,
    duration: '24 hours',
    lessons: 51,
    accent: '#191970',
    pill: 'rgba(18, 196, 113, 0.25)',
    levelColor: '#198754',
  },
];

function CourseCard({ course }) {
  return (
    <div className="course-library-card category-card" style={{ width: '19rem' }}>
      <div className="course-library-image-wrap">
        <img src={course.image} className="course-library-image" alt={course.title} />
        <div className="course-library-badges">
          <div className="course-library-badges-left">
            {course.featured && (
              <span className="course-library-featured">Featured</span>
            )}
            <span className="course-library-level" style={{ backgroundColor: course.pill, color: course.levelColor }}>{course.level}</span>
          </div>
          <span className="course-library-price">{course.price === 0 ? 'Free' : `$${course.price}`}</span>
        </div>
      </div>

      <div className="card-body p-3">
        <p className="course-library-category">{course.category}</p>
        <h6 className="course-library-title">{course.title}</h6>
        <p className="course-library-description">{course.description || 'Learn the essentials through guided lessons and practical projects.'}</p>

        <div className="d-flex align-items-center gap-2 text-secondary small mb-2">
          <img src={course.instructorImage} className="rounded-circle course-library-instructor" alt={course.instructor} />
          <span>{course.instructor}</span>
          <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='currentColor' className='bi bi-patch-check-fill text-primary' viewBox='0 0 16 16' aria-label='Verified instructor' role='img'>
            <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708' />
          </svg>
        </div>

        <div className="d-flex justify-content-between align-items-center text-secondary small mb-2">
          <span><span className="text-dark fw-semibold">⭐ {course.rating}</span> ({course.reviews})</span>
          <span><i className="bi bi-people-fill me-1"></i>{course.learners.toLocaleString()}</span>
        </div>

        <hr className="my-2" />

        <div className="d-flex gap-2 text-secondary small align-items-center">
          <span>{course.duration}</span>
          <span>•</span>
          <span>{course.lessons} Lessons</span>
        </div>
      </div>
    </div>
  );
}

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const visibleCourses = useMemo(() => {
    return courseData.filter((course) => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const haystack = `${course.title} ${course.category} ${course.instructor}`.toLowerCase();
      const matchesSearch = haystack.includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <div className="courses-page">
      <Header />

      <main className="courses-shell pt-5">
        <section className="courses-header pt-4 px-4 px-lg-5 mt-5 mb-5">
            <div className="courses-heading-block">
                <h1 className="h4 fw-bold fs-1 mb-1 lh-1 text-dark">Explore Our Course Library</h1>
                <p className="text-secondary mb-2 small fs-6">8 expert-led courses across 8 technology disciplines.</p>
            </div>

            <div className="d-flex align-items-center gap-2 py-1">
                <button className="btn btn-sm rounded-3 px-3 py-2 fw-semibold d-flex align-items-center gap-2" type="button" style={{backgroundColor: "#1e1d79", color: "white"}}>
                    <span aria-hidden="true">📚</span>
                    <a className="nav-link active fw-semibold" aria-current="page" href="/courses">Courses</a>
                </button>
                <button className="btn btn-sm rounded-3 px-3 py-2 fw-semibold d-flex align-items-center gap-2 text-dark border-0" type="button" style={{backgroundColor: "#f4f5f7",}}>
                    <span aria-hidden="true">🏅</span>
                    <a className="nav-link active fw-semibold" aria-current="page" href="/intructors">Intructors</a>
                </button>
            </div>
        </section>

        <div className='border-top pb-3' style={{backgroundColor: "#f4f5f7",}}>
            <div className='px-4 px-lg-5 py-3'>
                    <section className="d-flex py-2 px-2 gap-2 courses-toolbar">
                    <div className="courses-search-box py-1">
                        <span className="courses-search-icon">⌕</span>
                        <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search courses, topics, skills..."
                        aria-label="Search courses"
                        className="p-0 text-secondary"
                        />
                    </div>

                    <div className="courses-filter-group">
                        <button className="courses-filter-btn btn btn-sm px-3 py-2 fw-medium" type="button">All Categories</button>
                        <button className="courses-filter-btn btn btn-sm px-3 py-2 fw-medium" type="button">All Levels</button>
                        <button className="courses-filter-btn btn btn-sm px-3 py-2 fw-medium" type="button">Any Price</button>
                        <button className="courses-filter-btn btn btn-sm px-3 py-2 fw-medium" type="button">Most Popular</button>
                    </div>
                </section>

                <section className="courses-category-row mt-3">
                {categories.map((category) => {
                    const isSelected = selectedCategory === category;
                    return (
                    <button
                        key={category}
                        type="button"
                        className={`course-category-chip ${isSelected ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        <span>{category === 'All' ? '' : category === 'Programming' ? '💻' : category === 'Web Development' ? '🌐' : category === 'AI & Machine Learning' ? '🤖' : category === 'Game Development' ? '🎮' : category === 'Data Science' ? '📊' : category === 'Mobile Development' ? '📱' : category === 'Cybersecurity' ? '🔒' : '🦾'}</span>
                        {category}
                    </button>
                    );
                })}
                </section>
 
                <p className="courses-result-label">Showing {visibleCourses.length} course{visibleCourses.length === 1 ? '' : 's'}</p>

                <section className="courses-grid">
                {visibleCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
                </section>
            </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Courses;