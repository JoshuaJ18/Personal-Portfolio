import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navigation/Navbar';
import Home from './components/homepage/Home';
import AboutMe from './components/about/AboutMe';
import Project from './components/projects/Project';
import Experience from './components/experience/Experience';
import Bottom from './components/bottom/Bottom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />,
    <Home />,
    <AboutMe />,
    <Project />,
    <Experience />,
    <Bottom />,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
