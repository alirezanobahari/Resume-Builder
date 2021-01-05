import "./style.css";

export interface SkillBulletProps {
  children: React.ReactNode;
}

function SkillBullet({ children }: SkillBulletProps) {
  return <>{children}</>;
}

export default SkillBullet;
