import clsx from "clsx";
import iff from "../../core/helper/iff";
import "./style.css";

export interface GradeProps {
  grade: number;
}

function Grade({ grade }: GradeProps) {
  return (
    <div className="grade-holder">
      {[...Array(5)].map((_, index) => (
        <span
          className={clsx("grade", iff(index + 1 <= grade, "fill"))}
          key={index}
        />
      ))}
    </div>
  );
}

export default Grade;
