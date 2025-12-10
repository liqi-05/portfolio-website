import React from 'react';
import { Project } from '../types';
import { Github, Star, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-[3rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-8 border-r-8 border-cute-cream hover:border-cute-pink-dark h-full flex flex-col relative overflow-hidden">
      
      {/* Decorative circle */}
      <div className="absolute -right-8 -top-8 w-28 h-28 bg-cute-cream rounded-full opacity-50 group-hover:bg-cute-pink/20 transition-colors"></div>

      <div className="flex justify-between items-start mb-5 relative z-10">
        <div className="p-3 bg-cute-cream rounded-2xl text-cute-dark group-hover:bg-cute-pink-dark group-hover:text-white transition-colors">
            <Github className="w-6 h-6" />
        </div>
      </div>
      
      <h3 className="text-xl font-fredoka font-bold mb-3 text-cute-text group-hover:text-cute-pink-dark transition-colors">{project.title}</h3>
      <p className="text-cute-text/70 text-sm mb-6 flex-grow leading-relaxed font-medium">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
            <span key={tag} className="text-xs font-bold px-3 py-1.5 bg-gray-50 text-cute-text/70 rounded-lg border border-gray-100">
                #{tag}
            </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto relative z-10">
        <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-xl bg-cute-text text-white font-bold text-center hover:bg-cute-dark hover:scale-105 transition-all text-xs flex items-center justify-center gap-2 shadow-sm"
        >
            <Github className="w-3.5 h-3.5" /> Code
        </a>
        {project.demoUrl && (
            <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-cute-pink-light text-cute-text font-bold text-center hover:bg-cute-dark hover:text-white hover:scale-105 transition-all text-xs flex items-center justify-center gap-2 shadow-sm"
            >
                <ExternalLink className="w-3.5 h-3.5" /> Demo
            </a>
        )}
      </div>
    </div>
  );
};