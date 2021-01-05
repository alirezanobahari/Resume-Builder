import "./style.css";

export interface AvatarProps {
  avatar: string;
}

function Avatar({ avatar }: AvatarProps) {
  return (
    <div className="avatar-holder">
      <img className="avatar" src={avatar} alt="avatar" />
    </div>
  );
}

export default Avatar;
