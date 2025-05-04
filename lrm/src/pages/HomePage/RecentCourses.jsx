import React from 'react';
import { useNavigate } from 'react-router-dom';
import './course.css';

const RecentCourses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn the basics of React, JSX, components, props, and state.",
      details: "This comprehensive beginner course will teach you everything you need to know to get started with React. From setting up your environment to building your first application...",
      price: "$49",
      instructor: "John Doe"
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into closures, async/await, prototypes, and more.",
      details: "This advanced course covers intricate JavaScript topics like the event loop, memory management, closures, and real-world asynchronous code examples...",
      price: "$59",
      instructor: "Jane Smith"
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Master frontend and backend using MERN stack.",
      details: "A full course teaching MongoDB, Express, React, and Node. You'll build complete full stack applications and learn deployment techniques...",
      price: "$99",
      instructor: "Alice Johnson"
    }
  ];

  const handleCardClick = (course) => {
    navigate(`/course/${course.id}`, { state: course });
  };

  return (
    <div className="course-container">
      {courses.map((course) => (
        <div className="course-card" key={course.id} onClick={() => handleCardClick(course)}>
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
