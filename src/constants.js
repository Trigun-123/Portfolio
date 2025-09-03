import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';

import codingsamuraiLogo from './assets/company_logo/codingsamurai_logo.png';

import pesLogo from './assets/education_logo/pes_logo.png';
import jnanasudhaLogo from './assets/education_logo/jnanasudha_logo.png';
import highSchoolLogo from './assets/education_logo/highschool_logo.png';


import welth from './assets/work_logo/welth.png'
import quickchat from './assets/work_logo/quickchat.png';
import quickcart from './assets/work_logo/quickcart.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: codingsamuraiLogo,
      role: "Web-development Intern",
      company: "Coding Samurai",
      date: "September 2021 - August 2022",
      desc: "Worked as a Web-development Intern, developed and deployed a feature-rich real-time chat application, Quick Chat, using React.js, Next.js, Node.js, Express.js, MongoDB, and Socket.io, supporting 100+ concurrent users. Engineered real-time, low-latency messaging with delivery times under 100 ms using efficient WebSocket protocols.",
      skills: [
        "React JS",
        "Node JS",
        "Express JS",
        "MongoDB",
      ],
    },
  ];
  
    export const education = [
    {
      id: 0,
      img: pesLogo,
      school: "PES University, Bengaluru",
      date: "2023 - 2027",
      // grade: "6.7 CGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from PES University, Bengaluru. During my time at PES, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at PES University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: jnanasudhaLogo,
      school: "JnanaSudha Pre-University College, Ganit Nagar",
      date: "2023",
      // grade: "94.5%",
      desc: "I completed my class 12 education from JnanaSudha Pre-University College, Ganit Nagar, under the Karnataka State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "XII - PCM with Computer Science",
    },
    {
      id: 2,
      school: "Government HighSchool, Bailur",
      img: highSchoolLogo,
      date: "2021",
      // grade: "98.72%",
      desc: "I completed my Class 10 education from Government High School, Bailur, under the Karnataka State board, with a focus on Science and Mathematics.",
      degree: "X - Science and Mathematics",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Welth",
      description:
        "Developed an AI-powered finance platform with Next.js, Supabase, Prisma, and Tailwind. Implemented advanced analytics, smart receipt scanning, budget planning, and real-time multi-currency support with secure multi-account management.",
      image: welth,
      tags: ["React JS", "Next JS", "Supabase", "Shadcn UI"],
      github: "https://github.com/Trigun-123/welth",
      webapp: "https://welth-chi-ebon.vercel.app/",
    },
    {
      id: 1,
      title: "Quick Chat",
      description:
        "A real-time chat application that enables low-latency messaging with secure authentication, one-on-one conversations, and personalized privacy controls, while delivering a seamless experience through a responsive and intuitive interface.",
      image: quickchat,
      tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
      github: "https://github.com/Trigun-123/FullStackChatApplication",
      webapp: "https://full-stack-chat-application-iota.vercel.app/",
    },
    {
      id: 2,
      title: "Quick Cart",
      description:
        "Developed a responsive e-commerce cart system that managed high daily transactions. Enhanced user authentication and session security for easier access. Integrated secure multi-method payments, boosting successful checkouts.",
      image: quickcart,
      tags: ["React JS", "Next JS", "MongoDB"],
      github: "https://github.com/Trigun-123/QuickCart",
      webapp: "https://quick-cart-one-omega.vercel.app/",
    },
  ];  