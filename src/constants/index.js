import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    scet,
    mih,
    threejs,
    ashadeep,
    minglevision,
    protfolio,
    resumebuild,
    pyhton,
    django,
    java,
    php,
    c,
    cpp

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "python",
      icon: pyhton,
    },
    { 
      name: "django",
      icon: django,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "cpp",
      icon: cpp,
    },
  ];
  
  const experiences = [
    {
      title: "B.E.",
      company_name: "Sarvajanik College of Engineering and Technology(SCET)",
      icon: scet,
      iconBg: "#E6DEDD",
      date: "CGPA : 72% (till 6th sem)",
      points: [
        "March 2020 - Present",
        "University : GTU",
        "Field of Study : Computer Engineer"
      ],
    },
    {
      title: "H.S.C.",
      company_name: "Ashadeep Science Bhavan",
      icon: ashadeep,
      iconBg: "#E6DEDD",
      date: "Percentage : 80.76%",
      points: [
        "March 2018 - March 2020",
        "Board : GHSEB",
        "Field of Study : Science",
      ],
    },
    {
      title: "JEE",
      company_name: "Ashadeep Science Bhavan",
      icon: ashadeep,
      iconBg: "#E6DEDD",
      date: "PR : 92.20%",
      points: [
        "January 2020"
      ],
    },
    {
      title: "GUJCET",
      company_name: "Ashadeep Science Bhavan",
      icon: ashadeep,
      iconBg: "#E6DEDD",
      date: "PR : 85%",
      points: [
        "March 2020"
      ],
    },
    {
      title: "S.S.C",
      company_name: "Madresa Islamiya High School",
      icon: mih,
      iconBg: "#E6DEDD",
      date: "Percentage : 78%",
      points: [
        "March 2017 - March 2018",
        "Board : GHSEB",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Resume Build",
      description:
        "A resume Builder Website which take data in form and format that, resume print as PDF. Cookies are maintain for Login and Registration.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: resumebuild,
      source_code_link: "https://github.com/Krish-Na-Pal/ResumeBuild",
    },
    {
      name: "MingleVision",
      description:
        "A Video Calling and Chat website in real time. Make a room and invite to other for join with sharing room code, powered by Python and Django for a robust backend.. Website have OTP based authentication.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sqlite3",
          color: "green-text-gradient",
        },
        {
          name: "django",
          color: "pink-text-gradient",
        },
      ],
      image: minglevision,
      source_code_link: "https://github.com/Krish-Na-Pal/mingleVision",
    },
    {
      name: "Portfolio Website",
      description:
        "Explore my portfolio website, Built with Three.js for stunning 3D graphics, React for dynamic interactivity, and Tailwind CSS for sleek design, my website showcases my work in a visually engaging and user-friendly manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: protfolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  