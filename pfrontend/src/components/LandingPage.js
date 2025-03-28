import React from 'react';
import { Link } from 'react-router-dom'; // For internal navigation
import './LandingPage.css';
import coverImage from '../assets/cover-image.png'; // Replace with your mockup image
import featureImage from '../assets/feature-image.png'; // Replace with your feature image
import aboutImage from '../assets/about-image.png'; // Replace with your about image
import githubIcon from '../assets/github-icon.png'; // Replace with GitHub icon
import twitterIcon from '../assets/twitter-icon.png'; // Replace with Twitter icon
import emailIcon from '../assets/email-icon.png'; // Replace with Email icon

const teamMembers = [
  {
    name: 'Joshua Baka',
    role: 'Full Stack Developer',
    github: 'https://github.com/fkbyjosh',
    linkedin: 'https://linkedin.com/in/joshua-baka-001',
    twitter: 'https://twitter.com/meatp_ie',
  },
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">HOLLARD LIFE</div>
        <nav>
          <ul>
            <li>
              <Link to="#features">Features</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
          </ul>
        </nav>
        <Link to="/app" className="launch-button">
          Launch App
        </Link>
      </header>

      {/* Intro Section */}
      <section id="home" className="intro">
        <div className="intro-content">
          <h1>Policy Data Management System</h1>
          <p>
            Transform the way you work with our innovative solution that maximizes productivity and simplifies workflows.
          </p>
          <div className="intro-buttons">
            <Link to="/app" className="launch-button">
              Launch App
            </Link>
            <Link to="#features" className="explore-button">
              Explore Features <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <img src={coverImage} alt="App Mockup" className="intro-image" />
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Everything You Need to Succeed</h2>
        <p className="section-tagline">
          Our innovative tools are designed to help you work smarter, not harder.
        </p>
        <div className="feature-grid">
          <div className="feature">
            <div className="feature-content">
              <span className="feature-icon">🔍</span>
              <h3>Intelligent Search</h3>
              <p>Find anything instantly with our powerful AI-enhanced search capabilities.</p>
            </div>
            <img src={featureImage} alt="Intelligent Search" className="feature-image" />
          </div>
          <div className="feature">
            <div className="feature-content">
              <span className="feature-icon">📊</span>
              <h3>Advanced Analytics</h3>
              <p>Gain valuable insights with comprehensive data visualization and reporting tools.</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-content">
              <span className="feature-icon">🔗</span>
              <h3>Seamless Integration</h3>
              <p>Connect with your favorite tools and services for a streamlined workflow.</p>
            </div>
          </div>
        </div>
        <Link to="#features" className="features-button">
          Features
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>Our Journey</h2>
        <p className="section-tagline">
          The story behind our project and the team that made it happen
        </p>
        <div className="about-content">
          <div className="about-text">
            <div className="about-item">
              <span className="about-icon">💡</span>
              <div>
                <h3>What Inspired This Project</h3>
                <p>
                This project was inspired by the need to streamline insurance policy tracking for improved efficiency and accuracy. By automating policy status updates and presenting data through an intuitive dashboard, the system aims to enhance decision-making for underwriters.
                </p>
              </div>
            </div>
            <div className="about-item">
              <span className="about-icon">⏳</span>
              <div>
                <h3>The Development</h3>
                <p>
                Our insurance policy tracking system was built with precision and efficiency in mind. This project was developed as a Portfolio Project for <a href="https://www.alxafrica.com" target="_blank" rel="noopener noreferrer">ALX</a>.
                </p>
              </div>
            </div>
            <div className="about-item">
              <span className="about-icon">👥</span>
              <div>
                <h3>The Vision</h3>
                <p>
                  The goal is to reduce manual effort, minimize errors, and provide real-time insights, ensuring a seamless experience for both insurers and clients.
                </p>
              </div>
            </div>
          </div>
          <img src={aboutImage} alt="Team Collaboration" className="about-image" />
        </div>
        <h2 className="team-heading">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-placeholder"></div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-links">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="LinkedIn" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <img src={twitterIcon} alt="Twitter" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <a href="https://www.alxafrica.com" target="_blank" rel="noopener noreferrer" className="portfolio-button">
          Portfolio Project
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ProjectName</h3>
            <p>
              Transform the way you work with our revolutionary solution. Built with care and attention to detail.
            </p>
            <div className="social-icons">
              <a href="https://github.com/fkbyjosh/myproject" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://twitter.com/projectname" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="mailto:contact@projectname.com">
                <img src={emailIcon} alt="Email" />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="#features">Features</Link>
              </li>
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <a href="https://github.com/username/myproject" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-bottom">
          © 2025 Policy Data Management System. All rights reserved. A Portfolio Project for <a href="https://www.alxafrica.com" target="_blank" rel="noopener noreferrer">ALX</a>.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;