import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { getPublicPageUrl } from './publicImage';

afterEach(() => {
  window.location.hash = '';
});

test('renders the home page by default', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /where young coders/i })).toBeInTheDocument();
});

test.each([
  ['#/courses', 'Explore Our Course Library'],
  ['#/instructors', 'Find Your Perfect Instructor'],
  ['#/intructors', 'Find Your Perfect Instructor'],
  ['#/login', 'Welcome back'],
  ['#/account', 'Create your account'],
  ['#/signup', 'Create your account'],
])('renders the %s page route', (hash, heading) => {
  window.location.hash = hash;
  render(<App />);
  expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
});

test('navigates between pages without leaving the GitHub Pages site', async () => {
  render(<App />);

  fireEvent.click(screen.getByRole('link', { name: 'Courses' }));
  expect(await screen.findByRole('heading', { name: 'Explore Our Course Library' })).toBeInTheDocument();

  fireEvent.click(screen.getAllByRole('link', { name: 'Instructors' })[0]);
  expect(await screen.findByRole('heading', { name: 'Find Your Perfect Instructor' })).toBeInTheDocument();
});

test('filters the course catalog by price', () => {
  window.location.hash = '#/courses';
  render(<App />);

  fireEvent.change(screen.getByRole('combobox', { name: 'Filter by price' }), {
    target: { value: 'Free' },
  });

  expect(screen.getByText('Showing 1 course')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Game Development with Unity' })).toBeInTheDocument();
});

test('builds project-page URLs using hash routes', () => {
  expect(getPublicPageUrl('/courses')).toBe(`${process.env.PUBLIC_URL}/#/courses`);
});
