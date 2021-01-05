import Avatar, { AvatarProps } from "../Avatar";
import DetailBox from "../DetailBox";
import SkillList, { SkillListProps } from "../SkillList";
import TitleBox from "../TitleBox";
import "./style.css";

export interface SidebarProps extends Partial<AvatarProps> {
  phoneNumber: string;
  email: string;
  socialLinks: { title: string; link: string }[];
  skills: SkillListProps["skills"];
  languages: SkillListProps["skills"];
}

function Sidebar({
  avatar,
  phoneNumber,
  email,
  socialLinks,
  skills,
  languages,
}: SidebarProps) {
  return (
    <div className="side-bar">
      {avatar && <Avatar avatar={avatar} />}
      <div className="detail-box-holder">
        <DetailBox title="DETAILS">
          <TitleBox title="PHONE">
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </TitleBox>
          <TitleBox title="EMAIL">
            <a href={`mailto:${email}`}>{email}</a>
          </TitleBox>
        </DetailBox>
        <DetailBox title="LINKS">
          {socialLinks.map(({ title, link }) => (
            <a key={title} href={link}>
              {title}
            </a>
          ))}
        </DetailBox>
        <DetailBox title="SKILLS">
          <SkillList skills={skills} />
        </DetailBox>
        <DetailBox title="LANGUAGES">
          <SkillList skills={languages} />
        </DetailBox>
      </div>
    </div>
  );
}

export default Sidebar;
