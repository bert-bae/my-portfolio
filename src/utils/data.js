export default {
  home: `SELECT linkedin, github, phone, personal_email, work_email FROM user\n  WHERE owner = 1 LIMIT 1;`,
  projects: 'SELECT title, project_link, program_language, description, tech_stack FROM projects\n  WHERE owner = 1;',
  resume: 'SELECT summary, work_experience, other_skills, interests FROM user\n  WHERE owner = 1;',
  about: 'SELECT about_me, tech_skills FROM user\n  WHERE owner = 1;',

  // Site jumbotron photos
  jumboPhotos: {
    homeJumbo: {
      photographer: "Nate Grant",
      filepath: "/images/home-jumbo.jpg",
      link: "https://unsplash.com/@nateggrant"
    },
    projectJumbo: {
      photographer: "Galymzhan Abdugalimov",
      filepath: "/images/project-jumbo.jpg",
      link: "https://unsplash.com/@naffiq"
    },
    resumeJumbo: {
      photographer: "Clark Young",
      filepath: "/images/resume-jumbo.jpg",
      link:"https://unsplash.com/@cbyoung"
    }
  },

  // Project mock data
  projects: [
    {
      title: "hello",
      description: "description",
      techStack: "nodejs, react, javascript",
      imgSrc: "/images/home-img1.jpg",
      projectUrl: "https://www.github.com",
    },
    {
      title: "world",
      description: "description two",
      techStack: "nodejs, react, javascript",
      imgSrc: "/images/home-img2.jpg",
      projectUrl: "https://www.github.com",
    },
    {
      title: "hello",
      description: "description",
      techStack: "nodejs, react, javascript",
      imgSrc: "/images/home-img1.jpg",
      projectUrl: "https://www.github.com",
    },
    {
      title: "world",
      description: "description two",
      techStack: "nodejs, react, javascript",
      imgSrc: "/images/home-img2.jpg",
      projectUrl: "https://www.github.com",
    },
    {
      title: "hello",
      description: "description",
      techStack: "nodejs, react, javascript",
      imgSrc: "/images/home-img1.jpg",
      projectUrl: "https://www.github.com",
    },
    {
      title: "world",
      description: "description two",
      techStack: "nodejs, react, javascript",
      imgSrc: "/images/home-img2.jpg",
      projectUrl: "https://www.github.com",
    },
  ]
}