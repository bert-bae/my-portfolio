export default {
  home: `SELECT linkedin, github, phone, personal_email, work_email FROM user\n  WHERE owner = 1 LIMIT 1;`,
  projects: 'SELECT title, project_link, program_language, description, tech_stack FROM projects\n  WHERE owner = 1;',
  resume: 'SELECT summary, work_experience, other_skills, interests FROM user\n  WHERE owner = 1;',
  about: 'SELECT about_me, tech_skills FROM user\n  WHERE owner = 1;'
}