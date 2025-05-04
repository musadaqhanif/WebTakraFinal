import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Details.css';

const CourseDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state;

  if (!course) {
    return (
      <div className="course-details">
        <h2>No Course Data Found</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Price:</strong> {course.price}</p>
      <p>{course.details}</p>
      <button className="enroll-btn" onClick={() => navigate('/')}>Back to Courses</button>
    </div>
  );
};

export default CourseDetails;
