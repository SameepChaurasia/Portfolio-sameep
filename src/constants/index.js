export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Bharat Estates',
      desc: 'This is a property renting/buying/listing site where you can buy or rent property you like or even list out your own also with signin function with google authentication also it uses mondodb data base for storing client data and property details etc...',
      subdesc:
        'TechStacks Used -> Html/Tailwind/Javascript/React/Vite/MongoDb/Express/Node js and Firebase for google authentication system',
      href: 'https://github.com/SameepChaurasia/Bharat_Estates',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/javascript.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongoDB.png',
        },
        {
          id: 5,
          name: 'nodejs',
          path: '/assets/nodejs.png',
        },
      ],
    },
    {
      title: 'The Car Show',
      desc: 'This is a car renting app which help u find your car according to your choice like in type Gas/fuel/electric or of which year model you want and can select car brand and its model according to your choice and can view all the details like mileage and model type like is it SUV/Sedan/Coup etc',
      subdesc:
        'Techstacks used -> Html/Css , Tailwind CSS, React Js,Next Js, NodeJs, javascript,Typescript , API(Rapid API) for fetching car data',
      href: 'https://github.com/SameepChaurasia/The_car_show',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'nodejs',
          path: '/assets/nodejs.png',
        },
      ],
    },
    {
      title: 'Text to Voice Converter',
      desc: 'This is a web app which can convert your written text or note in voice message or speech with the support of more than 100 language and voice assistant it gives you variety of options to explore which voice you like ',
      subdesc:
        'Techstack - Dynamic HTML',
      href: 'https://github.com/SameepChaurasia/Text-to-Voice-Converter',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'javascripts',
          path: '/assets/javascript.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.05 : 0.06,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 7, 0] : isTablet ? [-12, 7, 0] : [-24, 7, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Self Learning',
      pos: 'Building projects and Learning of my own ',
      duration: '2022 - Till now',
      title: " Languages: C++, JavaScript, TypeScript, Python || Frontend: Dynamic HTML, TailwindCSS, React.js, Next.js, WebRTC || Backend: Node.js, Express.js, Prisma, REST APIs, MongoDB, PostgreSQL || Cloud & DevOps: Docker, Kubernetes, Linux, Git/GitHub || Systems & Automation: Kafka, Zapier || Problem Solving: Strong foundation in Data Structures & Algorithms (C++)",
      icon: '/assets/sameeppng.png',
      animation: 'salute',
    },
    {
      id: 1,
      name: 'Founder - The Coders Trade',
      pos: 'Built a platform where you can learn about trading and see realtime charts with the filters of your choice ',
      duration: '10/10/24- Till now',
      title: "",
      icon: '/assets/coderstrade.png',
      animation: 'salute',
    },
  ];