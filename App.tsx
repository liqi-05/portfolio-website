import React, { useState } from 'react';
import { ProjectCard } from './components/ProjectCard';
import { ThemeToggle } from './components/ThemeToggle';
import { ScrollReveal } from './components/ScrollReveal';
import { Project, SkillCategory, EducationItem, ExperienceItem, CertificateItem } from './types';
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
  Sparkles,
  Download
} from 'lucide-react';

// --- RESUME DATA ---

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ResumePop (Hybrid AI Optimizer)',
    description: 'Engineered a high-performance, serverless resume optimization tool using React and TypeScript. Implemented a Set Theory-based tokenization algorithm for O(1) keyword matching, effectively eliminating server costs and reducing analysis latency by 95% compared to traditional backend solutions.',
    tags: ['React', 'TypeScript', 'DSA', 'AI Engineering', 'Tailwind CSS'],
    repoUrl: 'https://github.com/liqi-05/resume',
    demoUrl: 'https://resume-beta-ten-46.vercel.app/'
  },
  {
    id: '2',
    title: 'HabitFlow (AI Wellness Engine)',
    description: 'Architected a privacy-first, zero-backend wellness platform leveraging React 19. Implemented client-side machine learning models (Linear Regression) to predict burnout risk based on user logs. Integrated Gemini 2.5 Flash for multimodal voice-to-JSON data entry, enabling effortless natural language tracking.',
    tags: ['React 19', 'TypeScript', 'Gemini AI', 'Client-Side ML', 'Tailwind CSS'],
    repoUrl: 'https://github.com/liqi-05/habit-tracker',
    demoUrl: 'https://habit-tracker-gamma-two.vercel.app/'
  },
  {
    id: '3',
    title: 'FairTix (High-Concurrency Ticketing Engine)',
    description: 'Architected a distributed system capable of handling 10k+ concurrent requests using .NET 9 and Redis. Implemented a "Waiting Room" queue pattern for traffic throttling and engineered PostgreSQL Optimistic Concurrency Control (RowVersion) to ensure ACID compliance and zero double-bookings during traffic spikes.',
    tags: ['.NET 9 Web API', 'Redis', 'PostgreSQL', 'Docker', 'System Design', 'React 19'],
    repoUrl: 'https://github.com/liqi-05/ticketing-system',
  },
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
  { title: 'AWS Academy Graduate - Cloud Foundations', fileUrl: 'assets/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251210-30-zd7p6w.pdf' },
  { title: 'Vice Chancellor\'s List 2024-2025', fileUrl: 'assets/VC_Certificate_2025 - LEE LI QI.pdf' },
  { title: 'Red Hat System Admin I (RH124)', fileUrl: 'assets/RedHatSystemAdministrationIRH124-RHA-Ver.9.3_Badge20250320-28-4sj924.pdf' },
  { title: 'Red Hat System Admin II (RH134)', fileUrl: 'assets/RedHatSystemAdministrationIIRH134-RHA-Ver.9.3_Badge20250606-27-qvvjsn.pdf' }
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
    <div className="min-h-screen bg-cute-cream text-cute-text font-quicksand relative overflow-x-hidden text-base dark:bg-cute-dark-bg dark:text-cute-dark-text transition-colors duration-300">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b-2 border-cute-pink shadow-sm transition-all dark:bg-cute-dark-bg/90 dark:border-cute-dark-border">
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
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="p-2 text-cute-text hover:bg-cute-pink/20 rounded-lg transition-colors dark:text-cute-dark-text dark:hover:bg-cute-dark-card"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b-2 border-cute-pink shadow-lg dark:bg-cute-dark-bg/95 dark:border-cute-dark-border">
            <div className="flex flex-col p-4 space-y-2 font-bold text-center">
              {['About', 'Education', 'Skills', 'Projects'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="p-4 hover:bg-cute-cream rounded-xl transition-colors text-cute-text w-full font-fraunces text-lg dark:text-cute-dark-text dark:hover:bg-cute-dark-card"
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
        <ScrollReveal className="max-w-5xl mx-auto text-center relative z-10">

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
                src="/profile.jpg"
                alt="Portrait of Li Qi"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Cute floating bubble */}
            <div className="absolute -bottom-2 -right-2 bg-white px-5 py-3 rounded-xl shadow-lg border-2 border-cute-pink transform rotate-3 dark:bg-cute-dark-card dark:border-cute-dark-border">
              <span className="font-fraunces text-cute-text text-base font-bold dark:text-cute-dark-text">Hi there!</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-fraunces font-black mb-6 text-cute-text tracking-tight drop-shadow-sm leading-tight">
            designing code<br />
            <span className="text-cute-pink-dark italic">with heart</span>
          </h1>

          {/* Enhanced Intro Section */}
          <div className="max-w-3xl mx-auto mb-10 space-y-6">
            <p className="text-xl md:text-2xl text-cute-text/90 font-bold bg-white/60 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-white dark:bg-cute-dark-card/60 dark:text-cute-dark-text/90 dark:border-cute-dark-border">
              Computer Science Student.<br />
              <span className="text-cute-pink-dark font-black">Lee Li Qi</span>
            </p>

            <p className="text-lg text-cute-text/80 leading-relaxed font-medium px-4 dark:text-cute-dark-muted">
              I am a passionate developer from Malaysia with a knack for building user-friendly applications.
              My journey involves mastering everything from low-level C programming to modern web technologies.
              I'm constantly learning and ready to bring creative ideas to life!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-base font-bold">
            <a href="mailto:leeliqi1117@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,222,222,1)] hover:translate-y-1 hover:shadow-none transition-all border-2 border-cute-text hover:border-cute-pink dark:bg-cute-dark-card dark:text-cute-dark-text dark:border-cute-dark-border dark:hover:border-cute-pink-dark">
              <Mail className="w-6 h-6 text-cute-pink-dark" /> Contact Me
            </a>
            <a href="https://github.com/liqi-05" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-cute-text text-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,222,222,1)] hover:translate-y-1 hover:shadow-none transition-all border-2 border-cute-text dark:bg-cute-dark-card dark:text-cute-dark-text dark:border-cute-dark-border dark:hover:border-cute-pink-dark">
              <Github className="w-6 h-6" /> GitHub
            </a>
          </div>
        </ScrollReveal>

        {/* Wavy Divider Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-cute-pink wavy-top translate-y-1 dark:bg-cute-dark-card"></div>
      </section >

      {/* Education Section */}
      < section id="education" className="py-24 px-6 bg-cute-pink relative dark:bg-cute-dark-card" >
        <ScrollReveal className="max-w-5xl mx-auto">
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
              <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-lg border-b-8 border-cute-text/10 transform hover:scale-[1.01] transition-transform dark:bg-cute-dark-bg dark:border-cute-dark-border">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6">
                  <div>
                    <h3 className="text-2xl font-fraunces font-bold text-cute-text dark:text-cute-dark-text">{edu.degree}</h3>
                    <div className="text-cute-pink-dark font-bold text-lg">{edu.institution}</div>
                  </div>
                  <span className="bg-cute-cream text-cute-text px-5 py-2 rounded-xl font-bold text-base border border-cute-text/10 text-center md:text-left dark:bg-cute-dark-card dark:text-cute-dark-text dark:border-cute-dark-border">
                    {edu.period}
                  </span>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {edu.details.map((detail, i) => (
                    <span key={i} className="text-base font-bold bg-cute-blue/30 text-cute-text/80 px-4 py-2 rounded-xl dark:text-cute-dark-muted dark:bg-cute-dark-card">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Wavy Divider Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white wavy-top translate-y-1 dark:bg-cute-dark-bg"></div>
      </section >

      {/* Experience Section */}
      < section id="experience" className="py-24 px-6 bg-white relative dark:bg-cute-dark-bg" >
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-20">
            <div className="w-20 h-20 bg-cute-pink-light rounded-2xl flex items-center justify-center mb-6 border-2 border-cute-text shadow-[4px_4px_0px_0px_rgba(93,82,71,1)]">
              <Briefcase className="w-10 h-10 text-cute-text" />
            </div>
            <h2 className="text-4xl md:text-5xl font-fraunces font-bold text-cute-text text-center leading-tight dark:text-cute-dark-text">
              Experience &<br />Certificates
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Experience Column */}
            <div className="bg-cute-cream rounded-[3rem] p-8 border-2 border-white shadow-inner dark:bg-cute-dark-card dark:border-cute-dark-border">
              <h3 className="font-fraunces text-2xl font-bold mb-8 text-cute-text flex items-center gap-3 dark:text-cute-dark-text">
                <Sparkles className="w-6 h-6 text-cute-pink-dark" /> Experience
              </h3>
              <div className="space-y-8">
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border-2 border-cute-pink/20 dark:bg-cute-dark-bg dark:border-cute-dark-border">
                    <span className="text-sm font-bold text-white bg-cute-text px-4 py-2 rounded-full mb-3 inline-block">{exp.period}</span>
                    <h4 className="text-lg font-bold text-cute-text dark:text-cute-dark-text">{exp.role}</h4>
                    <div className="text-cute-pink-dark font-bold text-base mb-3">{exp.company}</div>
                    {exp.details.map((d, idx) => (
                      <p key={idx} className="text-base text-cute-text/80 leading-relaxed dark:text-cute-dark-muted">{d}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates Column */}
            <div className="bg-cute-blue/20 rounded-[3rem] p-8 border-2 border-white shadow-inner dark:bg-cute-dark-card dark:border-cute-dark-border">
              <h3 className="font-fraunces text-2xl font-bold mb-8 text-cute-text flex items-center gap-3 dark:text-cute-dark-text">
                <Award className="w-6 h-6 text-cute-pink-dark" /> Certificates
              </h3>
              <div className="space-y-5">
                {CERTIFICATES.map((cert, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl flex items-center justify-between shadow-sm dark:bg-cute-dark-bg">
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-full bg-cute-pink/20 flex items-center justify-center text-cute-pink-dark font-bold text-base shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-bold text-cute-text text-lg dark:text-cute-dark-text">{cert.title}</span>
                    </div>
                    {cert.fileUrl && (
                      <a
                        href={cert.fileUrl}
                        download
                        aria-label={`Download ${cert.title}`}
                        className="text-cute-text/40 hover:text-cute-pink-dark transition-colors p-2 hover:bg-cute-pink/10 rounded-lg dark:text-cute-dark-muted dark:hover:text-cute-pink-dark"
                      >
                        <Download size={20} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        {/* Wavy Divider Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-cute-cream wavy-top translate-y-1 dark:bg-cute-dark-card"></div>
      </section >

      {/* Skills Section */}
      < section id="skills" className="py-24 px-6 bg-cute-cream relative dark:bg-cute-dark-card" >
        <ScrollReveal className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-fraunces font-bold text-center mb-20 text-cute-text dark:text-cute-dark-text">
            <span className="bg-white px-6 py-2 rounded-xl shadow-sm inline-block mr-3 dark:bg-cute-dark-bg dark:text-cute-dark-text">Tech</span>
            Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-[0px_6px_0px_0px_rgba(235,235,235,1)] hover:shadow-[0px_3px_0px_0px_rgba(235,235,235,1)] hover:translate-y-1 transition-all border-2 border-transparent hover:border-cute-pink dark:bg-cute-dark-bg dark:shadow-none dark:border-cute-dark-border dark:hover:border-cute-pink-dark">
                <div className="w-16 h-16 bg-cute-text rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg dark:bg-cute-dark-card dark:border dark:border-cute-dark-border">
                  {category.icon}
                </div>
                <h3 className="text-xl font-fraunces font-bold text-cute-text mb-4 dark:text-cute-dark-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-cute-pink-light/30 text-cute-text text-xs font-bold rounded-lg dark:text-cute-dark-muted dark:bg-cute-dark-card">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages Sticker */}
          <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-[2.5rem] border-4 border-dashed border-cute-pink flex flex-col md:flex-row items-center justify-between gap-8 dark:bg-cute-dark-bg">
            <div className="flex items-center gap-6">
              <div className="bg-cute-blue/30 p-5 rounded-full dark:bg-cute-dark-card">
                <Globe className="w-10 h-10 text-cute-text dark:text-cute-dark-text" />
              </div>
              <div>
                <h3 className="font-fraunces text-2xl font-bold dark:text-cute-dark-text">Languages</h3>
                <p className="text-base text-cute-text/60 dark:text-cute-dark-muted">I speak multiple!</p>
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
        </ScrollReveal>
      </section >

      {/* Projects Section */}
      < section id="projects" className="py-24 px-6 bg-white border-t-8 border-cute-pink-light dark:bg-cute-dark-bg" >
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-24 bg-cute-pink-light rotate-3 rounded-full -z-10 blur-xl opacity-50"></div>
            <h2 className="text-4xl md:text-5xl font-fraunces font-bold text-cute-text dark:text-cute-dark-text">
              My Projects
            </h2>
            <p className="mt-6 font-bold text-cute-text/60 text-xl dark:text-cute-dark-muted">Take a peek at what I've built!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Intro Card */}
            <div className="bg-cute-blue/20 rounded-[3rem] p-8 flex flex-col justify-center items-center text-center border-4 border-white shadow-xl relative overflow-hidden dark:bg-cute-dark-card dark:border-cute-dark-border">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
              <FolderOpen size={64} className="text-cute-text mb-6 dark:text-cute-dark-text" />
              <h3 className="font-fraunces text-3xl font-bold text-cute-text mb-4 dark:text-cute-dark-text">My Code<br />Garden</h3>
              <p className="font-bold text-cute-text/70 text-base dark:text-cute-dark-muted">
                Growing ideas into reality, one line of code at a time.
              </p>
            </div>

            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}

            <a
              href="https://github.com/liqi-05"
              target="_blank"
              rel="noreferrer"
              className="group bg-cute-pink-light/30 rounded-[3rem] border-4 border-dashed border-cute-text/20 p-8 flex flex-col items-center justify-center text-cute-text hover:bg-cute-pink-light transition-all min-h-[300px] dark:text-cute-dark-text dark:border-cute-dark-border dark:hover:bg-cute-dark-card"
            >
              <div className="bg-white p-6 rounded-full mb-6 group-hover:scale-110 transition-transform shadow-sm dark:bg-cute-dark-bg dark:group-hover:bg-cute-dark-border">
                <Github size={48} />
              </div>
              <span className="font-fraunces font-bold text-xl">View GitHub Profile</span>
            </a>
          </div>
        </ScrollReveal>
      </section >

      {/* Footer */}
      < footer id="contact" className="bg-cute-text py-20 px-6 relative overflow-hidden text-white text-center dark:bg-black" >
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex justify-center mb-10">
            <div className="bg-white p-5 rounded-full animate-bounce text-cute-text dark:text-cute-dark-card">
              <Sprout size={40} />
            </div>
          </div>
          <h2 className="text-4xl font-fraunces font-bold mb-10">Ready to create something magical?</h2>

          <div className="flex justify-center gap-8 mb-12">
            <a href="mailto:leeliqi1117@gmail.com" className="hover:text-cute-pink-dark transition-colors"><Mail size={32} /></a>
            <a href="https://www.linkedin.com/in/lee-li-qi-ab1203288/" className="hover:text-cute-pink-dark transition-colors"><Linkedin size={32} /></a>
            <a href="https://github.com/liqi-05" className="hover:text-cute-pink-dark transition-colors"><Github size={32} /></a>
          </div>

          <p className="font-quicksand font-bold opacity-60 text-base">
            &copy; 2025 Lee Li Qi.
          </p>
        </div>
      </footer >
    </div >
  );
};

export default App;