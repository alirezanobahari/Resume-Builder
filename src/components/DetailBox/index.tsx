import "./style.css";

export interface DetailBoxProps {
  title: string;
  spacing?: "normal" | "large";
  children: React.ReactNode;
}

function DetailBox({ title, spacing = "normal", children }: DetailBoxProps) {
  return (
    <div className={`detail-box ${spacing}`}>
      <h4>{title}</h4>
      <div className="detail-box-content">{children}</div>
    </div>
  );
}

export default DetailBox;
