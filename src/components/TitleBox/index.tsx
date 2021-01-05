import "./style.css";

interface TitleBoxProps {
  title: string;
  children: React.ReactNode;
}

function TitleBox({ title, children }: TitleBoxProps) {
  return (
    <div className="title-box">
      <span className="title">{title}</span>
      <p className="description">{children}</p>
    </div>
  );
}

export default TitleBox;
