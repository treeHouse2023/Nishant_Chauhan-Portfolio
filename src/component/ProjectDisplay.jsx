import React, { useEffect, useState, useRef } from 'react';
import './ProjectDisplay.css'; 

const projectData = [
  {
    projectName: 'Learnify',
    projectImg: 'learn.png',
    creatorName: 'Learnify : Streamlining Access to Academic Resources',
    livePreview: 'https://learnify-kohl.vercel.app/',
    sourceCode: 'https://github.com/treeHouse2023/Learnify',
    skills: 'React.js, JavaScript, Tailwind CSS, HTML, Git, GitHub, Vercel, Bootstrap ',
    description: 'A student-driven platform built with React.js, offering easy access to academic resources like notes and question papers. It supports content contributions and has a responsive design.',
  },
  {
    projectName: 'FocusedTube',
    projectImg: 'yt.png',
    creatorName: 'Focused YouTube : Chrome Extension',
    livePreview: 'https://www.youtube.com/watch?v=MRY-jpavGUY',
    sourceCode: 'https://github.com/treeHouse2023/FocusedTube---A-Distraction-Free-YouTube-Experience',
    skills: 'JavaScript, HTML, CSS, Chrome Extensions, GitHub',
    description: 'A Chrome extension designed to reduce distractions by limiting recommended videos on YouTube. Users can reveal all suggestions via the "Show All Videos" button.',
  },
  {
    projectName: 'BlogNest',
    projectImg: 'blog.png',
    creatorName: 'BlogNest : Share your Thoughts Into Ideas',
    livePreview: 'https://blog-nest-share-your-thoughts-ideas.vercel.app/',
    sourceCode: 'https://github.com/treeHouse2023/BlogNest---Share-your-thoughts-ideas',
    skills: 'React.js, Tailwind CSS, Bootstrap, JavaScript, JSON Server, Git, GitHub, Vercel' ,
    description: 'A dynamic blogging platform built with React JS, Tailwind CSS, and Bootstrap, featuring full CRUD functionality for managing blog posts. It has a responsive design and user-friendly dashboard, deployed on Vercel for fast access.',
  },
  {
    projectName: 'News Website',
    projectImg: 'news.png',
    creatorName: 'Your Daily Dose of News : Categories in General, Business, Sports, and Technology!',
    livePreview: 'https://www.youtube.com/watch?v=NAR2etr9PZs',
    sourceCode: 'https://github.com/treeHouse2023/News-App-',
    skills: 'HTML, CSS,JavaScript,Git, GitHub',
    description: 'Fetches and displays news articles by category (General, Business, Sports, Technology) with images and descriptions. Features responsive design, keyword search, and light/dark mode for improved user experience.',
  },
  {
    projectName: 'Aahar',
    projectImg: '/aahar.png',
    creatorName: 'A Tiffin Service Website with Elegant UI/UX for Easy Subscriptions and Orders!',
    livePreview: 'https://treehouse2023.github.io/Aahar---The-Prominent-Tiffin-Service/',
    sourceCode: 'https://github.com/treeHouse2023/Aahar---The-Prominent-Tiffin-Service',
    skills: 'HTML, CSS, JavaScript,Canva.',
    description: 'A website for a tiffin service with a clean UI/UX, showcasing subscription plans, menus, and order options for users.',
  }
  
  
];

const ProjectDisplay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <div className="project-section" ref={projectRef}>
      <h2 className="project-heading">My Projects</h2>
      <p className="project-subheading">Recent Works</p>
      <div className={`project-list ${isVisible ? 'fade-in' : ''}`}>
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.projectImg}
              alt={`${project.projectName} project`}
              className="project-img"
            />
            <h2 className="project-name">{project.projectName}</h2>
            <p className="creator-name">{project.creatorName}</p>
            <p className="project-description">{project.description}</p> {/* Short Description */}
            <p className="project-skills">Skills: {project.skills}</p> {/* Skills List */}
            <div className="project-buttons">
              <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="btn-live-preview">
                Live Preview
              </a>
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn-source-code">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDisplay;
