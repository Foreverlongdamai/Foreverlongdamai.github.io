"use client";

import {
  ArrowUp,
  Award as AwardIcon,
  Bot,
  Boxes,
  BrainCircuit,
  CarFront,
  CodeXml,
  Eye,
  Factory,
  GraduationCap,
  Mail,
  Phone,
  Ship,
  ShoppingCart,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { projects } from "@/content/projects";
import {
  awards,
  education,
  portfolioSections,
  researchAreas,
  skillGroups,
  thoughts,
} from "@/content/sections";
import { siteContent } from "@/content/site";
import { getLocalizedText } from "@/content/types";
import { useLanguage } from "./LanguageProvider";
import { Section } from "./Section";

const researchIcons: LucideIcon[] = [Bot, Workflow, Factory];
const projectIcons: LucideIcon[] = [Ship, CarFront, ShoppingCart];
const skillIcons: LucideIcon[] = [Eye, Boxes, CodeXml, BrainCircuit];

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
      <Section section={findSection("about")} locale={locale}>
        <div className="content-stack">
          <div className="lead-panel">
            <p>{getLocalizedText(profile.intro, locale)}</p>
          </div>
          <div className="metrics-grid">
            <div>
              <strong>3</strong>
              <span>{locale === "en" ? "project tracks" : "项目方向"}</span>
            </div>
            <div>
              <strong>2027</strong>
              <span>{locale === "en" ? "M.S. graduation" : "硕士预计毕业"}</span>
            </div>
            <div>
              <strong>VLA</strong>
              <span>{locale === "en" ? "research interest" : "研究兴趣"}</span>
            </div>
          </div>
        </div>
      </Section>

      <Section section={findSection("research")} locale={locale} className="section-muted">
        <div className="card-grid">
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

      <Section section={findSection("projects")} locale={locale}>
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
            </article>
            );
          })}
        </div>
      </Section>

      <Section section={findSection("thoughts")} locale={locale} className="section-muted">
        <div className="thought-list">
          {thoughts.map((thought, index) => (
            <article className="thought-item" key={thought.title.en}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{getLocalizedText(thought.title, locale)}</h3>
                <p>{getLocalizedText(thought.body, locale)}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section section={findSection("education")} locale={locale}>
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

      <Section section={findSection("awards")} locale={locale} className="section-muted">
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

      <Section section={findSection("skills")} locale={locale}>
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
          <div>
            <h3>{locale === "en" ? "Let's connect" : "保持联系"}</h3>
            <p>
              {locale === "en"
                ? "I am continuing to expand this portfolio with new projects, research notes, and demos."
                : "我会继续把新的项目、研究笔记和 Demo 补充到这个个人网站中。"}
            </p>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={18} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
              <Phone aria-hidden="true" size={18} />
              {profile.phone}
            </a>
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
