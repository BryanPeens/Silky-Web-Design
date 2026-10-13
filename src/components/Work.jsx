import React from 'react';
import Card from './Card';
import banana from '../assets/Banana.png';
import threeShirt from '../assets/threeShirt.png';
import summarizer from '../assets/summarizer.png';
import workImg1 from '../assets/workImg1.png';
import silky from '../assets/silky.png';
import spacetagram from '../assets/spacetagram.png';
import rebelStore from '../assets/RebelStore.png';
import bridging from '../assets/BridgingTheCanyon.png';
import empTracker from '../assets/EmpTracker.png';
import devsMind from '../assets/DevsMind.png';
import taskBoard from '../assets/TaskBoard.png';
import weatherDash from '../assets/WeatherDash.png';
import motionTracker from '../assets/MotionTracker.png';
import nutrisprout from '../assets/nutrisprout.png';

const projects = [
  ['NutriSprout', nutrisprout, 'https://nutrisprout.onrender.com/', '#'],
  ['Rebel Ecommerce', rebelStore, 'https://rebel-store-sanity.vercel.app', 'https://github.com/BryanPeens/rebel_store_sanity'],
  ['A Devs Mind', devsMind, 'https://bryanpeens.github.io/personal-blog/index.html', 'https://github.com/BryanPeens/personal-blog'],
  ['Bridging The Canyon', bridging, 'https://bridging-the-canyon-blog.vercel.app', 'https://github.com/BryanPeens/btc-blog'],
  ['Three Shirt Designer', threeShirt, 'https://threejs-ai-client.onrender.com', 'https://github.com/BryanPeens/threejs_ai'],
  ['AI Article Summarizer', summarizer, 'https://ornate-selkie-56d420.netlify.app', 'https://github.com/BryanPeens/Ai_Summarizer'],
  ['React Weather App', workImg1, 'https://bryanpeens.github.io/weather-app-react', 'https://github.com/BryanPeens/weather-app-react'],
  ['Silky Studio', silky, 'https://bryanpeens.github.io/Silky-Web-Design', 'https://github.com/BryanPeens/Silky-Web-Design'],
  ['Polaris Application', spacetagram, 'https://bryanpeens.github.io/spacetagram', 'https://github.com/BryanPeens/spacetagram'],
  ['Banana Creative', banana, 'https://dall-e-creator-client.onrender.com', 'https://github.com/BryanPeens/dalle-e-creator'],
  ['Employee Tracker', empTracker, 'https://bryanpeens.github.io/employee-payroll-tracker', 'https://github.com/BryanPeens/employee-payroll-tracker'],
  ['Task Board', taskBoard, 'https://bryanpeens.github.io/task-manager', 'https://github.com/BryanPeens/task-manager'],
  ['Weather Dashboard', weatherDash, 'https://bryanpeens.github.io/weather-dashboard', 'https://github.com/BryanPeens/weather-dashboard'],
  ['AI Motion Tracker', motionTracker, 'https://ai-motion-tracker.onrender.com', 'https://github.com/BryanPeens/Motion-Tracker'],
];

const Work = () => (
  <section id="work" className="work">
    <div className="section-wrap">
      <p className="eyebrow">Selected work</p>
      <h2 className="section-heading display">Useful things,<br />made beautifully.</h2>
      <div className="work-grid">
        {projects.map(([title, image, demoLink, codeLink]) => <Card key={title} title={title} image={image} demoLink={demoLink} codeLink={codeLink} />)}
      </div>
    </div>
  </section>
);

export default Work;