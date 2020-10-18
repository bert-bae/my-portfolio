module.exports = {
  contactInfo: {
    address: "3970 Carrigan Court, Burnaby, BC, V3N 4S5",
    email: "elbert.bae@gmail.com",
    number: "(778) 908-0350",
    website: "https://bert-bae.github.io/my-portfolio",
    github: "https://github.com/bert-bae",
    linkedin: "https://www.linkedin.com/in/bert92/",
  },

  aboutMe:
    "Full-stack software developer working in the NodeJS environment with experience developing full-stack web applications in NodeJS using Javascript, EJS, Express, Objection, 3rd party APIs, and SQL databases. Experience building with React and NextJS in personal projects, but looking for industry experience to gain further knowledge about best practices. With my current knowledge around MVC architecture and program design, I am familiar with writing clean and scale-able code and always seeking more information to improve my capabilities. Significant experience in management, training, and sales with clear written and spoken communication skills between colleagues and clients mostly in problem resolution focused environments to achieve results.",

  projects: [
    {
      title: "Flooding",
      description:
        "Climate change is a real threat and as a developer, I wanted to create something that can share the impacts of rising water levels on our coastal cities. Using MapboxGL, custom layers, and React, this quick client-side project provides users a visual layout of the effects of rising water levels. Explore the map and see what areas are at risk of flooding based on 10 meter incremental rises in our ocean water levels.",
      techStack: ["React", "TypeScript", "MapboxGL"],
      imgSrc: [
        "images/projects/flooding-1.png",
        "images/projects/flooding-2.png",
      ],
      projectUrl: "https://github.com/bert-bae/flooding",
    },
    {
      title: "Starwars-Scroll",
      description:
        "Starwars scroll mimmicks the popular StarWars film's introductions. The simple UI and backend is created using React, DynamoDB, and Lambdas. The site is deployed on S3 with the serverside being deployed using AWS SAM which uses Cloudformation. Create and edit your own story and if you want to share it, create a shareable link that you can send to your friends. The links are stored temporarily for 7 days allowing you to send messages to friends in a fun way.",
      techStack: [
        "NodeJs",
        "React",
        "DynamoDB",
        "Serverless",
        "AWS",
        "Cloudfront/S3",
      ],
      imgSrc: [
        "images/projects/starcrawl-1.png",
        "images/projects/starcrawl-2.png",
        "images/projects/starcrawl-3.png",
      ],
      projectUrl: "https://github.com/bert-bae/starwars-scroll",
    },
    {
      title: "Scraper",
      description:
        "Scraper is a simple tool built while practicing Typescript. By supplying a YAML configuration file with the scraping paths, instructions, and the site URL (serverside rendered sites only as a part of this demo), Scraper will grab the data and format it in a clean JSON format based on the configuration provided. The YAML configuration allows you to create repeatable instructions for the program to pull information from a site in the same format every time. Perfect for repeating cron jobs to pull information from a site on a scheduled time or for one time uses.",
      techStack: ["NodeJs", "TypeScript", "Jest"],
      imgSrc: [],
      projectUrl: "https://github.com/bert-bae/scraper",
    },
    {
      title: "NuBrew",
      description:
        "NuBrew is an application that allows users to vote on their craft beer drinks and keep track of favorited drinks over time. As users expand their set of craft beers tried over time, the application will provide recommendations based on their previous likes based on IBU and category/style of drink. Of course, users need to be able to take that plunge and explore uncharted territories by trying something new by random as well, even if they really don't like that one style, taste changes over time!\n\nWe want to make it as easy as possible, so for those that bought their drinks with labels, the application was created while experimenting machine learning and label recognition using Google AutoML Vision.\n\nIn collaboration with Adam Romeo (https://adamromeo.dev/)",
      techStack: [
        "React-Native",
        "PostgreSql",
        "Knex",
        "NodeJS",
        "Express",
        "SaSS",
        "Google AutoML",
      ],
      imgSrc: [
        "images/projects/nubrew.png",
        "images/projects/nubrewExample.gif",
        "images/projects/nubrewExample2.gif",
      ],
      projectUrl: "https://github.com/bert-bae/nubrew",
    },
  ],

  education: [
    {
      title: "Lighthouse Labs",
      duration: "Oct 2018 - Jan 2019",
      responsibilities: ["Fullstack Web Development"],
    },
    {
      title: "Simon Fraser University",
      duration: "Sept 2012 - Dec 2015",
      responsibilities: ["B.A. Psychology, Minor in Business Administrations"],
    },
  ],

  devSkills: [
    "REST",
    "Amazon Web Services",
    "Serverless",
    "NodeJs",
    "JavaScript",
    "TypeScript",
    "Express",
    "DynamoDB",
    "SQL",
    "Jest/Mocha/Chai",
    "HTML/CSS/SASS",
    "React",
    "NextJs",
    "Stripe API",
    "Webpack",
    "JQuery",
  ],

  otherSkills: [
    "Management",
    "Problem Solving",
    "Data analysis",
    "Training & Development",
    "Sales",
  ],

  workExperience: [
    {
      title: "Software Engineer",
      company: "Rival Technologies",
      address: "1199 W Hastings St #300, Vancouver, BC",
      duration: "October 2019 - Current",
      responsibilities: [
        "Developing and maintaining backend services for event-driven microservice systems.",
        "Working with serverless architecture with AWS using Lambdas, DynamoDB, and SQS to create fast, responsive, and highly scalable responding systems.",
        "Working in teams to design, create, and deploy services across frontend and backend teams for continuous feature deliveries.",
        "Supporting DevOps investigate production bugs, data corruption, and performance issues to fix issues impacting end users.",
        "Supporting frontend development when required to help meet deadlines for feature development.",
        "Setting up CI/CD pipeline configurations in CircleCI and Bitbucket.",
      ],
    },
    {
      title: "Software Developer",
      company: "Colinkz Media",
      address: "610 - 610 Granville Street, Vancouver, BC",
      duration: "Jan 2019 - March 2020",
      responsibilities: [
        "Working with UI/UX designer wireframes to develop website designs and features.",
        "Participating in business development discussions with the team for future development direction.",
        "Interacting remotely or in-person with team members on daily Agile scrums.",
        "Fullstack development of the company site and maintaining bug fixes, style revisions, and future development.",
        "Implementing APIs to gather information to speed up event creation and marketing channels.",
        "Implementing Stripe API to begin payment and market business channels.",
        "Implementing React using Webpack and Babel to compile its implementation into a an existing Express and EJS project.",
      ],
    },
    {
      title: "Membership Experience Manager",
      company: "YMCA of Greater Vancouver",
      address: "282 West 49th Avenue, Vancouver, BC",
      duration: "Feb 2017 - Oct 2018",
      responsibilities: [
        "Managing and delivering daily operation of the customer service and sales team to improve customer engagement.",
        "Engaging across departments to improve satisfaction rating from 65-70% to 85-90% over 10 months.",
        "Increasing average monthly membership aquisition and retention consistently in 2017 - 2018.",
        "Planning and delivering on-going customer service and conflict resolution training, improving conflict resolution with customers",
        "Developing spreadsheet tools to automate accurate scheduling, expense tracking, and sales goal generation to generate catered sales targets for team members",
        "Active problem solving to resolve issues across the facility with staff, customers, and other departments.",
      ],
    },
  ],

  volunteerExperience: [
    {
      title: "YAC Council",
      company: "YMCA of Greater Vancouver",
      address: "Vancouver, BC",
      duration: "Apr 2016 – Oct 2018",
      responsibilities: [],
    },
    {
      title: "Peer Health Educator",
      company: "Simon Fraser University",
      address: "Burnaby, BC",
      duration: "Sep 2014 – Mar 2016",
      responsibilities: [],
    },
    {
      title: "Wildlife Conservation",
      company: "International Volunteer HQ (NPO)",
      address: "Ambalangoda, Sri Lanka",
      duration: "Jul 2014 – Aug 2014  ",
      responsibilities: [],
    },
    {
      title: "Tutor",
      company: "International Volunteer HQ (NPO)",
      address: "Faridabad, India",
      duration: "Jun 2014 – Jul 2014",
      responsibilities: [],
    },
  ],

  interests: [
    "Rock climbing",
    "Hiking",
    "Camping",
    "Swimming",
    "Travelling",
    "Learning",
  ],
};
