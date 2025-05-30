import React from "react";
import "../styles/ResumePage.css";
function ResumePage() {
  return (
    <div className="resume-bg-center">
      <div className="resume-page-wrapper">
        <div className="container">
          {/* Header */}
          <header className="header">
            <h1 className="name">SREESHANTH KANADGATLA</h1>
            <p className="title">STUDENT</p>
            <div className="contact-info">
              <span>+91 9676128450</span>
              <a href="mailto:sreeshanthkandagatla2005@gmail.com" className="contact-item">
                sreeshanthkandagatla2005@gmail.com
              </a>
              <a href="#" className="contact-item">Github</a>
              <a href="#" className="contact-item">LeetCode</a>
              <a href="#" className="contact-item">HackerRank</a>
              <a href="#" className="contact-item">Portfolio</a>
              <a href="#" className="contact-item">Linkedin</a>
            </div>
          </header>

          {/* Internships */}
          <section className="section">
            <h2 className="section-title">Internships</h2>
            <div>
              <div className="company">Intrainz online web development internship</div>
              <div className="duration">May – July 2023</div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                Built responsive webapps using HTML, CSS, and JavaScript
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                Designed user-friendly and visually appealing website interfaces
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                Implemented responsive design principles to ensure optimal user experience across devices
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="section">
            <h2 className="section-title">Education</h2>
            <table className="table">
              <thead>
                <tr>
                  <th className="table-header">Institution</th>
                  <th className="table-header">Duration</th>
                  <th className="table-header">Qualification & Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-cell">Anurag University, Hyderabad</td>
                  <td className="table-cell">2022 - 2026</td>
                  <td className="table-cell">B.Tech in CSE, CGPA: 9.18 (5th semester)</td>
                </tr>
                <tr>
                  <td className="table-cell">Jawahar Navodaya Vidyalaya, Rangareddy</td>
                  <td className="table-cell">2020 - 2022</td>
                  <td className="table-cell">11th-12th (PCM), 86.2% (12th CBSE board)</td>
                </tr>
                <tr>
                  <td className="table-cell">Jawahar Navodaya Vidyalaya, Warangal</td>
                  <td className="table-cell">2015 - 2020</td>
                  <td className="table-cell">6th-10th, 93% (10th CBSE board)</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Technical Skills */}
          <section className="section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-list">
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>Programming Languages:</strong> C, Python, Java, JavaScript
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>Full-Stack Development:</strong> MERN Stack; Java with Spring Boot
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>Front-End Development:</strong> HTML, CSS, Bootstrap, ReactJS
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>Back-End Development:</strong> NodeJS, ExpressJS
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>Databases:</strong> MySQL, MongoDB
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>DevOps & Version Control:</strong> Git, GitHub
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>Design Tools:</strong> AutoCAD
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>Operating Systems:</strong> Linux
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>Core Competencies:</strong> Data Structures & Algorithms
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>Cloud:</strong> google cloud platform, AWS
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>Data analytics and Visualization:</strong> Python (NumPy, Pandas, Seaborn, Matplotlib)
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                <strong>Machine learning</strong>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="section">
            <h2 className="section-title">Projects</h2>
            
            <div style={{marginBottom: '20px'}}>
              <div className="project-title">
                AuConnect – Organizational Networking Platform
                <a href="#" className="project-link">Github-AuConnect</a>
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                Developed a scalable social networking platform to enhance communication and collaboration among students and faculty along with a student marketplace for freelancing.
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                Engineered the backend using Spring Boot, Hibernate, and MySQL for robust data persistence, and implemented secure authentication with Spring Security and JWT.
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                Created a dynamic frontend with React, featuring user authentication, profile management, file uploads, messaging, and connection management.
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                Integrated Gmail for email services, supported large file uploads, and ensured scalability by containerizing the application using Docker and deploying it on AWS.
              </div>
            </div>

            <div>
              <div className="project-title">
                Credit card customer Segmentation using K-Means Clustering
                <a href="#" className="project-link">Github-customerSegmentation</a>
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                Implemented a K-Means clustering model to segment customers using credit card data.
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                Performed data preprocessing and feature engineering with Python (pandas, numpy, scikit-learn).
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                Extracted actionable insights to support targeted marketing strategies.
              </div>
              <div className="bullet-point">
                <span className="bullet">•</span>
                Documented the project workflow in a comprehensive Jupyter Notebook.
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="section">
            <h2 className="section-title">Certifications</h2>
            <div className="certification-item">
              <span className="bullet">•</span>
              Certificate of Completion the complete 2023 web development bootcamp Udemy
            </div>
            <div className="certification-item">
              <span className="bullet">•</span>
              Certificate of industrial training and internship Intrainz
            </div>
            <div className="certification-item">
              <span className="bullet">•</span>
              Data analytics and Visualization job simulation Accenture
            </div>
            <div className="certification-item">
              <span className="bullet">•</span>
              Prompt design in vertex AI skill badge
            </div>
            <div className="certification-item">
              <span className="bullet">•</span>
              Google Cloud Data Analytics Certificate
            </div>
            <div className="certification-item">
              <span className="bullet">•</span>
              Infosys springboard certifications( machine learning, java, design thinking, big data, cyber security, cloud computing)
            </div>
            <div className="certification-item">
              <span className="bullet">•</span>
              Participated in 3 hackathons
            </div>
          </section>
        </div>
        <div className="resume-download-svg">
          <a href="/resume.pdf" download>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;