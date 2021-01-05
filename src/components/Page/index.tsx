import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Content";
import "./style.css";
import { user } from "../../user";

function Page() {
  return (
    <div className="resume-page">
      <Header {...user.headerProps} />
      <Sidebar {...user.sidebarProps} />
      <Content
        skillSummary={user.skillSummary}
        professionalExperiences={user.professionalExperiences}
      />
    </div>
  );
}

export default Page;
