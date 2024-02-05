import {
  web,
  mobile,
  backend,
  creator,
  accenture,
  amex,
  maybank,
  silverlake,
  jira,
  confluence,
  vts,
  mc,
  dbeaver,
  postman,
  office,
  project,
  visio,
  figma,
  html,
  css,
  javascript,
  git,
  mbbpg,
  mbbtoll,
  mobius,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Requirement Gathering & Analysis",
    icon: web,
  },
  {
    title: "Business Process Improvement",
    icon: mobile,
  },
  {
    title: "Project Lifecycle Management",
    icon: backend,
  },
  {
    title: "Agile Framework",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Confluence",
    icon: confluence,
  },
  {
    name: "VTS",
    icon: vts,
  },
  {
    name: "MC",
    icon: mc,
  },
  {
    name: "DBeaver",
    icon: dbeaver,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Office",
    icon: office,
  },
  {
    name: "Project",
    icon: project,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "Jun 2006 - Nov 2009",
    points: [
      "Acquire proficiency in relevant programming languages, frameworks, and tools through training programs and hands-on projects.",
      "Contribute to coding tasks, develop software components, and follow coding standards and best practices.",
      "Engage in effective communication with team members, participate in team meetings, and contribute ideas to enhance the overall project.",
      "Be flexible and open to learning new technologies, methodologies, and processes, while actively seeking feedback to improve your skills and contribute effectively to the team.",
    ],
  },
  {
    title: "Test Lead",
    company_name: "American Express",
    icon: amex,
    iconBg: "#E6DEDD",
    date: "Sep 2006 - Nov 2009",
    points: [
      "Responsible for creating a comprehensive test strategy, outlining the overall approach, resources, and scope of testing activities to ensure effective test coverage.",
      "Selecting appropriate testing tools and frameworks, then overseeing their implementation to optimize the testing process, automation, and overall efficiency.",
      "Design and set up the test environments, ensuring that they accurately simulate assigned requirements.",
      "Provide leadership in quality assurance efforts, collaborating with development teams to enforce best practices, review test plans, and continuously improve testing processes throughout the software development life cycle.",
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Maybank",
    icon: maybank,
    iconBg: "#383E56",
    date: "Nov 2009 - Nov 2023",
    points: [
      "Collect and analyze information from stakeholders to understand their needs and translate them into detailed and actionable requirements for development teams.",
      "Examine and evaluate existing business processes, identifying areas for improvement, efficiency gains, or cost reductions, and recommend solutions to enhance overall business performance.",
      "Analyze data to provide insights that support decision-making. They help organizations understand trends, patterns, and potential areas for improvement by leveraging data-driven approaches.",
      "Facilitate discussions between various stakeholders, ensuring alignment on project goals, managing expectations, and fostering collaboration for successful project outcomes.",
    ],
  },
  {
    title: "Senior Business Analyst",
    company_name: "Silverlake",
    icon: silverlake,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Cultivating strong relationships with clients, understanding their business needs, and acting as a trusted advisor to ensure client satisfaction and long-term partnerships.",
      "Taking a leadership role in gathering and defining project requirements, ensuring a comprehensive understanding of client expectations and guiding the vendor team in delivering tailored solutions.",
      "Providing oversight throughout the project lifecycle, monitoring progress, ensuring milestones are met, and addressing any issues promptly to deliver projects on time and within scope.",
      "Offering strategic insights and recommendations to clients, leveraging industry knowledge and expertise to help them achieve their business objectives through effective use of the vendor's services and solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Amazing!",
    name: "Amazed Person",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Rare. Well Done.",
    name: "Steak Lover",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "🥹🥰",
    name: "Socmed Influencer",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Maybank Payment Gateway",
    description:
      "It’s a complete payment solution for any business, from small merchants to established businesses.",
    tags: [
      {
        name: "maybank",
        color: "blue-text-gradient",
      },
      {
        name: "online",
        color: "green-text-gradient",
      },
      {
        name: "cards",
        color: "pink-text-gradient",
      },
    ],
    image: mbbpg,
    source_code_link: "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/digital_banking/maybank2u_pay.page",
  },
  {
    name: "Maybank Highway Open Payment Project",
    description:
      "Contactless Payment on Highways With Maybank Debit Card.",
    tags: [
      {
        name: "maybank",
        color: "blue-text-gradient",
      },
      {
        name: "tolls",
        color: "green-text-gradient",
      },
      {
        name: "cards",
        color: "pink-text-gradient",
      },
    ],
    image: mbbtoll,
    source_code_link: "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/announcements/2023/september/highway-contactless-payment.page?#:~:text=We%20are%20pleased%20to%20announce,seamlessly%20pay%20for%20toll%20fares.",
  },
  {
    name: "Möbius Open Banking Platform",
    description:
      "A newly designed banking platform – cloud-ready, API-based, customer-centric and ready for the emerging financial eco-systems and market-places.",
    tags: [
      {
        name: "mobius",
        color: "blue-text-gradient",
      },
      {
        name: "cloud",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: mobius,
    source_code_link: "https://silverlake-digital-economy.com/index.php",
  },
];

export { services, technologies, experiences, testimonials, projects };
