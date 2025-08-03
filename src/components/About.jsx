import React from 'react';
import Sidebar from './Sidebar';

export default function About() {
  return (
    <div className="about-page">
        <Sidebar />
      <div className="about-content">
        <h1>Inspired by Innovation</h1>
        <p>
          This project is a creative showcase inspired by Apple’s iconic product storytelling —
          from the power of the A17 Pro chip to the elegance of titanium design. Each scene
          pays homage to the visual style and minimalism that defines modern tech excellence.
        </p>
        <p>
          Built entirely with React, HTML5 video, and CSS animations. Designed and developed by <br /><strong>Basit Tijani</strong>.
        </p>
        <a
          href="https://github.com/tijani-web/apple-flow.git"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          View Source on GitHub
        </a>
      </div>
    </div>
  );
}
