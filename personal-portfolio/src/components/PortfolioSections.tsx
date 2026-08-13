"use client";

import {
  ArrowUp,
  ArrowUpRight,
  Award as AwardIcon,
  Bot,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  CarFront,
  Eye,
  FolderGit2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Ship,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { projects } from "@/content/projects";
import {
  aiAgentPracticeNarrative,
  awards,
  education,
  experience,
  portfolioSections,
  researchAreas,
  skillGroups,
} from "@/content/sections";
import { siteContent } from "@/content/site";
import { getLocalizedText } from "@/content/types";
import { useLanguage } from "./LanguageProvider";
import { Section } from "./Section";

const researchIcons: LucideIcon[] = [Bot, Workflow];
const projectIcons: LucideIcon[] = [BrainCircuit, Ship, CarFront];
const skillIcons: LucideIcon[] = [Eye, Boxes, BrainCircuit];

function findSection(id: string) {
  const section = portfolioSections.find((item) => item.id === id);

  if (!section) {
    throw new Error(`Missing section: ${id}`);
  }

  return section;
}

export function PortfolioSections() {
  const { locale } = useLanguage();
  const profile = siteContent.profile;

  return (
    <>
      <Section section={findSection("research")} locale={locale} className="section-muted">
        <div className="card-grid research-card-grid">
          {researchAreas.map((area, index) => {
            const AreaIcon = researchIcons[index] ?? Bot;

            return (
            <article className="info-card" key={area.title.en}>
              <div className="card-icon">
                <AreaIcon aria-hidden="true" size={20} />
              </div>
              <h3>{getLocalizedText(area.title, locale)}</h3>
              <p>{getLocalizedText(area.description, locale)}</p>
              <div className="tag-row">
                {area.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </article>
            );
          })}
        </div>
      </Section>

      <Section section={findSection("experience")} locale={locale}>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.title.en}-${item.period.en}`}>
              <div className="timeline-icon">
                <BriefcaseBusiness aria-hidden="true" size={19} />
              </div>
              <div>
                <p>{getLocalizedText(item.period, locale)}</p>
                <h3>{getLocalizedText(item.title, locale)}</h3>
                <strong>{getLocalizedText(item.organization, locale)}</strong>
                <span>{getLocalizedText(item.description, locale)}</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section section={findSection("projects")} locale={locale} className="section-muted">
        <div className="project-list">
          {projects.map((project, index) => {
            const ProjectIcon = projectIcons[index] ?? Wrench;

            return (
            <article className="project-card" key={project.slug}>
              <div className="project-card-header">
                <div>
                  <p>{getLocalizedText(project.category, locale)}</p>
                  <h3>{getLocalizedText(project.title, locale)}</h3>
                </div>
                <ProjectIcon aria-hidden="true" size={22} />
              </div>
              <div className="project-card-body">
                <div>
                  <span>{locale === "en" ? "Scenario" : "场景"}</span>
                  <p>{getLocalizedText(project.scenario, locale)}</p>
                </div>
                <div>
                  <span>{locale === "en" ? "My Work" : "我的工作"}</span>
                  <p>{getLocalizedText(project.work, locale)}</p>
                </div>
                <div>
                  <span>{locale === "en" ? "Result" : "结果"}</span>
                  <p>{getLocalizedText(project.impact, locale)}</p>
                </div>
              </div>
              <div className="tag-row">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              {project.repositoryUrl ? (
                <a
                  className="project-repository-link"
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FolderGit2 aria-hidden="true" size={17} />
                  {locale === "en" ? "GitHub Repository" : "查看 GitHub 仓库"}
                  <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              ) : null}
            </article>
            );
          })}
        </div>
      </Section>

      <Section section={findSection("thoughts")} locale={locale}>
        <article className="lead-panel ai-agent-practice-panel">
          <p>{getLocalizedText(aiAgentPracticeNarrative, locale)}</p>
        </article>
      </Section>

      <Section section={findSection("education")} locale={locale} className="section-muted">
        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item" key={`${item.title.en}-${item.period.en}`}>
              <div className="timeline-icon">
                <GraduationCap aria-hidden="true" size={19} />
              </div>
              <div>
                <p>{getLocalizedText(item.period, locale)}</p>
                <h3>{getLocalizedText(item.title, locale)}</h3>
                <strong>{getLocalizedText(item.organization, locale)}</strong>
                <span>{getLocalizedText(item.description, locale)}</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section section={findSection("awards")} locale={locale}>
        <div className="award-grid">
          {awards.map((award) => (
            <article className="award-card" key={award.title.en}>
              <AwardIcon aria-hidden="true" size={22} />
              <div>
                <h3>{getLocalizedText(award.title, locale)}</h3>
                <p>{getLocalizedText(award.issuer, locale)}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section section={findSection("skills")} locale={locale} className="section-muted">
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const GroupIcon = skillIcons[index] ?? Wrench;

            return (
            <article className="skill-card" key={group.title.en}>
              <div className="skill-card-title">
                <GroupIcon aria-hidden="true" size={18} />
                <h3>{getLocalizedText(group.title, locale)}</h3>
              </div>
              <div className="tag-row">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
            );
          })}
        </div>
      </Section>

      <Section section={findSection("contact")} locale={locale} className="contact-section">
        <div className="contact-panel">
          <div className="contact-panel-copy">
            <h3>{locale === "en" ? "Let's connect" : "保持联系"}</h3>
            <p>
              {locale === "en"
                ? "I am currently based at Cranfield University. You can reach me through either of the contact routes below."
                : "我目前在英国 Cranfield University，可通过下方的英国学校邮箱或中国常用联系方式与我联系。"}
            </p>
          </div>
          <div className="contact-grid">
            {profile.contacts.map((contact) => (
              <article className="contact-card" key={contact.id}>
                <div className="contact-card-header">
                  <MapPin aria-hidden="true" size={20} />
                  <div>
                    <p>{getLocalizedText(contact.label, locale)}</p>
                    <h3>{getLocalizedText(contact.organization, locale)}</h3>
                  </div>
                </div>
                <address>{getLocalizedText(contact.address, locale)}</address>
                <div className="contact-actions">
                  <a href={`mailto:${contact.email}`}>
                    <Mail aria-hidden="true" size={18} />
                    <span>{contact.email}</span>
                  </a>
                  {contact.phone ? (
                    <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
                      <Phone aria-hidden="true" size={18} />
                      <span>{contact.phone}</span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          <div className="contact-actions contact-back-link">
            <a href="#home">
              <ArrowUp aria-hidden="true" size={18} />
              {locale === "en" ? "Back to top" : "回到顶部"}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
