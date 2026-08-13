"use client";

import {
  ArrowDown,
  ArrowUpRight,
  FolderGit2,
  Gamepad2,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { projects } from "@/content/projects";
import { hobby } from "@/content/sections";
import { siteContent } from "@/content/site";
import { getLocalizedText } from "@/content/types";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { locale } = useLanguage();
  const { profile } = siteContent;

  return (
    <section id="home" className="hero-section">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles aria-hidden="true" size={16} />
            {getLocalizedText(profile.role, locale)}
          </p>
          <h1>{getLocalizedText(profile.name, locale)}</h1>
          <p className="hero-tagline">{getLocalizedText(profile.tagline, locale)}</p>
          <div className="hero-focus-list" aria-label="Research fields">
            {profile.focus.map((item) => (
              <span key={item.en}>{getLocalizedText(item, locale)}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#projects" className="primary-action">
              {getLocalizedText(profile.actions.primary, locale)}
              <ArrowDown aria-hidden="true" size={17} />
            </a>
            <a href="#contact" className="secondary-action">
              <Mail aria-hidden="true" size={17} />
              {getLocalizedText(profile.actions.secondary, locale)}
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin aria-hidden="true" size={16} />
              {profile.contacts
                .map((contact) => getLocalizedText(contact.organization, locale))
                .join(" · ")}
            </span>
          </div>
          <div className="hero-email-list" aria-label={locale === "en" ? "Email addresses" : "邮箱地址"}>
            {profile.contacts.map((contact) => (
              <a href={`mailto:${contact.email}`} className="hero-email-link" key={contact.id}>
                <Mail aria-hidden="true" size={16} />
                <span>
                  <strong>
                    {contact.id === "cranfield"
                      ? locale === "en"
                        ? "Cranfield email"
                        : "Cranfield 邮箱"
                      : locale === "en"
                        ? "China email"
                        : "国内常用邮箱"}
                  </strong>
                  {contact.email}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-profile-content" aria-label={locale === "en" ? "Profile overview" : "个人概况"}>
          <div className="lead-panel hero-intro-panel">
            <p>{getLocalizedText(profile.intro, locale)}</p>
          </div>
          <div className="metrics-grid hero-metrics">
            <div>
              <strong>{projects.length}</strong>
              <span>{locale === "en" ? "project tracks" : "项目方向"}</span>
            </div>
            <div>
              <strong>2027</strong>
              <span>{locale === "en" ? "expected graduation" : "预计毕业"}</span>
            </div>
            <div>
              <strong>2</strong>
              <span>{locale === "en" ? "research fields" : "研究领域"}</span>
            </div>
          </div>
          <article className="hobby-card hero-hobby-card">
            <div className="hobby-card-header">
              <div className="card-icon">
                <Gamepad2 aria-hidden="true" size={20} />
              </div>
              <div>
                <p>{locale === "en" ? "Personal Interest" : "兴趣爱好"}</p>
                <h2>{getLocalizedText(hobby.title, locale)}</h2>
              </div>
            </div>
            <p>{getLocalizedText(hobby.body, locale)}</p>
            <div className="hobby-links">
              <a
                className="project-repository-link"
                href={hobby.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FolderGit2 aria-hidden="true" size={17} />
                {locale === "en" ? "View GitHub Project" : "查看 GitHub 项目"}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a
                className="project-repository-link"
                href={hobby.workshopUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Gamepad2 aria-hidden="true" size={17} />
                {locale === "en" ? "Steam Workshop" : "Steam 创意工坊"}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
