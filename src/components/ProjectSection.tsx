import React from 'react'
import ProjectCard from './ProjectCard'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   imgUrl: string;
//   tags: string[];
//   gitUrl: string;
//   previewUrl: string;
// }

const projectsData : Project[] = [
  {
    id: 1,
    title: "Resume Builder",
    description: "Project 1 description",
    image: "/project-1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Simple Website",
    description: "Project 2 description",
    image: "/project-2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/project-3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];


const ProjectSection = () => {
  return (
    <div id="projects">
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
       My Projects
      </h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project)=> <ProjectCard key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image} 
        // tags={project.tag} 
        // gitUrl={project.gitUrl} 
        // previewUrl={project.previewUrl}
        />)}
      </div>
      </div>
  )
}

export default ProjectSection

