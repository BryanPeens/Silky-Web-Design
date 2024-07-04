import React from "react";
import Card from "../components/Card";

import banana from "../assets/Banana.png";
import threeShirt from "../assets/threeShirt.png";
import summarizer from "../assets/summarizer.png";
import workImg1 from "../assets/workImg1.png";
import silky from "../assets/silky.png";
import spacetagram from "../assets/spacetagram.png";
import rebelStore from "../assets/RebelStore.png";
import bridging from "../assets/BridgingTheCanyon.png";
import empTracker from "../assets/EmpTracker.png";
import devsMind from "../assets/DevsMind.png";
import taskBoard from "../assets/TaskBoard.png";
import weatherDash from "../assets/WeatherDash.png";
import motionTracker from "../assets/MotionTracker.png";
import nutrisprout from "../assets/nutrisprout.png";

const Work = () => {
  const projects = [
    {
      title: "NutriSprout",
      image: nutrisprout,
      demoLink: "https://nutrisprout.onrender.com/",
      codeLink: "#",
    },
    {
      title: "Rebel Ecommerce",
      image: rebelStore,
      demoLink: "https://rebel-store-sanity.vercel.app",
      codeLink: "https://github.com/BryanPeens/rebel_store_sanity",
    },
    {
      title: "A Devs Mind",
      image: devsMind,
      demoLink: "https://bryanpeens.github.io/personal-blog/index.html",
      codeLink: "https://github.com/BryanPeens/personal-blog",
    },
    {
      title: "Bridging The Canyon",
      image: bridging,
      demoLink: "https://bridging-the-canyon-blog.vercel.app",
      codeLink: "https://github.com/BryanPeens/btc-blog",
    },
    {
      title: "Three Shirt Designer",
      image: threeShirt,
      demoLink: "https://threejs-ai-client.onrender.com",
      codeLink: "https://github.com/BryanPeens/threejs_ai",
    },
    {
      title: "AI Article Summarizer",
      image: summarizer,
      demoLink: "https://ornate-selkie-56d420.netlify.app",
      codeLink: "https://github.com/BryanPeens/Ai_Summarizer",
    },
    {
      title: "React Weather App",
      image: workImg1,
      demoLink: "https://bryanpeens.github.io/weather-app-react",
      codeLink: "https://github.com/BryanPeens/weather-app-react",
    },
    {
      title: "React JS Application",
      image: silky,
      demoLink: "https://bryanpeens.github.io/Silky-Web-Design",
      codeLink: "https://github.com/BryanPeens/Silky-Web-Design",
    },
    {
      title: "Polaris Application",
      image: spacetagram,
      demoLink: "https://bryanpeens.github.io/spacetagram",
      codeLink: "https://github.com/BryanPeens/spacetagram",
    },
    {
      title: "Banana Creative",
      image: banana,
      demoLink: "https://dall-e-creator-client.onrender.com",
      codeLink: "https://github.com/BryanPeens/dalle-e-creator",
    },
    {
      title: "Employee Tracker",
      image: empTracker,
      demoLink: "https://bryanpeens.github.io/employee-payroll-tracker",
      codeLink: "https://github.com/BryanPeens/employee-payroll-tracker",
    },
    {
      title: "Task Board",
      image: taskBoard,
      demoLink: "https://bryanpeens.github.io/task-manager",
      codeLink: "https://github.com/BryanPeens/task-manager",
    },
    {
      title: "Weather Dashboard",
      image: weatherDash,
      demoLink: "https://bryanpeens.github.io/weather-dashboard",
      codeLink: "https://github.com/BryanPeens/weather-dashboard",
    },
    {
      title: "AI Motion Tracker",
      image: motionTracker,
      demoLink: "https://ai-motion-tracker.onrender.com",
      codeLink: "https://github.com/BryanPeens/Motion-Tracker",
    },
  ];

  return (
    <div id="work" className="w-full min-h-screen py-20 md:py-40">
      <div className="max-w-[1000px] mx-auto p-4 cursor-pointer">
        <div className="pb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold inline border-b-4 border-red-800 text-center text-gradient">
            Some Projects
          </h2>
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} title={project.title} image={project.image} demoLink={project.demoLink} codeLink={project.codeLink} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

const skeuomorphicButtonGreenCSS = `
  .skeuomorphic-button-green {
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #6CB776, #4B9D6F, #3C8962); /* Greenish gradient */
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: bold;
    transition: transform 0.2s, background 0.3s;
    color: white;
  }
  .skeuomorphic-button-green:hover {
    background: linear-gradient(to right, #4B9D6F, #3C8962, #6CB776); /* Adjusted hover gradient */
    transform: scale(1.05);
  }
  .skeuomorphic-button-green:active {
    box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.2), inset -3px -3px 8px rgba(255, 255, 255, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.2);
    transform: scale(0.95);
  }
`;

// Inject CSS styles for the green button
const styleSheetGreen = document.createElement("style");
styleSheetGreen.type = "text/css";
styleSheetGreen.innerText = skeuomorphicButtonGreenCSS;
document.head.appendChild(styleSheetGreen);

