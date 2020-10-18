export default {
  // Site jumbotron photos
  jumboPhotos: {
    homeJumbo: {
      photographer: "Nate Grant",
      filepath: "images/home-jumbo.jpg",
      link: "https://unsplash.com/@nateggrant",
      header: "About",
    },
    projectJumbo: {
      photographer: "Galymzhan Abdugalimov",
      filepath: "images/project-jumbo.jpg",
      link: "https://unsplash.com/@naffiq",
      header: "Projects",
    },
    resumeJumbo: {
      photographer: "Clark Young",
      filepath: "images/resume-jumbo.jpg",
      link: "https://unsplash.com/@cbyoung",
      header: "Resume",
    },
  },

  // Project mock data
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
        "AWS Lambdas",
        "AWS SAM",
        "Cloudfront/S3",
        "Serverless",
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
    {
      title: "ChattyApp",
      description:
        "This is a Chat application that was created as a part of Lighthouse Lab's program while learning and experimenting with React and Websockets. You can connect with others on the local network via websockets to have a conversation! Domain specific languages were implemented as experimentation as well as logic to allow emojis, images, and username modification.\n\nNot crazy, but interesting first step learning React with Websockets!",
      techStack: [
        "NodeJS",
        "Javascript",
        "React",
        "Websockets",
        "Express",
        "SaSS",
      ],
      imgSrc: [
        "images/projects/chatty1.png",
        "images/projects/chatty2.png",
        "images/projects/chatty3.png",
        "images/projects/chatty4.png",
      ],
      projectUrl: "https://github.com/bert-bae/chattyapp",
    },
    {
      title: "Red Square",
      description:
        "As a rushed one week challenge, a group of us created an event creation platform for users to share their events by link for users to vote on their available times (copy of doodle).\n\nIn partnership with Dawson Ley (https://github.com/Anarchonist7) and Mark Barlescu.",
      techStack: [
        "Javascript",
        "jQuery",
        "PostgreSql",
        "Knex",
        "EJS",
        "Express",
        "Ajax",
        "SaSS",
      ],
      imgSrc: [
        "images/projects/rs1.png",
        "images/projects/rs2.png",
        "images/projects/rs3.png",
        "images/projects/rs4.png",
        "images/projects/rs5.png",
      ],
      projectUrl: "https://github.com/bert-bae/outdoodle",
    },
    {
      title: "Colinkz Media",
      description:
        "Colinkz is founded by Noi Soudarack. It is intended to be a platform for communities to connect with other cultural groups by providing access to events, restaurants, and directories to local organizations for many cultural groups. As a software developer for Colinkz, I worked closely with the founder, CTO, and designers to develop and maintain existing and new features for the company website.\n\nIf interested, learn more about what we do and support our goal of increasing multicultural diversity across the world!\n\n Link:  https://www.colinkz.com",
      techStack: [
        "Unfortunately this information cannot be released as it is the intellectual property of the organization!",
      ],
      imgSrc: [
        "images/projects/colinkz1.jpg",
        "images/projects/colinkz2.jpg",
        "images/projects/colinkz3.jpg",
        "images/projects/colinkz-logo.png",
      ],
      projectUrl: "https://www.colinkz.com",
    },
  ],
};
