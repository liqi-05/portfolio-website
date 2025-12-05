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
  Sprout,
  Menu,
  X,
  FolderOpen,
  Star,
  Sparkles,
  Heart
} from 'lucide-react';

// --- RESUME DATA ---

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Library Management System',
    description: 'Created a book borrowing and inventory system using C and file handling. Managed book records with structured data storage.',
    tags: ['C', 'File Handling', 'Data Structures'],
    repoUrl: 'https://github.com/liqi-05/liqi-05'
  },
  {
    id: '2',
    title: 'Purchase Order Management System',
    description: 'Developed an automated PO system using Java and Swing. Handled purchase requests and file-based data storage.',
    tags: ['Java', 'Swing', 'Automation'],
    repoUrl: 'https://github.com/liqi-05/liqi-05'
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
  const [avatar, setAvatar] = useState<string>("https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=FFDCDC");
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cute-cream text-cute-text pb-20 font-quicksand relative">
      
      {/* Decorative Background Elements */}
      <div className="fixed top-20 right-10 opacity-20 pointer-events-none">
        <Sparkles className="w-12 h-12 text-cute-pink" />
      </div>
      <div className="fixed bottom-20 left-10 opacity-20 pointer-events-none">
        <Star className="w-16 h-16 text-cute-beige rotate-12" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-2 border-cute-pink shadow-sm transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={scrollToTop} className="text-2xl font-fredoka font-bold text-cute-dark hover:opacity-80 transition-opacity flex items-center gap-1">
            liqi<span className="text-cute-text">portfolio</span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-bold text-sm">
            {['About', 'Education', 'Skills', 'Projects'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-cute-dark transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cute-dark transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-cute-text hover:bg-cute-pink/20 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b-2 border-cute-pink shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col p-4 space-y-2 font-bold text-center">
               {['About', 'Education', 'Skills', 'Projects'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="p-3 hover:bg-cute-cream rounded-xl transition-colors text-cute-text w-full"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-32 pb-16 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Avatar & Generator */}
          <div className="relative inline-block mb-8 group cursor-pointer" onClick={() => setIsGeneratorOpen(!isGeneratorOpen)}>
            <div className="absolute inset-0 bg-cute-dark rounded-full translate-y-2 translate-x-2"></div>
            <img 
              src={avatar} 
              alt="Profile" 
              className="w-48 h-48 rounded-full object-cover border-4 border-white relative z-10 bg-cute-beige shadow-md"
            />
            <div className="absolute bottom-2 right-2 z-20 bg-white rounded-full p-2 shadow-lg border-2 border-cute-pink group-hover:scale-110 transition-transform">
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

          <h1 className="text-6xl font-fredoka font-bold mb-4 text-cute-text tracking-tight">
            Lee Li Qi
          </h1>
          <p className="text-xl text-cute-text/80 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
            Eager to apply technical knowledge in a real-world setting during a 16-week internship from <br/><strong className="text-cute-brown">5 January to 24 April 2026</strong>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
            <a href="mailto:leeliqi1117@gmail.com" className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm hover:shadow-md hover:text-cute-pink transition-all border-2 border-transparent hover:border-cute-pink">
                <Mail className="w-4 h-4" /> leeliqi1117@gmail.com
            </a>
            <a href="tel:0182745933" className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm hover:shadow-md hover:text-cute-dark transition-all border-2 border-transparent hover:border-cute-dark">
                <Phone className="w-4 h-4" /> 018-2745 933
            </a>
            <a href="https://github.com/liqi-05/liqi-05" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm hover:shadow-md hover:text-gray-600 transition-all border-2 border-transparent hover:border-gray-200">
                <Github className="w-4 h-4" /> lq-05
            </a>
            <a href="https://www.linkedin.com/in/lee-li-qi-ab1203288/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm hover:shadow-md hover:text-blue-500 transition-all border-2 border-transparent hover:border-blue-200">
                <Linkedin className="w-4 h-4" /> Lee Li Qi
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-white border-y-2 border-cute-pink/30">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-fredoka font-bold text-center mb-12 flex items-center justify-center gap-3">
                <div className="bg-cute-pink/20 p-2 rounded-xl text-cute-dark"><Heart className="w-8 h-8" /></div>
                Education
            </h2>
            <div className="space-y-8">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 bg-cute-cream/30 p-8 rounded-3xl border border-cute-pink/20 hover:border-cute-pink transition-all">
                        <div className="md:w-1/4">
                             <span className="inline-block px-4 py-1.5 bg-cute-pink text-cute-text text-sm font-bold rounded-full">
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
                 <div className="bg-cute-beige p-2 rounded-xl text-cute-brown"><Briefcase className="w-8 h-8" /></div>
                Experience
            </h2>
            <div className="space-y-8">
                {EXPERIENCE.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-0">
                        {/* Timeline line for mobile */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-cute-pink md:hidden rounded-full"></div>
                        
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-cute-beige transition-all group">
                             <div className="md:w-1/4 md:text-right">
                                 <span className="text-sm font-bold text-cute-brown bg-cute-beige/30 px-3 py-1 rounded-full">{exp.period}</span>
                                 <div className="text-sm text-cute-text/50 font-bold mt-2">{exp.company}</div>
                             </div>
                             <div className="md:w-3/4 border-l-4 border-cute-pink pl-4 md:pl-6 hidden md:block">
                                <h3 className="text-xl font-bold text-cute-text group-hover:text-cute-brown transition-colors">{exp.role}</h3>
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
      <section id="skills" className="py-16 px-6 bg-cute-pink/10 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -left-10 top-20 w-32 h-32 bg-cute-pink rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
        <div className="absolute -right-10 bottom-20 w-40 h-40 bg-cute-beige rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl font-fredoka font-bold text-center mb-12 flex items-center justify-center gap-3">
                <div className="bg-white p-2 rounded-xl text-cute-dark shadow-sm"><Code2 className="w-8 h-8" /></div>
                Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {SKILL_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-sm border-2 border-white hover:border-cute-pink transition-all">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-cute-pink/30 p-2.5 rounded-xl text-cute-text">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-bold text-cute-text">
                                {category.title}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map(skill => (
                                <span key={skill} className="px-4 py-2 bg-white text-cute-text text-sm font-bold rounded-xl border-2 border-cute-cream hover:border-cute-pink cursor-default transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
                
                {/* Languages Box */}
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-sm border-2 border-white hover:border-cute-pink transition-all">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-cute-beige p-2.5 rounded-xl text-cute-brown">
                            <Globe className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-cute-text">Languages</h3>
                    </div>
                    <div className="space-y-3">
                         {LANGUAGES.map(lang => (
                            <div key={lang.lang} className="flex justify-between items-center p-3 bg-cute-cream/30 rounded-xl">
                                <span className="font-bold text-cute-text">{lang.lang}</span>
                                <span className="text-xs font-bold text-cute-brown bg-white px-3 py-1 rounded-lg border border-cute-beige">{lang.level}</span>
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
                <div className="bg-cute-dark p-2 rounded-xl text-white"><Award className="w-8 h-8" /></div>
                Certificates
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {CERTIFICATES.map((cert, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border-2 border-cute-beige hover:bg-cute-cream transition-colors flex items-center gap-3 group">
                        <div className="p-2 bg-cute-pink/20 rounded-full text-cute-dark group-hover:scale-110 transition-transform">
                            <Award className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm leading-tight text-cute-text/90">{cert.title}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Projects Section with Cover Page */}
      <section id="projects" className="py-16 px-6 bg-white border-t-2 border-cute-pink/30">
        <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Project Cover Card */}
                <div className="bg-cute-text rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden text-white min-h-[350px] shadow-xl group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-cute-pink/20 rounded-full -ml-10 -mb-10 blur-xl"></div>
                    
                    <div className="relative z-10">
                        <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm shadow-inner">
                            <FolderOpen size={28} className="text-white" />
                        </div>
                        <h2 className="text-5xl font-fredoka font-bold mb-4 leading-tight">My<br/><span className="text-cute-pink">Projects</span></h2>
                        <p className="text-white/70 font-bold text-lg max-w-xs">
                            A curated collection of my academic and personal code adventures.
                        </p>
                    </div>
                </div>

                {/* Actual Projects */}
                {PROJECTS.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}

                {/* Github Link Card */}
                <a 
                    href="https://github.com/liqi-05/liqi-05" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group rounded-[2.5rem] border-4 border-dashed border-cute-pink/30 p-8 flex flex-col items-center justify-center text-cute-text/50 hover:text-cute-pink hover:border-cute-pink hover:bg-cute-cream/30 transition-all min-h-[300px]"
                >
                    <div className="bg-white p-5 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-sm">
                        <Github size={32} />
                    </div>
                    <span className="font-fredoka font-bold text-xl">View more on GitHub</span>
                </a>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-cute-cream pt-16 pb-12 px-6 border-t-4 border-cute-pink relative overflow-hidden">
        <div className="absolute top-1/2 left-10 text-cute-pink/20"><Star size={40} /></div>
        <div className="absolute top-1/3 right-10 text-cute-beige"><Sparkles size={32} /></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6">
                 <div className="bg-white p-4 rounded-full shadow-md animate-bounce">
                    <Sprout className="w-8 h-8 text-green-500" />
                 </div>
            </div>
            <h2 className="text-3xl font-fredoka font-bold mb-6 text-cute-text">Thank you for visiting!</h2>
            
            <div className="mt-12 pt-8 border-t border-cute-dark/10 flex flex-col items-center text-sm font-bold text-cute-text/40">
                <p>&copy; 2025 Lee Li Qi</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;