import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string; // Made optional as resume might not have links for all
  demoUrl?: string;
  stars?: number;   // Made optional
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface CertificateItem {
  title: string;
  issuer?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}
