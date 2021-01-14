import { ContentProps } from "./components/Content";
import { HeaderProps } from "./components/Header";
import { SidebarProps } from "./components/Sidebar";

interface User extends ContentProps {
  headerProps: HeaderProps;
  sidebarProps: SidebarProps;
}

export const user: User = {
  headerProps: {
    fullName: "Alireza Rashideh Nobahari",
    jobTitle: "Front-end Developer",
  },
  sidebarProps: {
    avatar: `images/avatar.jpg`,
    phoneNumber: "+98 936 450 0236",
    email: "alireza.ra1996@gmail.com",
    skype: "live:alireza.ra1996_1",
    skills: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Sass",
      "JSS",
      "React",
      "Next.js",
      "Redux",
      "Redux-Saga",
      "Material-UI",
      "Ant-Design",
      "Jest",
      "Cypress",
      "GraphQL",
      "webpack",
      "Scrum",
      "Git",
      "Git-Flow",
      "Azure DevOps",
      "PM2",
    ],
    languages: [
      {
        title: "Persian",
        grade: 5,
      },
      {
        title: "English",
        grade: 4,
      },
    ],
  },
  skillSummary: (
    <ul>
      <li>
        <strong>3</strong> years of experience in <strong>UI/UX</strong>{" "}
        developing web applications and interactive software products using{" "}
        <strong>HTML 5</strong>, <strong>CSS 3</strong>,{" "}
        <strong>TypeScript</strong>, <strong>JavaScript</strong>,{" "}
        <strong>React</strong>, and <strong>Next.js</strong>.
      </li>
      <li>
        Experienced in developing <strong>Responsive</strong> and{" "}
        <strong>mobile-friendly</strong> web apps with <strong>PWA</strong>{" "}
        support.
      </li>
      <li>
        Hands-on experience with <strong>RESTful</strong> and{" "}
        <strong>GraphQL</strong> web services.
      </li>
      <li>
        <strong>Analytical</strong> debugger and decision-maker with a good
        understanding of <strong>Unit</strong> and <strong>E2E</strong> testing.
      </li>
      <li>
        Good communication and interpersonal skills; ability to perform as part
        of a team and an individual contributor.
      </li>
    </ul>
  ),
  professionalExperiences: [
    {
      jobTitle: "Front-End Developer",
      company: "Techclass",
      location: "Remote, Finland",
      startDate: "Apr 2020",
      endDate: "Present",
      description: (
        <p>
          Techclass is an <strong>LMS</strong> startup with clients from
          universities like <strong>Laurea</strong> and{" "}
          <strong>Metropolia</strong> and a partnership with{" "}
          <strong>Microsoft</strong>.
        </p>
      ),
      skillSummary: (
        <ul>
          <li>
            Design testing plans, bring over <strong>50%</strong> code coverage
            using <strong>unit tests</strong> and write over{" "}
            <strong>50 E2E edge-case scenarios</strong> to get reliable
            functionality.
          </li>
          <li>
            Experience in debugging web applications using{" "}
            <strong>chrome developer tools</strong> and <strong>sentry</strong>.
          </li>
          <li>
            Worked in an <strong>Agile-driven environment</strong> to
            effectively maintain project timelines and utilize available
            resources.
          </li>
          <li>
            Worked closely with the Design team in developing wireframes and
            mock-ups using <strong>Figma</strong>.
          </li>
        </ul>
      ),
      techStack: [
        "TypeScript",
        "HTML",
        "JSS",
        "React",
        "Redux",
        "Redux-Saga",
        "Material-UI",
        "Jest",
        "Cypress",
        "GraphQL",
        "Git",
        "Azure DevOps",
      ],
    },
    {
      jobTitle: "Front-End Developer",
      company: "Hastnama",
      location: "Tehran",
      startDate: "March 2018",
      endDate: "March 2020 (2 yrs 1 mos)",
      description: (
        <p>
          Hastnama is a Software Company dedicated to developing solutions
          tailored to the needs of the E-commerce market.
        </p>
      ),
      skillSummary: (
        <ul>
          <li>
            Designed and developed plus <strong>three</strong> e-commerce admin
            panels and web applications, which increased the company's income by{" "}
            <strong>130%</strong>.
          </li>
          <li>
            Developed an entire contract generator web application with the
            ability to generate <strong>fully dynamic</strong> contract
            templates using <strong>DraftJs</strong>.
          </li>
          <li>
            Contribute to Iran <strong>ReactConf</strong> ticket selling system
            by designing and developing the whole sell flow.
          </li>
        </ul>
      ),
      techStack: [
        "JavaScript",
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "Sass",
        "Ant-Design",
        "Redux",
        "Redux-Saga",
        "PM2",
        "Git",
      ],
    },
  ],
};
