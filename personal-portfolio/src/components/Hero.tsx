"use client";

import { ArrowDown, BrainCircuit, Mail, MapPin, Network, Radar, Sparkles } from "lucide-react";
import { siteContent } from "@/content/site";
import { getLocalizedText } from "@/content/types";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { locale } = useLanguage();
  const { profile } = siteContent;

  return (
    <section id="home" className="hero-section">
      <div className="mx-auto grid min-h-[88vh] w-full max-w-6xl items-center gap-12 px-5 pb-14 pt-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles aria-hidden="true" size={16} />
            {getLocalizedText(profile.role, locale)}
          </p>
          <h1>{getLocalizedText(profile.name, locale)}</h1>
          <p className="hero-tagline">{getLocalizedText(profile.tagline, locale)}</p>
          <div className="hero-focus-list" aria-label="Research focus">
            {profile.focus.map((item) => (
              <span key={item.en}>{getLocalizedText(item, locale)}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#projects" className="primary-action">
              {getLocalizedText(profile.actions.primary, locale)}
              <ArrowDown aria-hidden="true" size={17} />
            </a>
            <a href={`mailto:${profile.email}`} className="secondary-action">
              <Mail aria-hidden="true" size={17} />
              {getLocalizedText(profile.actions.secondary, locale)}
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin aria-hidden="true" size={16} />
              {getLocalizedText(profile.location, locale)}
            </span>
            <span>
              <Mail aria-hidden="true" size={16} />
              {profile.email}
            </span>
          </div>
        </div>

        <div className="system-visual" aria-label="Embodied intelligence system visual">
          <div className="visual-topline">
            <span>{locale === "en" ? "Embodied AI Stack" : "具身智能栈"}</span>
            <Radar aria-hidden="true" size={18} />
          </div>
          <div className="visual-grid">
            <div className="visual-node visual-node-strong">
              <BrainCircuit aria-hidden="true" size={28} />
              <span>{locale === "en" ? "Reasoning" : "推理"}</span>
            </div>
            <div className="visual-node">
              <Network aria-hidden="true" size={24} />
              <span>{locale === "en" ? "Planning" : "规划"}</span>
            </div>
            <div className="visual-node">
              <span className="node-dot" />
              <span>{locale === "en" ? "Perception" : "感知"}</span>
            </div>
            <div className="visual-node">
              <span className="node-dot node-dot-warm" />
              <span>{locale === "en" ? "Action" : "动作"}</span>
            </div>
          </div>
          <div className="visual-pipeline" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="visual-caption">
            {locale === "en"
              ? "From multimodal understanding to deployable systems."
              : "从多模态理解走向可部署系统。"}
          </div>
        </div>
      </div>
    </section>
  );
}
