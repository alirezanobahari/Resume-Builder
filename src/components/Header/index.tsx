import "./style.css";

export interface HeaderProps {
  fullName: string;
  jobTitle: string;
}

function Header({ fullName, jobTitle }: HeaderProps) {
  return (
    <div className="header">
      <h1 className="name">{fullName}</h1>
      <p className="title">{jobTitle}</p>
    </div>
  );
}

export default Header;
