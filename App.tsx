import React, { useState } from 'react';
import { IconGenerator } from './components/IconGenerator';
import { ProjectCard } from './components/ProjectCard';
import { Project, SkillCategory, EducationItem, ExperienceItem, CertificateItem } from './types';
import { 
  Github, 
  Mail, 
  Code2, 
  Globe, 
  Palette, 
  Linkedin, 
  Phone, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Database, 
  Terminal, 
  Layout, 
  Users, 
  Sprout 
} from 'lucide-react';

// --- RESUME DATA ---

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Library Management System',
    description: 'Created a book borrowing and inventory system using C and file handling. Managed book records with structured data storage.',
    tags: ['C', 'File Handling', 'Data Structures'],
    repoUrl: 'https://github.com/lq-05'
  },
  {
    id: '2',
    title: 'Purchase Order Management System',
    description: 'Developed an automated PO system using Java and Swing. Handled purchase requests and file-based data storage.',
    tags: ['Java', 'Swing', 'Automation'],
    repoUrl: 'https://github.com/lq-05'
  }
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: <Terminal className="w-5 h-5" />,
    skills: ['Python', 'C/C++', 'C#', 'Java', 'HTML', 'CSS', 'JavaScript', 'TASM', 'NASM (x86 Assembly)']
  },
  {
    title: 'Analytics & Data',
    icon: <Database className="w-5 h-5" />,
    skills: ['PostgreSQL', 'R']
  },
  {
    title: 'Technologies & Tools',
    icon: <Code2 className="w-5 h-5" />,
    skills: ['ASP.NET', 'SAP ERP', 'Git/GitHub', 'VS Code', 'Visual Studio', 'Linux', 'Windows']
  },
  {
    title: 'Methodologies & Soft Skills',
    icon: <Users className="w-5 h-5" />,
    skills: ['Agile', 'SDLC', 'Problem-solving', 'Team Collaboration', 'Adaptability', 'Communication']
  }
];

const EDUCATION: EducationItem[] = [
  {
    institution: 'Asia Pacific University',
    degree: 'Bachelor of Science (Honours) in Computer Science',
    period: '2024 - Present',
    details: ['CGPA: 3.85']
  },
  {
    institution: 'Asia Pacific University',
    degree: 'Foundation in Computing and Technology',
    period: '2023 - 2024',
    details: ['CGPA: 3.74']
  },
  {
    institution: 'Chong Hwa Independent High School',
    degree: 'Sijil Pelajaran Malaysia (SPM)',
    period: '2018 - 2023',
    details: ['SPM: 9A']
  }
];

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'SFF Volunteer',
    company: 'Environmental & Event Support Team',
    period: '2023 - 2024',
    details: [
      'Assisted in food waste prevention and supported sustainability workshops and community education events.'
    ]
  }
];

const CERTIFICATES: CertificateItem[] = [
  { title: 'Vice Chancellor\'s List 2024- 2025' },
  { title: 'Red Hat System Administration I (RH124)' },
  { title: 'Red Hat System Administration II (RH134)' }
];

const LANGUAGES = [
  { lang: 'English', level: 'Fluent' },
  { lang: 'Chinese', level: 'Fluent' },
  { lang: 'Malay', level: 'Basic' },
];

const App: React.FC = () => {
  // Use a placeholder that encourages generation or specific resume photo if available
  const [avatar, setAvatar] = useState<string>("https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=FFDCDC");
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cute-cream text-cute-text pb-20 font-quicksand">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b-2 border-cute-pink">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-fredoka font-bold text-cute-dark">
            liqi<span className="text-cute-text">portfolio</span>
          </h1>
          <div className="hidden md:flex gap-8 font-bold text-sm">
            <a href="#about" className="hover:text-cute-dark transition-colors">About</a>
            <a href="#education" className="hover:text-cute-dark transition-colors">Education</a>
            <a href="#skills" className="hover:text-cute-dark transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cute-dark transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Avatar & Generator */}
          <div className="relative inline-block mb-8 group cursor-pointer" onClick={() => setIsGeneratorOpen(!isGeneratorOpen)}>
            <div className="absolute inset-0 bg-cute-dark rounded-full translate-y-2 translate-x-2"></div>
            <img 
              src={avatar} 
              alt="Profile" 
              className="w-40 h-40 rounded-full object-cover border-4 border-white relative z-10 bg-cute-beige"
            />
            <div className="absolute bottom-0 right-0 z-20 bg-white rounded-full p-2 shadow-lg border-2 border-cute-pink group-hover:scale-110 transition-transform">
                <Palette className="w-5 h-5 text-cute-dark" />
            </div>
          </div>
          
          {isGeneratorOpen && (
            <div className="mb-12 animate-in fade-in slide-in-from-top-4">
                <IconGenerator onIconGenerated={(url) => setAvatar(url)} />
                <button 
                    onClick={() => setIsGeneratorOpen(false)}
                    className="mt-4 text-sm font-bold text-cute-text/50 hover:text-cute-text underline"
                >
                    Close Generator
                </button>
            </div>
          )}

          <h1 className="text-5xl font-fredoka font-bold mb-4 text-cute-text">
            Lee Li Qi
          </h1>
          <p className="text-xl text-cute-text/80 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
            Eager to apply technical knowledge in a real-world setting during a 16-week internship from <strong>5 January to 24 April 2026</strong>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
            <a href="mailto:leeliqi1117@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-cute-pink transition-all">
                <Mail className="w-4 h-4" /> leeliqi1117@gmail.com
            </a>
            <a href="tel:0182745933" className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-cute-dark transition-all">
                <Phone className="w-4 h-4" /> 018-2745 933
            </a>
            <a href="https://github.com/lq-05" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-gray-600 transition-all">
                <Github className="w-4 h-4" /> lq-05
            </a>
            <a href="https://linkedin.com/in/lee-li-qi" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-blue-500 transition-all">
                <Linkedin className="w-4 h-4" /> Lee Li Qi
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-white border-y-2 border-cute-pink/30">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-fredoka font-bold text-center mb-12 flex items-center justify-center gap-3">
                <GraduationCap className="text-cute-dark w-8 h-8" />
                Education
            </h2>
            <div className="space-y-8">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 bg-cute-cream/30 p-6 rounded-2xl border border-cute-pink/20 hover:border-cute-pink transition-all">
                        <div className="md:w-1/4">
                             <span className="inline-block px-3 py-1 bg-cute-pink text-cute-text text-sm font-bold rounded-full">
                                {edu.period}
                             </span>
                        </div>
                        <div className="md:w-3/4">
                            <h3 className="text-xl font-bold text-cute-text">{edu.degree}</h3>
                            <div className="text-cute-text/70 font-bold mb-2">{edu.institution}</div>
                            {edu.details.map((detail, i) => (
                                <p key={i} className="text-sm text-cute-text/80">{detail}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-fredoka font-bold text-center mb-12 flex items-center justify-center gap-3">
                <Briefcase className="text-cute-dark w-8 h-8" />
                Experience
            </h2>
            <div className="space-y-8">
                {EXPERIENCE.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-0">
                        {/* Timeline line for mobile */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-cute-pink md:hidden rounded-full"></div>
                        
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white p-6 rounded-2xl shadow-sm border-2 border-transparent hover:border-cute-beige transition-all">
                             <div className="md:w-1/4 md:text-right">
                                 <span className="text-sm font-bold text-cute-dark">{exp.period}</span>
                                 <div className="text-sm text-cute-text/50 font-bold">{exp.company}</div>
                             </div>
                             <div className="md:w-3/4 border-l-4 border-cute-pink pl-4 md:pl-6 hidden md:block">
                                <h3 className="text-xl font-bold text-cute-text">{exp.role}</h3>
                                {exp.details.map((detail, i) => (
                                    <p key={i} className="text-cute-text/80 mt-2">{detail}</p>
                                ))}
                             </div>
                             {/* Mobile view content */}
                             <div className="md:hidden">
                                <h3 className="text-xl font-bold text-cute-text">{exp.role}</h3>
                                {exp.details.map((detail, i) => (
                                    <p key={i} className="text-cute-text/80 mt-2">{detail}</p>
                                ))}
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-cute-pink/10">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-fredoka font-bold text-center mb-12 flex items-center justify-center gap-3">
                <Code2 className="text-cute-dark w-8 h-8" />
                Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {SKILL_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border-2 border-cute-cream hover:border-cute-pink transition-all">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-cute-dark">
                            {category.icon} {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-cute-cream text-cute-text text-sm font-bold rounded-lg border border-cute-beige">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
                
                {/* Languages Box */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-cute-cream hover:border-cute-pink transition-all">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-cute-dark">
                        <Globe className="w-5 h-5" /> Languages
                    </h3>
                    <div className="space-y-3">
                         {LANGUAGES.map(lang => (
                            <div key={lang.lang} className="flex justify-between items-center p-2 bg-cute-cream/30 rounded-lg">
                                <span className="font-bold">{lang.lang}</span>
                                <span className="text-xs font-bold text-cute-text/60 bg-white px-2 py-1 rounded-md">{lang.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

       {/* Certificates Section */}
       <section id="certificates" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-fredoka font-bold text-center mb-12 flex items-center justify-center gap-3">
                <Award className="text-cute-dark w-8 h-8" />
                Certificates
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {CERTIFICATES.map((cert, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border-2 border-cute-beige hover:bg-cute-cream transition-colors flex items-center gap-3">
                        <div className="p-2 bg-cute-pink/20 rounded-full text-cute-dark">
                            <Award className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm leading-tight">{cert.title}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white border-t-2 border-cute-pink/30">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-fredoka font-bold text-center mb-12 flex items-center justify-center gap-3">
                <Layout className="text-cute-dark w-8 h-8" />
                Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {PROJECTS.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-cute-cream pt-16 pb-8 px-6 border-t-4 border-cute-pink">
        <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
                 <Sprout className="w-8 h-8 text-green-500 animate-bounce" />
            </div>
            <h2 className="text-3xl font-fredoka font-bold mb-6">Thank you for visiting!</h2>
            
            <div className="mt-16 pt-8 border-t border-cute-dark/10 flex flex-col items-center text-sm font-bold text-cute-text/40">
                <p>&copy; 2025 Lee Li Qi.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
