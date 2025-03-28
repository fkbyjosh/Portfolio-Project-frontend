import React from 'react';
import './LandingPage.css';
import coverImage from '../assets/cover-image.jpg'; // Replace with cover image path
import feature1Image from '../assets/feature1.jpg'; // Replace with feature image paths
import feature2Image from '../assets/feature2.jpg';
import feature3Image from '../assets/feature3.jpg';

const LandingPage = () => {
  return (
    <>
      {/* Header with Navigation */}
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Intro Section */}
      <section id="home" className="intro">
        <img src={coverImage} alt="Project Cover" className="cover-image" />
        <h1>My Awesome Project</h1>
        <p className="tagline">Empowering creativity through technology.</p>
        <a href="https://myprojectapp.com" target="_blank" rel="noopener noreferrer" className="cta-button">
          Explore the App
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature">
            <img src={feature1Image} alt="Feature 1" />
            <h3>Feature One</h3>
            <p>Unlock seamless collaboration with real-time updates and intuitive tools.</p>
          </div>
          <div className="feature">
            <img src={feature2Image} alt="Feature 2" />
            <h3>Feature Two</h3>
            <p>Experience lightning-fast performance optimized for all devices.</p>
          </div>
          <div className="feature">
            <img src={feature3Image} alt="Feature 3" />
            <h3>Feature Three</h3>
            <p>Personalize your workflow with customizable settings and themes.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>Policy Data Management System</h2>
        <p>
        This project was inspired by my experience working in the insurance industry. I noticed the manual tracking of policies caused delays and inefficiencies. 
        This tool aims to streamline that process with automation and intuitive data visualization. 
        This project is part of my Portfolio for the <a href="https://www.alxafrica.com" target="_blank" rel="noopener noreferrer">ALX</a> Software Engineering program.
        </p>
        <h3>Meet the Team</h3>
        <div className="team">
          <div className="team-member">
            <p><strong>Joshua Baka</strong></p>
            <p>
              <a href="https://linkedin.com/in/joshua-baka-001" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
              <a href="https://github.com/jfkby" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
              <a href="https://twitter.com/meatp_ie" target="_blank" rel="noopener noreferrer">Twitter</a>
            </p>
          </div>
        </div>
        <p>
          Check out the source code on{' '}
          <a href="https://github.com/fkbyjosh/myproject" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Policy Data Management System. All rights reserved.</p>
      </footer>
    </>
  );
};

export default LandingPage;