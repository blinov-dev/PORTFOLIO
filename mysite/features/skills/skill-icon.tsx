"use client";

import type { IconType } from "react-icons";
import { FiLayers, FiServer } from "react-icons/fi";
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { SkillIconId } from "@/lib/content/skills";

const iconMap: Record<SkillIconId, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  cssmodules: FiLayers,
  rtkquery: SiRedux,
  api: FiServer,
  tailwind: SiTailwindcss,
  git: SiGit,
};

type SkillIconProps = {
  id: SkillIconId;
  className?: string;
};

export function SkillIcon({ id, className = "" }: SkillIconProps) {
  const Icon = iconMap[id];
  return <Icon className={className} aria-hidden="true" />;
}
