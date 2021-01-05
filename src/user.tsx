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
    avatar:
      "https://i.picsum.photos/id/723/200/300.jpg?hmac=EtJwe3DxhZ1GDiNghxWaO92pvcPcjg02wJzc7Qj7Lr0",
    phoneNumber: "+989364500236",
    email: "alireza.ra1996@gmail.com",
    socialLinks: [
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/alireza-rashideh-nobahari-a748b511b",
      },
    ],
    skills: [
      {
        title: "TypeScript",
        grade: 4,
      },
      {
        title: "JavaScript",
        grade: 4,
      },
      {
        title: "HTML/CSS",
        grade: 4,
      },
      {
        title: "ReactJs",
        grade: 4,
      },
      {
        title: "NextJs",
        grade: 3,
      },
      {
        title: "Webpack",
        grade: 3,
      },
      {
        title: "Git",
        grade: 4,
      },
    ],
    languages: [
      {
        title: "Persian",
        grade: 5,
      },
      {
        title: "English",
        grade: 3,
      },
    ],
  },
  skillSummary: (
    <ul>
      <li>
        <strong>2</strong> years of experience in <strong>UI/UX</strong>{" "}
        developing web applications and interactive software products using{" "}
        <strong>HTML 5</strong>, <strong>CSS 3</strong>,{" "}
        <strong>TypeScript</strong>, <strong>JavaScript</strong>,{" "}
        <strong>ReactJs</strong>, and <strong>ReduxJs</strong>.
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
      jobTitle: "ReactJs Developer",
      company: "Techclass",
      location: "Remote, Finland",
      startDate: "Mar 2020",
      endDate: "Present",
      skillSummary: (
        <ul>
          <li>
            Involved in an <strong>LMS</strong> project with clients from
            universities like <strong>Laurea</strong> and{" "}
            <strong>Metropolia</strong> and a partnership with{" "}
            <strong>Microsoft</strong>.
          </li>
          <li>
            Worked exclusively on the front-end project using{" "}
            <strong>Typescript</strong>, <strong>ReactJs</strong>,{" "}
            <strong>Redux</strong>, <strong>Redux-Saga</strong>,{" "}
            <strong>Material-UI</strong>, and <strong>GraphQL</strong>.
          </li>
          <li>
            Design testing plans and bring over <strong>50%</strong> code
            coverage using <strong>Jest</strong> and write over{" "}
            <strong>50</strong> E2E edge-case scenarios with{" "}
            <strong>Cypress</strong> to bring reliable functionality.
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
            Worked closely with the Design team in developing wire-frames and
            mock-ups using <strong>Figma</strong>.
          </li>
        </ul>
      ),
    },
    {
      jobTitle: "Front-End Developer",
      company: "Hastnama",
      location: "Tehran",
      startDate: "Feb 2019",
      endDate: "Feb 2020",
      skillSummary: (
        <ul>
          <li>
            Worked extensively on <strong>JavaScript</strong>,
            <strong>ReactJs</strong>, and <strong>NextJs</strong>.
          </li>
          <li>
            Designed and developed plus <strong>3</strong> e-commerce admin
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
    },
  ],
};
