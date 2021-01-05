import SkillBullet, { SkillBulletProps } from "../SkillBullet";
import "./style.css";

export interface ExperienceProps {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  skillSummary: SkillBulletProps["children"];
}

function Experience({
  jobTitle,
  company,
  startDate,
  endDate,
  location,
  skillSummary,
}: ExperienceProps) {
  return (
    <div className="experience">
      <div className="experience-header">
        <h3 className="job-title">
          {jobTitle}, {company}
        </h3>
        <span className="location">{location}</span>
      </div>
      <span className="date">
        {startDate} — {endDate}
      </span>
      <SkillBullet>{skillSummary}</SkillBullet>
    </div>
  );
}

export default Experience;
