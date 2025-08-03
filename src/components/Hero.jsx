import React from 'react';
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';

import video1 from '../assets/video/highlight-first.mp4';
import video2 from '../assets/video/explore.mp4';
import video3 from '../assets/video/highlight-third.mp4';
import video4 from '../assets/video/highlight-fourth.mp4';
import video5 from '../assets/video/frame.mp4';


const videos = [
  {
    src: video1,
    className: 'card-1',
    title: [
      'Enter A17 Pro.',
      'Game‑changing chip.',
      'Groundbreaking performance.',
    ],
  },
  {
    src: video2,
    className: 'card-2',
    title: ['Forged in titanium.'],
  },
  {
    src: video3,
    className: 'card-3',
    title: ['Titanium: Ultra-strong.', 'Feather-light.', 'Pure Pro.'],
  },
  {
    src: video4,
    className: 'card-4',
    title: ['All-new Action Button.', 'Customize your control.'],
  },
  {
    src: video5,
    className: 'card-5',
    title: ['A new level in gaming.', 'Unmatched power.'],
  },
];


export default function Hero() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="video-grid">
        {videos.map((vid, idx) => (
          <VideoCard key={idx} src={vid.src} title={vid.title} className={vid.className} />
        ))}
      </main>
    </div>
  );
}
