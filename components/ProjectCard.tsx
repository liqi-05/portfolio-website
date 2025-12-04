import React from 'react';
import { Project } from '../types';
import { Github, Star, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-cute-pink h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-cute-cream rounded-xl text-cute-dark group-hover:bg-cute-beige transition-colors">
            <Github className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-1 text-amber-400 bg-amber-50 px-2 py-1 rounded-full text-xs font-bold">
            <Star className="w-3 h-3 fill-current" />
            {project.stars}
        </div>
      </div>
      
      <h3 className="text-xl font-fredoka font-bold mb-2 text-cute-text">{project.title}</h3>
      <p className="text-cute-text/70 text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
            <span key={tag} className="text-xs font-bold px-3 py-1 bg-cute-pink/30 text-cute-text rounded-full">
                #{tag}
            </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 py-2 rounded-xl border-2 border-cute-dark text-cute-dark font-bold text-center hover:bg-cute-dark hover:text-white transition-all text-sm flex items-center justify-center gap-2"
        >
            <Github className="w-4 h-4" /> Code
        </a>
        {project.demoUrl && (
            <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-cute-beige text-cute-text font-bold text-center hover:brightness-95 transition-all text-sm flex items-center justify-center gap-2"
            >
                <ExternalLink className="w-4 h-4" /> Demo
            </a>
        )}
      </div>
    </div>
  );
};
