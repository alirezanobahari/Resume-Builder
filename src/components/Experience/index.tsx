import SkillBullet, { SkillBulletProps } from "../SkillBullet";
import SkillTags from "../SkillTags";
import "./style.css";

export interface ExperienceProps {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: React.ReactNode;
  skillSummary: SkillBulletProps["children"];
  techStack: string[];
}

function Experience({
  jobTitle,
  company,
  startDate,
  endDate,
  location,
  description,
  skillSummary,
  techStack,
}: ExperienceProps) {
  return (
    <div className="experience">
      <div className="experience-header">
        <h3 className="job-title">
          {jobTitle} @ {company}
        </h3>
        <span className="location">{location}</span>
      </div>
      <span className="date">
        {startDate} — {endDate}
      </span>
      <div className="description">{description}</div>
      <SkillBullet>{skillSummary}</SkillBullet>
      <div className="tech-stack">
        <strong className="tech-stack-title">Tech stack:</strong>
        <SkillTags size="small" skills={techStack} />
      </div>
    </div>
  );
}

export default Experience;
