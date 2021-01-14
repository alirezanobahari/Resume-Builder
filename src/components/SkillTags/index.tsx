import "./style.css";

export interface SkillTagsProps {
  size?: "normal" | "small";
  skills: string[];
}

function SkillList({ skills, size = "normal" }: SkillTagsProps) {
  return (
    <ul className="skill-tags">
      {skills.map((skill) => (
        <li className={`skill-tag ${size}`}>{skill}</li>
      ))}
    </ul>
  );
}

export default SkillList;
