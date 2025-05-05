import React from 'react';
import { ExternalLink, Github, Newspaper, Code } from 'lucide-react';

const ProjectsCard = () => {
  const projects = [
    {
      name: 'PaynPoint',
      url: 'https://paynpoint.net',
      icon: <ExternalLink size={16} />,
      description: 'Monetize bot traffic on your website'
    },
    {
      name: 'Paynless',
      url: 'https://paynless.app',
      icon: <ExternalLink size={16} />,
      description: 'SaaS boilerplate'
    },
    {
      name: 'PassUp',
      url: 'https://passup.xyz',
      icon: <ExternalLink size={16} />,
      description: 'Chrome Password generator & storage'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@timsylvester',
      icon: <Newspaper size={16} />,
      description: 'Articles and blog posts'
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.com/timsylvester.com',
      icon: <ExternalLink size={16} />,
      description: 'Social media profile'
    },
    {
      name: 'Portfolio',
      url: 'https://timsylvester.com',
      icon: <Code size={16} />,
      description: 'Personal developer website'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/tsylvester',
      icon: <Github size={16} />,
      description: 'Selected repos'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4"></h2>
      <p className="text-gray-600 mb-6 text-sm">
        Check out my other projects and platforms
      </p>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-3 rounded-lg transition-all hover:bg-indigo-50 group"
          >
            <div className="mr-3 text-gray-500 group-hover:text-indigo-600">
              {project.icon}
            </div>
            <div>
              <h3 className="text-gray-700 font-medium group-hover:text-indigo-700">
                {project.name}
              </h3>
              <p className="text-xs text-gray-500">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
