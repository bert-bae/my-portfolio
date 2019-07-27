module.exports = {
  contactInfo: {
    address: "3970 Carrigan Court, Burnaby, BC, V3N 4S5",
    email: "elbert.bae@gmail.com",
    number: "(778) 908-0350",
    website: "https://bert-bae.github.io/my-portfolio",
    github: "https://github.com/bert-bae",
    linkedin: "https://www.linkedin.com/in/bert92/",
  },

  aboutMe: "Full-stack software developer working in the NodeJS environment with experience developing full-stack web applications in NodeJS using Javascript, EJS, Express, Objection, 3rd party APIs, and SQL databases. Experience building with React and NextJS in personal projects, but looking for industry experience to gain further knowledge about best practices. With my current knowledge around MVC architecture and program design, I am familiar with writing clean and scale-able code and always seeking more information to improve my capabilities. Significant experience in management, training, and sales with clear written and spoken communication skills between colleagues and clients mostly in problem resolution focused environments to achieve results.",

  projects: [
    {
      title: "Happyr",
      description: "Happyr is a mock site that helps users identify happy hour deals near them. It is a simple API, website, and future mobile application. Restaurants, bars, and pubs can easily list themselves for users to locate amazing deals nearby. Users can scan for nearby restaurants and bars that offer happy hour deals with one click using their geolocation information. The list will show the happy hour times, menus, prices, and a map for its location.\n\nThis is my current on-going project currently in development. Future work will include a homepage map view of all establishments, search by name or area functionality, and mobile application.",
      techStack: ["React", "NextJS", "MySql", "Objection", "SaSS", "Express", "Knex"],
      imgSrc: [],
      projectUrl: "https://github.com/bert-bae/hapy_hr",
    },
    {
      title: "NuBrew",
      description: "NuBrew is an application that allows users to vote on their craft beer drinks and keep track of favorited drinks over time. As users expand their set of craft beers tried over time, the application will provide recommendations based on their previous likes based on IBU and category/style of drink. Of course, users need to be able to take that plunge and explore uncharted territories by trying something new by random as well, even if they really don't like that one style, taste changes over time!\n\nWe want to make it as easy as possible, so for those that bought their drinks with labels, the application was created while experimenting machine learning and label recognition using Google AutoML Vision.\n\nIn collaboration with Adam Romeo (https://adamromeo.dev/)",
      techStack: ["React-Native", "PostgreSql", "Knex", "NodeJS", "Express",  "SaSS", "Google AutoML"],
      imgSrc: ["images/projects/nubrew.png", "images/projects/nubrewExample.gif", "images/projects/nubrewExample2.gif"],
      projectUrl: "https://github.com/bert-bae/nubrew",
    },
    {
      title: "ChattyApp",
      description: "This is a Chat application that was created as a part of Lighthouse Lab's program while learning and experimenting with React and Websockets. You can connect with others on the local network via websockets to have a conversation! Domain specific languages were implemented as experimentation as well as logic to allow emojis, images, and username modification.\n\nNot crazy, but interesting first step learning React with Websockets!",
      techStack: ["NodeJS", "Javascript", "React", "Websockets", "Express",  "SaSS"],
      imgSrc: ["images/projects/chatty1.png", "images/projects/chatty2.png", "images/projects/chatty3.png", "images/projects/chatty4.png"],
      projectUrl: "https://github.com/bert-bae/chattyapp",
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
    }
  ],

  devSkills: [
    {
      name: 'REST', 
      pieData: [{
        value: 95,
        color: "#F7464A",
      },
      {
        value: 5,
        color: "black",
      }]
    },
    {
      name: 'MVC', 
      pieData: [{
        value: 95,
        color: "#F7464A",
      },
      {
        value: 5,
        color: "black",
      }]
    },
    {
      name: 'HTML/CSS/SASS', 
      pieData: [{
        value: 95,
        color: "#F7464A",
      },
      {
        value: 5,
        color: "black",
      }]
    },
    {
      name: 'Bootstrap', 
      pieData: [{
        value: 90,
        color: "#F7464A",
      },
      {
        value: 10,
        color: "black",
      }]
    },
    {
      name: 'Express', 
      pieData: [{
        value: 90,
        color: "#F7464A",
      },
      {
        value: 10,
        color: "black",
      }]
    },
    {
      name: 'Javascript', 
      pieData: [{
        value: 90,
        color: "#F7464A",
      },
      {
        value: 10,
        color: "black",
      }]
    },
    {
      name: 'jQuery', 
      pieData: [{
        value: 90,
        color: "#F7464A",
      },
      {
        value: 10,
        color: "black",
      }]
    },
    {
      name: 'AJAX', 
      pieData: [{
        value: 90,
        color: "#F7464A",
      },
      {
        value: 10,
        color: "black",
      }]
    },
    {
      name: 'Flexbox', 
      pieData: [{
        value: 90,
        color: "#F7464A",
      },
      {
        value: 10,
        color: "black",
      }]
    },
    {
      name: 'CSS-Grid', 
      pieData: [{
        value: 90,
        color: "#F7464A",
      },
      {
        value: 10,
        color: "black",
      }]
    },
    {
      name: 'SQL', 
      pieData: [{
        value: 80,
        color: "#F7464A",
      },
      {
        value: 20,
        color: "black",
      }]
    },
    {
      name: 'Objection', 
      pieData: [{
        value: 80,
        color: "#F7464A",
      },
      {
        value: 20,
        color: "black",
      }]
    },
    {
      name: 'Nodejs', 
      pieData: [{
        value: 75,
        color: "#F7464A",
      },
      {
        value: 25,
        color: "black",
      }]
    },
    {
      name: 'Babel', 
      pieData: [{
        value: 75,
        color: "#F7464A",
      },
      {
        value: 25,
        color: "black",
      }]
    },
    {
      name: 'React', 
      pieData: [{
        value: 70,
        color: "#F7464A",
      },
      {
        value: 30,
        color: "black",
      }]
    },
    {
      name: 'NextJS', 
      pieData: [{
        value: 70,
        color: "#F7464A",
      },
      {
        value: 30,
        color: "black",
      }]
    },
    {
      name: 'Stripe API', 
      pieData: [{
        value: 50,
        color: "#F7464A",
      },
      {
        value: 50,
        color: "black",
      }]
    },
    {
      name: 'UI/UX', 
      pieData: [{
        value: 50,
        color: "#F7464A",
      },
      {
        value: 50,
        color: "black",
      }]
    },
    {
      name: 'Webpack', 
      pieData: [{
        value: 40,
        color: "#F7464A",
      },
      {
        value: 60,
        color: "black",
      }]
    },
    {
      name: 'Ruby', 
      pieData: [{
        value: 20,
        color: "#F7464A",
      },
      {
        value: 80,
        color: "black",
      }]
    },
    {
      name: 'Rails', 
      pieData: [{
        value: 15,
        color: "#F7464A",
      },
      {
        value: 85,
        color: "black",
      }]
    },
    {
      name: 'WebSockets', 
      pieData: [{
        value: 15,
        color: "#F7464A",
      },
      {
        value: 85,
        color: "black",
      }]
    },
  ],

  otherSkills: [
    'Management',
    'Problem Solving',
    'Data analysis',
    'Training & Development',
    'Sales',
  ],

  workExperience: [
    {
      title: "Software Developer",
      company: "Colinkz Media",
      address: "610 - 610 Granville Street, Vancouver, BC",
      duration: "Jan 2019 - Current",
      responsibilities: [
        "Working with UI/UX designer wireframes to develop website designs and features.",
        "Participating in business development discussions with the team for future development direction.",
        "Interacting remotely or in-person with team members on daily Agile scrums.",
        "Fullstack development of the company site and maintaining bug fixes, style revisions, and future development.",
        "Implementing APIs to gather information to speed up event creation and marketing channels.",
        "Implementing Stripe API to begin payment and market business channels.",
        "Implementing React using Webpack and Babel to compile its implementation into a an existing Express and EJS project."
      ]
    },
    {
      title: "Service & Sales Trainer",
      company: "Self-Employed",
      address: "Lower Mainland",
      duration: "Feb 2018 - Current",
      responsibilities: [
        "Presenting training on core skills the participants can use to succeed in their future roles working in service, sales, and team environments.",
        "Workshops include training and guidance around problem solving, sales strategies, and soft skills such as: effective communication, professionalism, and working with teams.",
      ]
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
        "Active problem solving to resolve issues across the facility with staff, customers, and other departments."
      ]
    },
  ],

  volunteerExperience: [
    {
      title: "YAC Council",
      company: "YMCA of Greater Vancouver",
      address: "Vancouver, BC",
      duration: "Apr 2016 – Oct 2018",
      responsibilities: []
    },
    {
      title: "Peer Health Educator",
      company: "Simon Fraser University",
      address: "Burnaby, BC",
      duration: "Sep 2014 – Mar 2016",
      responsibilities: []
    },
    {
      title: "Wildlife Conservation",
      company: "International Volunteer HQ (NPO)",
      address: "Ambalangoda, Sri Lanka",
      duration: "Jul 2014 – Aug 2014  ",
      responsibilities: []
    },
    {
      title: "Tutor",
      company: "International Volunteer HQ (NPO)",
      address: "Faridabad, India",
      duration: "Jun 2014 – Jul 2014",
      responsibilities: []
    },
  ],
  
  interests: [
    'Rock climbing',
    'Hiking',
    'Camping',
    'Swimming',
    'Travelling',
    'Learning'
  ]
    
}