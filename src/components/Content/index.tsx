import DetailBox from "../DetailBox";
import Experience, { ExperienceProps } from "../Experience";
import SkillBullet, { SkillBulletProps } from "../SkillBullet";
import './style.css'

export interface ContentProps {
  skillSummary: SkillBulletProps["children"];
  professionalExperiences: ExperienceProps[];
}

function Content({ skillSummary, professionalExperiences }: ContentProps) {
  return (
    <div className="content-holder">
      <DetailBox title="SKILL SUMMARY">
        <SkillBullet>{skillSummary}</SkillBullet>
      </DetailBox>
      <DetailBox title="PROFESSIONAL EXPERIENCE">
        {professionalExperiences.map((experience) => (
          <Experience key={experience.company} {...experience} />
        ))}
      </DetailBox>
    </div>
  );
}

export default Content;
