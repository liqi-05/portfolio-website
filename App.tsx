import React, { useState } from 'react';
import { ProjectCard } from './components/ProjectCard';
import { Project, SkillCategory, EducationItem, ExperienceItem, CertificateItem } from './types';
import { profileImage } from './assets/images';
import { 
  Github, 
  Mail, 
  Code2, 
  Globe, 
  Linkedin, 
  Briefcase, 
  Award, 
  Database, 
  Terminal, 
  Users, 
  Sprout,
  Menu,
  X,
  FolderOpen,
  Star,
  Heart,
  Sparkles
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
    title: 'Purchase Order System',
    description: 'Developed an automated PO system using Java and Swing. Handled purchase requests and file-based data storage.',
    tags: ['Java', 'Swing', 'Automation'],
    repoUrl: 'https://github.com/liqi-05/liqi-05'
  }
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & Languages',
    icon: <Terminal className="w-6 h-6 text-white" />,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind', 'Python', 'Java', 'C/C++']
  },
  {
    title: 'Backend & Data',
    icon: <Database className="w-6 h-6 text-white" />,
    skills: ['Node.js', 'C# / .NET', 'PostgreSQL', 'MySQL', 'MongoDB', 'R', 'REST APIs']
  },
  {
    title: 'Tools & DevOps',
    icon: <Code2 className="w-6 h-6 text-white" />,
    skills: ['Git & GitHub', 'Docker', 'Linux', 'VS Code', 'Postman', 'Figma', 'SAP ERP']
  },
  {
    title: 'Professional Skills',
    icon: <Users className="w-6 h-6 text-white" />,
    skills: ['Agile / Scrum', 'Problem Solving', 'Team Leadership', 'Communication', 'Adaptability']
  }
];

const EDUCATION: EducationItem[] = [
  {
    institution: 'Asia Pacific University',
    degree: 'BSc (Hons) Computer Science',
    period: '2024 - Present',
    details: ['CGPA: 3.85']
  },
  {
    institution: 'Asia Pacific University',
    degree: 'Foundation in Computing',
    period: '2023 - 2024',
    details: ['CGPA: 3.74']
  },
];

const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'SFF Volunteer',
    company: 'Environmental Team',
    period: '2023 - 2024',
    details: [
      'Assisted in food waste prevention and supported sustainability workshops.'
    ]
  }
];

const CERTIFICATES: CertificateItem[] = [
  { title: 'AWS Academy Graduate - Cloud Foundations' },
  { title: 'Vice Chancellor\'s List 2024-2025' },
  { title: 'Red Hat System Admin I (RH124)' },
  { title: 'Red Hat System Admin II (RH134)' }
];

const LANGUAGES = [
  { lang: 'English', level: 'Fluent' },
  { lang: 'Chinese', level: 'Fluent' },
  { lang: 'Malay', level: 'Basic' },
];

const App: React.FC = () => {
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
    <div className="min-h-screen bg-cute-cream text-cute-text font-quicksand relative overflow-x-hidden text-base">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-2 border-cute-pink shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={scrollToTop} className="text-2xl font-fraunces font-bold text-cute-text hover:text-cute-pink-dark transition-colors flex items-center gap-1">
            liqi<span className="text-cute-pink-dark">.folio</span>
          </button>
          
          <div className="hidden md:flex gap-10 font-bold text-base">
            {['About', 'Education', 'Skills', 'Projects'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-cute-pink-dark transition-colors relative group font-fraunces text-lg"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cute-pink-dark transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button 
            className="md:hidden p-2 text-cute-text hover:bg-cute-pink/20 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b-2 border-cute-pink shadow-lg">
            <div className="flex flex-col p-4 space-y-2 font-bold text-center">
               {['About', 'Education', 'Skills', 'Projects'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="p-4 hover:bg-cute-cream rounded-xl transition-colors text-cute-text w-full font-fraunces text-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-24 px-6 relative checkered-pattern">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Decorative Stickers */}
          <div className="absolute top-0 right-10 animate-bounce delay-100 md:block hidden">
            <Star className="text-cute-pink-dark w-12 h-12 fill-cute-pink-light rotate-12" />
          </div>
          <div className="absolute top-20 left-10 animate-pulse md:block hidden">
             <Heart className="text-cute-pink-dark w-10 h-10 fill-cute-pink -rotate-12" />
          </div>

          {/* Avatar - Using Assets */}
          <div className="relative inline-block mb-10 group">
            <div className="absolute inset-0 bg-white rounded-full scale-105 border-4 border-cute-pink border-dashed animate-spin-slow"></div>
            <div className="relative w-64 h-64 bg-white rounded-full overflow-hidden border-4 border-cute-text shadow-xl">
               <img 
                 src={profileImage}
                 alt="Portrait of Li Qi" 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Cute floating bubble */}
            <div className="absolute -bottom-2 -right-2 bg-white px-5 py-3 rounded-xl shadow-lg border-2 border-cute-pink transform rotate-3">
               <span className="font-fraunces text-cute-text text-base font-bold">Hi there!</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-fraunces font-black mb-6 text-cute-text tracking-tight drop-shadow-sm leading-tight">
             designing code<br/>
             <span className="text-cute-pink-dark italic">with heart</span>
          </h1>
          
          {/* Enhanced Intro Section */}
          <div className="max-w-3xl mx-auto mb-10 space-y-6">
            <p className="text-xl md:text-2xl text-cute-text/90 font-bold bg-white/60 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-white">
              Computer Science Student.<br/>
              <span className="text-cute-pink-dark font-black">Lee Li Qi</span>
            </p>
            
            <p className="text-lg text-cute-text/80 leading-relaxed font-medium px-4">
              I am a passionate developer from Malaysia with a knack for building user-friendly applications. 
              My journey involves mastering everything from low-level C programming to modern web technologies.
              I'm constantly learning and ready to bring creative ideas to life!
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-5 text-base font-bold">
            <a href="mailto:leeliqi1117@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:translate-y-1 hover:shadow-none transition-all border-2 border-cute-text hover:border-cute-pink">
                <Mail className="w-6 h-6 text-cute-pink-dark" /> Contact Me
            </a>
            <a href="https://github.com/liqi-05/liqi-05" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-cute-text text-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,222,222,1)] hover:translate-y-1 hover:shadow-none transition-all border-2 border-cute-text">
                <Github className="w-6 h-6" /> GitHub
            </a>
          </div>
        </div>
        
        {/* Wavy Divider Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-cute-pink wavy-top translate-y-1"></div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-cute-pink relative">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
               <div className="inline-block bg-white px-8 py-3 rounded-full border-2 border-dashed border-cute-text/20 mb-6">
                 <span className="font-quicksand font-bold text-cute-text uppercase tracking-widest text-sm">Academic Journey</span>
               </div>
               <h2 className="text-5xl md:text-6xl font-fraunces font-bold text-white drop-shadow-md">
                   Education
               </h2>
            </div>

            <div className="grid gap-8">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-lg border-b-8 border-cute-text/10 transform hover:scale-[1.01] transition-transform">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6">
                            <div>
                                <h3 className="text-2xl font-fraunces font-bold text-cute-text">{edu.degree}</h3>
                                <div className="text-cute-pink-dark font-bold text-lg">{edu.institution}</div>
                            </div>
                            <span className="bg-cute-cream text-cute-text px-5 py-2 rounded-xl font-bold text-base border border-cute-text/10 text-center md:text-left">
                                {edu.period}
                            </span>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            {edu.details.map((detail, i) => (
                                <span key={i} className="text-base font-bold bg-cute-blue/30 text-cute-text/80 px-4 py-2 rounded-xl">
                                    {detail}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Wavy Divider Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white wavy-top translate-y-1"></div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center mb-20">
                 <div className="w-20 h-20 bg-cute-pink-light rounded-2xl flex items-center justify-center mb-6 border-2 border-cute-text shadow-[4px_4px_0px_0px_rgba(93,82,71,1)]">
                    <Briefcase className="w-10 h-10 text-cute-text" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-fraunces font-bold text-cute-text text-center leading-tight">
                    Experience &<br/>Certificates
                 </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                 {/* Experience Column */}
                 <div className="bg-cute-cream rounded-[3rem] p-8 border-2 border-white shadow-inner">
                    <h3 className="font-fraunces text-2xl font-bold mb-8 text-cute-text flex items-center gap-3">
                        <Sparkles className="w-6 h-6 text-cute-pink-dark"/> Experience
                    </h3>
                    <div className="space-y-8">
                        {EXPERIENCE.map((exp, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] border-2 border-cute-pink/20">
                                <span className="text-sm font-bold text-white bg-cute-text px-4 py-2 rounded-full mb-3 inline-block">{exp.period}</span>
                                <h4 className="text-lg font-bold text-cute-text">{exp.role}</h4>
                                <div className="text-cute-pink-dark font-bold text-base mb-3">{exp.company}</div>
                                {exp.details.map((d, idx) => (
                                    <p key={idx} className="text-base text-cute-text/80 leading-relaxed">{d}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                 </div>

                 {/* Certificates Column */}
                 <div className="bg-cute-blue/20 rounded-[3rem] p-8 border-2 border-white shadow-inner">
                    <h3 className="font-fraunces text-2xl font-bold mb-8 text-cute-text flex items-center gap-3">
                        <Award className="w-6 h-6 text-cute-pink-dark"/> Awards
                    </h3>
                    <div className="space-y-5">
                        {CERTIFICATES.map((cert, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl flex items-center gap-5 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-cute-pink/20 flex items-center justify-center text-cute-pink-dark font-bold text-base shrink-0">
                                    {i + 1}
                                </div>
                                <span className="font-bold text-cute-text text-lg">{cert.title}</span>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
        </div>
         {/* Wavy Divider Bottom */}
         <div className="absolute bottom-0 left-0 w-full h-20 bg-cute-cream wavy-top translate-y-1"></div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-cute-cream relative">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-fraunces font-bold text-center mb-20 text-cute-text">
                <span className="bg-white px-6 py-2 rounded-xl shadow-sm inline-block mr-3">Tech</span> 
                Stack
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SKILL_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-[0px_6px_0px_0px_rgba(235,235,235,1)] hover:shadow-[0px_3px_0px_0px_rgba(235,235,235,1)] hover:translate-y-1 transition-all border-2 border-transparent hover:border-cute-pink">
                        <div className="w-16 h-16 bg-cute-text rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg">
                            {category.icon}
                        </div>
                        <h3 className="text-xl font-fraunces font-bold text-cute-text mb-4">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-cute-pink-light/30 text-cute-text text-xs font-bold rounded-lg">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Languages Sticker */}
            <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-[2.5rem] border-4 border-dashed border-cute-pink flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                    <div className="bg-cute-blue/30 p-5 rounded-full">
                        <Globe className="w-10 h-10 text-cute-text" />
                    </div>
                    <div>
                        <h3 className="font-fraunces text-2xl font-bold">Languages</h3>
                        <p className="text-base text-cute-text/60">I speak multiple!</p>
                    </div>
                </div>
                <div className="flex gap-4">
                     {LANGUAGES.map(lang => (
                         <div key={lang.lang} className="text-center">
                             <div className="bg-cute-text text-white px-4 py-1.5 rounded-xl text-sm font-bold mb-1">{lang.lang}</div>
                             <div className="text-sm font-bold text-cute-pink-dark">{lang.level}</div>
                         </div>
                     ))}
                </div>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white border-t-8 border-cute-pink-light">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-24 bg-cute-pink-light rotate-3 rounded-full -z-10 blur-xl opacity-50"></div>
                 <h2 className="text-4xl md:text-5xl font-fraunces font-bold text-cute-text">
                    Recent Projects
                 </h2>
                 <p className="mt-6 font-bold text-cute-text/60 text-xl">Take a peek at what I've built!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Intro Card */}
                <div className="bg-cute-blue/20 rounded-[3rem] p-8 flex flex-col justify-center items-center text-center border-4 border-white shadow-xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
                     <FolderOpen size={64} className="text-cute-text mb-6" />
                     <h3 className="font-fraunces text-3xl font-bold text-cute-text mb-4">My Code<br/>Garden</h3>
                     <p className="font-bold text-cute-text/70 text-base">
                         Growing ideas into reality, one line of code at a time.
                     </p>
                </div>

                {PROJECTS.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}

                 <a 
                    href="https://github.com/liqi-05/liqi-05" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group bg-cute-pink-light/30 rounded-[3rem] border-4 border-dashed border-cute-text/20 p-8 flex flex-col items-center justify-center text-cute-text hover:bg-cute-pink-light transition-all min-h-[300px]"
                >
                    <div className="bg-white p-6 rounded-full mb-6 group-hover:scale-110 transition-transform shadow-sm">
                        <Github size={48} />
                    </div>
                    <span className="font-fraunces font-bold text-xl">View GitHub Profile</span>
                </a>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-cute-text py-20 px-6 relative overflow-hidden text-white text-center">
        <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex justify-center mb-10">
                <div className="bg-white p-5 rounded-full animate-bounce text-cute-text">
                   <Sprout size={40} />
                </div>
            </div>
            <h2 className="text-4xl font-fraunces font-bold mb-10">Ready to create something magical?</h2>
            
            <div className="flex justify-center gap-8 mb-12">
                <a href="mailto:leeliqi1117@gmail.com" className="hover:text-cute-pink-dark transition-colors"><Mail size={32}/></a>
                <a href="https://linkedin.com/in/lee-li-qi" className="hover:text-cute-pink-dark transition-colors"><Linkedin size={32}/></a>
                <a href="https://github.com/liqi-05/liqi-05" className="hover:text-cute-pink-dark transition-colors"><Github size={32}/></a>
            </div>

            <p className="font-quicksand font-bold opacity-60 text-base">
                &copy; 2025 Lee Li Qi. 
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;