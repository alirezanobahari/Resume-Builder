import Avatar, { AvatarProps } from "../Avatar";
import DetailBox from "../DetailBox";
import SkillList, { SkillListProps } from "../SkillList";
import SkillTags, { SkillTagsProps } from "../SkillTags";
import TitleBox from "../TitleBox";
import "./style.css";

export interface SidebarProps extends Partial<AvatarProps> {
  phoneNumber: string;
  email: string;
  skype: string;
  socialLinks?: { title: string; link: string }[];
  skills: SkillTagsProps["skills"];
  languages: SkillListProps["skills"];
}

function Sidebar({
  avatar,
  phoneNumber,
  email,
  skype,
  socialLinks,
  skills,
  languages,
}: SidebarProps) {
  return (
    <div className="side-bar">
      {avatar && <Avatar avatar={avatar} />}
      <div className="detail-box-holder">
        <DetailBox title="DETAILS" spacing="large">
          <TitleBox title="PHONE">
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </TitleBox>
          <TitleBox title="EMAIL">
            <a href={`mailto:${email}`}>{email}</a>
          </TitleBox>
          <TitleBox title="SKYPE">
            <a href={`skype:${skype}`}>{skype}</a>
          </TitleBox>
        </DetailBox>
        {socialLinks && (
          <DetailBox title="LINKS" spacing="large">
            {socialLinks.map(({ title, link }) => (
              <a key={title} href={link}>
                {title}
              </a>
            ))}
          </DetailBox>
        )}
        <DetailBox title="KEY SKILLS" spacing="large">
          <SkillTags skills={skills} />
        </DetailBox>
        <DetailBox title="LANGUAGES" spacing="large">
          <SkillList skills={languages} />
        </DetailBox>
      </div>
    </div>
  );
}

export default Sidebar;
