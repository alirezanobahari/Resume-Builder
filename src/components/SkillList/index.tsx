import Grade from "../Grade";
import "./style.css";

export interface SkillListProps {
  skills: {
    title: string;
    grade: 1 | 2 | 3 | 4 | 5;
  }[];
}

function SkillList({ skills }: SkillListProps) {
  return (
    <ul className="skill-list">
      {skills.map(({ title, grade }) => (
        <li className="skill-item">
          <span className="title">{title}</span>
          <Grade grade={grade} />
        </li>
      ))}
    </ul>
  );
}

export default SkillList;
