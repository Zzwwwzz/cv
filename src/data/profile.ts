import { type Profile } from "../types";

export const PROFILE: Profile = {
  name: "JANI HARTIKAINEN",
  role: "SOFTWARE DEVELOPER",
  location: "Tampere, FI",
  email: "hartjani@hotmail.com",
  phone: "[REDACTED]",
  linkedin: "https://linkedin.com/in/hartjani",
  summary:
    "Versatile M.Sc. in Civil Engineering with a background in Computer Science, eager to quickly learn new languages and frameworks.",
  skills: [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "GraphQL",
    "Bash",
    ".NET",
    "PostgreSQL",
    "CAN",
    "CODESYS",
    "YOCTO",
    "QT",
    "Linux",
    "Jenkins",
    "Docker",
    "AWS",
    "GIT",
    "Terraform",
    "REST API",
    "CI/CD",
    "Accessibility",
    "ADOBE CC",
    "MS365",
  ],
  experience: [
    {
      title: "SOFTWARE DEVELOPER",
      company: "Technion Oy",
      period: "2022 -> ",
      highlight:
        "Embedded software developer, with focus on functional safety, testing, and CI/CD. Some Full Stack projects",
    },
    {
      title: "JUNIOR STRUCTURAL ENGINEER",
      company: "Ramboll Finalnd Oy",
      period: "2018 - 2022",
      highlight:
        "Building surveys and building refurbishment design. Automation tools for survey data.",
    },
    {
      title: "COURSE ASSISTANT",
      company: "Tampere University",
      period: "2018 - 2019",
      highlight:
        "Course assistant for C++, and C++ data structures and algorithms courses. Course assistant for statics course.",
    },
    {
      title: "CONSTRUCTION WORKER",
      company: "Varies",
      period: "2013 - 2017",
      highlight:
        "Course assistant for C++, and C++ data structures and algorithms courses. Course assistant for statics course.",
    },    
  ],
  projects: [
    {
      name: "forklift",
      description:
        "Developing safety critial code in C, testing with MATCH, Creating pipeline w/ CI/CD, Jenkins, Terraform",
      tags: ["C", "safety critial", "CI/CD", "Jenkins", "Terraform", "MATCH", "CAN"],
    },
    {
      name: "trains, FS",
      description: "Developing full stack, stress testing, and developing in C",
      tags: ["REACT", "POSTGRESQL", "TS", "C", "REST API", "Testing", "CAN"],
    },
    {
      name: "trains, legacy",
      description: "Debugging and maintenance of legacy",
      tags: ["C", "Java", "Testing", "RS485", "CAN", "Debugging"],
    },
  ],
  education: [
    {
      school: "Tampere University",
      degree: "M.Sc., Civil engineering",
      period: "2013 - 2021",
    },
  ],
};