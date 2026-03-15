import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Play, ExternalLink, Github, Image, Code, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/* ---------------- VIDEO PROJECTS ---------------- */

const videoProjects = [
{
title: "Batch-Man Programming Tutorials",
category: "Educational Content",
thumbnail: "/batchh.png",
videoFile: "/11.mp4",
instagramUrl: "https://www.instagram.com/batchmanofficial/",
description:
"Edited multiple technical programming tutorials for Batch-Man, transforming complex coding concepts into engaging educational content.",
},
{
title: "Traikare Brand Content",
category: "Commercial",
thumbnail: "/traikare.png",
videoFile: "/3.mp4",
instagramUrl: "https://www.instagram.com/reel/DAvtQy7pRYK/",
description:
"Created promotional videos for Traikare focusing on brand storytelling and engaging social media campaigns.",
},
{
title: "GDG Community Event Highlights",
category: "Community",
thumbnail: "/gdg.png",
videoFile: "/gdgg.mp4",
instagramUrl: "https://www.instagram.com/reel/DBJehA_y5PO/",
description:
"Produced event highlight videos and promotional reels for developer community activities.",
},
{
title: "YouTube Educational Videos",
category: "YouTube Content",
thumbnail: "/youtube.png",
videoFile: "/7 (1).mp4",
instagramUrl: "https://www.instagram.com/nishant.chauhan20/",
description:
"Edited educational YouTube content covering web development tutorials and tech productivity content.",
},
{
title: "Social Media Reels & Shorts",
category: "Social Media",
thumbnail: "/reels.png",
videoFile: "/2.mp4",
instagramUrl: "https://www.instagram.com/reel/DEFQb6kzSg-/",
description:
"Created short-form vertical content optimized for Instagram Reels and YouTube Shorts.",
},
{
title: "Client Promotional Videos",
category: "Freelance",
thumbnail: "/client.png",
videoFile: "/4.mp4",
instagramUrl: "https://www.instagram.com/reel/DEAOYEUyOGq/",
description:
"Produced promotional videos for freelance clients including startups and service-based businesses.",
},
];

/* ---------------- DESIGN PROJECTS ---------------- */

const designProjects = [
{
title: "GDG Community Branding",
category: "Social Media Design",
thumbnail: "/gdg1.png",
description:
"Designed promotional graphics, event posters, and social media creatives for Google Developer Groups community events.",
},
{
title: "A-sonne Creatives",
category: "Brand Marketing",
thumbnail: "/A-sonne.png",
description:
"Created engaging social media graphics and promotional posts for A-sonne.",
},
{
title: "Startup Promotional Graphics",
category: "Digital Marketing",
thumbnail: "/startups.png",
description:
"Designed marketing creatives including Instagram posts and banners.",
},
{
title: "Batch-Man Educational Graphics",
category: "Educational Design",
thumbnail: "/batch.png",
description:
"Created educational visual graphics for programming tutorials.",
},
{
title: "YouTube Thumbnails & Channel Graphics",
category: "Content Design",
thumbnail: "/thumb.jpg",
description:
"Designed eye-catching YouTube thumbnails and banners.",
},
{
title: "Event Posters & Campaign Designs",
category: "Event Design",
thumbnail: "/event.png",
description:
"Designed posters and promotional materials for college events.",
},
];

/* ---------------- WEB PROJECTS ---------------- */

const webProjects = [

{
title: "BioLoop – Sustainable Crop Residue Solution",
category: "Web Application",
thumbnail: "/bioloop.jpg",
description:
"BioLoop is a sustainable digital platform focused on solving crop residue and stubble burning issues through awareness and technology-driven solutions that promote eco-friendly farming practices.",
tech: ["React.js", "Tailwind CSS", "JavaScript", "Environmental Tech"],
liveUrl: "https://bio-loop-cleaner-air-smarter-crop-r.vercel.app/",
githubUrl: "https://github.com/treeHouse2023/BioLoop---Cleaner-air-Smarter-crop-residue-solutions",
},

{
title: "Learnify – Academic Resource Platform",
category: "Full Stack",
thumbnail: "/learnify.png",
description:
"Learnify is a student-driven platform that allows users to upload, search, and download academic resources like question papers and study notes, making learning collaborative and accessible.",
tech: ["React.js", "Node.js", "Express", "MongoDB", "Multer", "Tailwind CSS"],
liveUrl: "https://learnify-kohl.vercel.app/",
githubUrl: "https://github.com/treeHouse2023/Learnify",
},

{
title: "News Hub – Real-Time News Website",
category: "Web App",
thumbnail: "/news.jpg",
description:
"A responsive news platform powered by News API providing real-time news updates with category filtering, search functionality, and light/dark mode.",
tech: ["HTML", "CSS", "JavaScript", "News API"],
liveUrl: "https://www.youtube.com/watch?v=NAR2etr9PZs",
githubUrl: "https://github.com/treeHouse2023/News-App-",
},

{
title: "BlogNest – Blogging Platform",
category: "Full Stack",
thumbnail: "/blog.png",
description:
"A modern blogging platform with CRUD functionality allowing users to create, edit, and manage blog posts with a responsive dashboard and smooth UI.",
tech: ["React.js", "Tailwind CSS", "Bootstrap", "JSON Server"],
liveUrl: "https://blog-nest-share-your-thoughts-ideas.vercel.app/",
githubUrl: "https://github.com/treeHouse2023/BlogNest---Share-your-thoughts-ideas",
},

{
title: "Focused YouTube – Productivity Chrome Extension",
category: "Chrome Extension",
thumbnail: "/focus.jpg",
description:
"A Chrome extension that blocks distracting YouTube recommendations and limits visible suggestions to help users stay focused while studying or working.",
tech: ["JavaScript", "HTML", "CSS", "Chrome Extension API"],
liveUrl: "https://www.youtube.com/watch?v=MRY-jpavGUY ",
githubUrl: "https://github.com/treeHouse2023/FocusedTube---A-Distraction-Free-YouTube-Experience",
},

{
title: "Aahar – Tiffin Service Website",
category: "Frontend",
thumbnail: "/aahar.png",
description:
"A clean and user-friendly website built for a local tiffin service, allowing customers to explore subscription plans, weekly menus, and ordering options.",
tech: ["HTML", "CSS", "JavaScript"],
liveUrl: "https://treehouse2023.github.io/Aahar---The-Prominent-Tiffin-Service/",
githubUrl: "https://github.com/treeHouse2023/Aahar---The-Prominent-Tiffin-Service",
},

{
title: "A.R Foods – Premium Café & Culinary Solutions",
category: "Client Project",
thumbnail: "/ar foods.png",
description:
"A professional website developed for A.R Foods, a premium café and culinary solutions brand. The project focused on clean UI design and presenting café services and offerings online.",
tech: ["React.js", "Tailwind CSS", "UI Design"],
liveUrl: "https://a-r-services.vercel.app/",
githubUrl: null,
},

];

/* ---------------- PROJECT CARD ---------------- */

function ProjectCard({ project, type, index }) {

const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: '-50px' });
const [isHovered, setIsHovered] = useState(false);

const isWebProject = type === 'web' && 'tech' in project;

return (

<motion.div
ref={ref}
initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.5, delay: index * 0.1 }}
className="group relative"
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
>

<div className="glass rounded-xl overflow-hidden card-interactive">

{/* MEDIA */}

<div className={`relative overflow-hidden ${type === "video" ? "aspect-[9/16]" : "aspect-[3/2]"}`}>

{type === "video" ? (

<video
src={project.videoFile}
className="w-full h-full object-cover"
autoPlay
muted
loop
playsInline
/>

) : (

<img
src={project.thumbnail}
alt={project.title}
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>

)}

{/* OVERLAY */}

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: isHovered ? 1 : 0 }}
className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex items-center justify-center"
>

{type === 'video' && (

<a
href={project.instagramUrl}
target="_blank"
rel="noopener noreferrer"
>

<motion.div
initial={{ scale: 0 }}
animate={{ scale: isHovered ? 1 : 0 }}
className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-primary"
>

<Play className="w-6 h-6 text-primary-foreground ml-1"/>

</motion.div>

</a>

)}

{isWebProject && (

<div className="flex gap-3">

<a href={project.liveUrl} target="_blank">

<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
<ExternalLink className="w-5 h-5 text-white"/>
</div>

</a>

<a href={project.githubUrl} target="_blank">

<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
<Github className="w-5 h-5 text-white"/>
</div>

</a>

</div>

)}

</motion.div>

{/* CATEGORY */}

<div className="absolute top-4 left-4">

<span className="px-3 py-1 text-body-sm bg-background/80 backdrop-blur-sm rounded-full">

{project.category}

</span>

</div>

</div>

{/* CONTENT */}

<div className="p-5">

<h3 className="text-heading-md mb-2">{project.title}</h3>

<p className="text-muted-foreground text-body-sm mb-3">

{project.description}

</p>

{isWebProject && (

<div className="flex flex-wrap gap-2">

{project.tech.map((tech) => (

<span
key={tech}
className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
>

{tech}

</span>

))}

</div>

)}

</div>

</div>

</motion.div>

);

}

/* ---------------- PORTFOLIO SECTION ---------------- */

export function PortfolioSection() {

const headerRef = useRef(null);
const isHeaderInView = useInView(headerRef, { once: true });

return (

<section id="work" className="section-padding bg-surface-elevated">

<div className="container mx-auto px-4">

<motion.div
ref={headerRef}
initial={{ opacity: 0, y: 30 }}
animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6 }}
className="text-center mb-12"
>

<span className="text-primary text-body-sm font-semibold uppercase tracking-wider">

Portfolio

</span>

<h2 className="text-display-sm md:text-display-md font-display mt-2 mb-4">

Featured <span className="text-gradient">Work</span>

</h2>

<p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">

A selection of projects that showcase my skills and passion for creating impactful digital experiences.

</p>

</motion.div>

<Tabs defaultValue="video" className="w-full">

<TabsList className="w-full justify-center mb-12 bg-transparent gap-2">

<TabsTrigger value="video">
<Video className="w-4 h-4"/> Video Editing
</TabsTrigger>

<TabsTrigger value="design">
<Image className="w-4 h-4"/> Graphic Design
</TabsTrigger>

<TabsTrigger value="web">
<Code className="w-4 h-4"/> Web Development
</TabsTrigger>

</TabsList>

<TabsContent value="video">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{videoProjects.map((project, index) => (

<ProjectCard key={project.title} project={project} type="video" index={index}/>

))}

</div>

</TabsContent>

<TabsContent value="design">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{designProjects.map((project, index) => (

<ProjectCard key={project.title} project={project} type="design" index={index}/>

))}

</div>

</TabsContent>

<TabsContent value="web">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{webProjects.map((project, index) => (

<ProjectCard key={project.title} project={project} type="web" index={index}/>

))}

</div>

</TabsContent>

</Tabs>

<div className="text-center mt-12">

<Button variant="outline" size="lg" asChild>

<a href="#contact">

Have a Project? Let's Talk

</a>

</Button>

</div>

</div>

</section>

);

}