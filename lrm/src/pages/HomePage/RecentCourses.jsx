import React from 'react';
import './course.css';

const RecentCourses = () => {
  const courses = [
    {
      title: "React for Beginners",
      description: "Learn the basics of React, JSX, components, props, and state.",
      price: "$49",
      instructor: "John Doe"
    },
    {
      title: "Advanced JavaScript",
      description: "Deep dive into closures, async/await, prototypes, and more.",
      price: "$59",
      instructor: "Jane Smith"
    },
    {
      title: "Full Stack Development",
      description: "Master frontend and backend using MERN stack.",
      price: "$99",
      instructor: "Alice Johnson"
    }
  ];

  return (
    <div className="course-container">
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <h2>{course.title}</h2>
          <p className="description">{course.description}</p>
          <p><strong>Price:</strong> {course.price}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <button className="enroll-btn">Enroll Now</button>
        </div>
      ))}
    </div>
  );
};

export default RecentCourses;
