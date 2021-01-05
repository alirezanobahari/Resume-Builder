import "./style.css";

export interface DetailBoxProps {
  title: string;
  children: React.ReactNode;
}

function DetailBox({ title, children }: DetailBoxProps) {
  return (
    <div className="detail-box">
      <h4>{title}</h4>
      <div className="detail-box-content">{children}</div>
    </div>
  );
}

export default DetailBox;
