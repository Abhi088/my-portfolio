export const ResumeV1 = () => {
    const technicalSkills = {
        frontendFrameworks: {
            displayName: 'Frontend Frameworks',
            skills: ['ReactJS', 'Angular']
        },
        backendFrameworks: {
            displayName: 'Backend Frameworks',
            skills: ['Express.js', 'Spring Boot', 'Ninja Framework']
        },
        databases: {
            displayName: 'Databases',
            skills: ['MongoDB', 'PostgreSQL', 'MySQL']
        },
        concepts: {
            displayName: 'Concepts',
            skills: ['Data Structures', 'Algorithms']
        },
        languages: {
            displayName: 'Languages',
            skills: ['Java', 'C++', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
        },
        libraries: {
            displayName: 'Libraries',
            skills: ['Redux', 'Redux Saga']
        },
        cssFrameworks: {
            displayName: 'CSS Frameworks',
            skills: ['Tailwind CSS', 'BootStrap', 'Material-UI']
        },
        versionControl: {
            displayName: 'Version Control',
            skills: ['Git']
        }
    };
    const professionalSkills = ['Problem Solving', 'Quick Learner', 'Agile & Scrum', 'Teamwork'];

    const experience = [
        {
            company: 'MyAnatomy Integration Pvt. Ltd., Remote',
            roles: [
                {
                    role: 'Software Developer',
                    duration: 'July 2023 – present',
                    responsibilities: [
                        'Developed API endpoints, contributing to seamless data exchange and enhancing the platform\'s functionality.',
                        'Collaborated within a team to develop multiple features, showcasing effective teamwork and contributions to the product\'s success.',
                        'Continuously mentored junior team members, fostering their growth and demonstrating strong leadership abilities.',
                    ],
                },
                {
                    role: 'Technical Intern',
                    duration: 'Mar 2022 – June 2023',
                    responsibilities: [
                        // 'Contributed to the development of the company\'s proprietary product, MAPIT, a website designed to offer assessment tools for streamlining the hiring process.',
                        'Contributed to the tech stack, using Angular 13 for the front-end and Ninja Framework with PostgreSQL for the back-end.',
                        'Consistently delivered high-quality front-end solutions and received recognition for UI design implementation.',
                    ],
                },
            ],
        },
        {
            company: 'Devslane, Remote',
            roles: [
                {
                    role: 'Front-End Trainee',
                    duration: 'July 2021 – Sept 2021',
                    responsibilities: [
                        'Under the mentorship of Devslane, I participated in the creation of a student training management app using ReactJS for a web application.',
                        'Acquired knowledge and skills in enhancing user experience (UX) and user interface (UI) by optimizing the web app for speed, accessibility, and usability, using Redux Saga.',
                    ],
                },
            ],
        }
    ];

    const education = [
        {
            degree: 'Bachelor of Technology in Computer Science & Engineering',
            institution: 'GLA University, Mathura',
            duration: 'May 2023',
        },
        {
            degree: 'Intermediate',
            institution: 'Bhavan’s Kesari Devi Kanoria Vidya Mandir, Renukoot',
            duration: 'May 2019',
        },
        {
            degree: 'High School',
            institution: 'Bhavan’s Kesari Devi Kanoria Vidya Mandir, Renukoot',
            duration: 'May 2017',
        },
        // Add other education as needed
    ];

    const projects = [
        {
            name: 'TimeBank',
            duration: 'Oct 2021 – Nov 2021',
            role: 'Full-Stack Developer',
            responsibilities: [
                'Managed a team of five developers to build a web application from scratch, employing the MERN stack.',
                'Orchestrated the creation and implementation of the server-side functionality of the web app using Node.js, Express.js, and MongoDB.',
                'Collaborated with the front-end team to design specific pages by utilizing React.js, Redux, and Tailwind CSS.',
            ],
        },
        {
            name: 'TutorSage',
            duration: 'Nov 2021 – Feb 2022',
            role: 'Full-Stack Developer',
            responsibilities: [
                'Self-managed a project to create a web App using emerging technologies.',
                'Used Reactjs, Redux, Saga, TailwindCSS, Typescript for front development.',
                'Server-Side was created using Java based Spring Boot Framework and MySQL database.',
            ],
        },
    ];

    return (
        <div className=" bg-white w-a4 h-a4 mx-0 my-auto p-8 shadow-sm text-justify">
            <h1 className="text-xl font-semibold text-black text-center">Abhishek Kumar Singh</h1>
            <p className="text-sm text-center">S S Market, Main Road, Renukoot, UP</p>
            <p className="text-sm text-center">
                <a href="mailto:abhicoding8@gmail.com" target="_blank" rel="noopener noreferrer">abhicoding8@gmail.com</a> | +91 9140654872
            </p>

            <div className="flex justify-center space-x-4">
                <a href="https://portfolio.com" target="_blank" rel="noopener noreferrer" className="text-sm underline text-link">Portfolio</a>
                <a href="https://github.com/Abhi088" target="_blank" rel="noopener noreferrer" className="text-sm underline text-link">GitHub</a>
                <a href="https://linkedin.com/in/abhi088" target="_blank" rel="noopener noreferrer" className="text-sm underline text-link">LinkedIn</a>
            </div>

            <section className="summary mt-4">
                <h3 className="text-base font-semibold text-black">Summary</h3>
                <hr className="mb-2 border-black border-t-1" />
                <p className="text-xs">Experienced full-stack software developer proficient in both front-end and back-end development, consistently delivering high-quality work ahead of schedule.</p>
            </section>

            <section className="skills mt-4">
                <h3 className="text-base font-semibold text-black">Technical Skills</h3>
                <hr className="mb-2 border-black border-t-1" />
                {Object.entries(technicalSkills).map(([category, { displayName, skills }]) => (
                    <div key={category} className="flex items-baseline space-x-2">
                        <h4 className="text-xs font-semibold text-black">{displayName} - </h4>
                        <p className="text-xs">{skills.join(', ')}</p>
                    </div>
                ))}

                <h3 className="text-base font-semibold text-black mt-2">Professional Skills</h3>
                <hr className="mb-2 border-black border-t-1" />
                <p className="text-xs">{professionalSkills.join(', ')}</p>
            </section>

            <section className="experience mt-4">
                <h3 className="text-base font-semibold text-black">Experience</h3>
                <hr className="mb-2 border-black border-t-1" />
                {experience.map((exp, index) => (
                    <div key={index} className="mt-3">
                        <h4 className="text-sm font-semibold text-black">{exp.company}</h4>
                        {exp.roles.map((role, index) => (
                            <div key={index} className={index !== 0 ? 'mt-1' : ''}>
                                <h5 className="text-xs flex justify-between text-black">
                                    <span className="italic  font-semibold">{role.role}</span>
                                    <span>{role.duration}</span>
                                </h5>
                                <ul className="text-xs list-disc list-inside">
                                    {role.responsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </section>

            <section className="projects mt-4">
                <h3 className="text-base font-semibold text-black">Projects</h3>
                <hr className="mb-1 border-black border-t-1" />
                {projects.map((project, index) => (
                    <div key={index} className="mt-2">
                        <h4 className="text-xs flex justify-between text-black">
                            <span>
                                <span className="font-semibold">{project.name}</span>, &nbsp;
                                <span className="italic">{project.role}</span>
                            </span>
                            <span>{project.duration}</span>
                        </h4>
                        <ul className="text-xs list-disc list-inside">
                            {project.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="education mt-4">
                <h3 className="text-base font-semibold text-black">Education</h3>
                <hr className="mb-1 border-black border-t-1" />
                {education.map((edu, index) => (
                    <div key={index} className="mt-2">
                        <h4 className="text-xs flex justify-between text-black">
                            <span>
                                <span className="italic">{edu.degree}</span>, &nbsp;
                                <span>{edu.institution}</span>
                            </span>
                            <span>{edu.duration}</span>
                        </h4>
                    </div>
                ))}
            </section>
        </div>
    );
}