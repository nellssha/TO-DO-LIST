// App.jsx
import "./App.css";
import CounterApp from "./Components/CounterApp";
import CourseCard from "./Components/CourseCard";
import ToDoList from "./Components/ToDoList";
import Navbar from "./Components/NavbarComponents";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Login from "./Pages/Login";

function App() {
  const courses = [
    {
      id: 1,
      title: "Complete MERN Stack Bootcamp",
      description: "Learn MongoDB, Express, React & Node with real-world projects.",
      rating: 4.8,
      reviews: 2340,
      students: 12500,
      duration: "42 Hours",
      price: 49,
      originalPrice: 99,
      badge: "Bestseller",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    },
    {
      id: 2,
      title: "React JS From Beginner to Advanced",
      description: "Master React with hooks, routing, context API and projects.",
      rating: 4.7,
      reviews: 1890,
      students: 9800,
      duration: "36 Hours",
      price: 39,
      originalPrice: 89,
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    },
    {
      id: 3,
      title: "Node.js & Express API Mastery",
      description: "Build scalable backend APIs with authentication & JWT.",
      rating: 4.6,
      reviews: 1450,
      students: 7600,
      duration: "28 Hours",
      price: 29,
      originalPrice: 79,
      badge: "New",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      id: 4,
      title: "Full Stack Project Based Learning",
      description: "Build 10 real-world full stack applications from scratch.",
      rating: 4.9,
      reviews: 3100,
      students: 15000,
      duration: "55 Hours",
      price: 59,
      originalPrice: 119,
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];

  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h3>Course Management System</h3>
      </div>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses courses={courses} />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Optional components: commented out so they don't render */}
      {/*
      <CounterApp />
      <ToDoList />
      */}
    </Router>
  );
}

export default App;
