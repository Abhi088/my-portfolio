export const ResumeV2 = () => {
    const technicalSkills = {
        languages: {
            displayName: 'Programming Languages',
            skills: ['Java', 'C++', 'TypeScript', 'JavaScript']
        },
        databases: {
            displayName: 'Databases',
            skills: ['MongoDB', 'PostgreSQL', 'MySQL']
        },
        libraries: {
            displayName: 'Libraries/Frameworks',
            skills: ['Express.js', 'Spring Boot', 'ReactJS', 'Angular', 'Redux', 'Redux Saga', 'Tailwind CSS', 'BootStrap']
        },
        versionControl: {
            displayName: 'Tools',
            skills: ['Git', 'Postman']
        }
    };
    // const professionalSkills = ['Quick Learner', 'Agile & Scrum', 'Teamwork'];

    const experience = [
        {
            company: 'MyAnatomy Integration Pvt. Ltd., Remote',
            roles: [
                {
                    role: 'Software Developer',
                    duration: 'July 2023 – present',
                    responsibilities: [
                        'Spearheaded the development of over 20 API endpoints, which facilitated a remarkable 30% increase in data exchange efficiency, consequently elevating platform functionality and user experience.',
                        'Collaborated seamlessly within a cross-functional team to deliver 5 pivotal features, contributing to a notable 15% surge in user engagement and overall satisfaction.',
                        'Mentored and coached 3 junior team members, fostering a supportive learning environment that led to an impressive 40% enhancement in their productivity and code quality.',
                    ],
                },
                {
                    role: 'Technical Intern',
                    duration: 'Mar 2022 – June 2023',
                    responsibilities: [
                        // 'Contributed to the development of the company\'s proprietary product, MAPIT, a website designed to offer assessment tools for streamlining the hiring process.',
                        'Played a vital role in optimizing the tech stack by implementing Angular 13 for the front-end and leveraging the Maven Framework with PostgreSQL for the back-end, resulting in a significant 20% enhancement in application performance.',
                        'Received accolades for implementing UI designs, which substantially boosted user engagement metrics by 25%, showcasing a keen eye for design and user experience.',
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
            duration: 'June 2019 – May 2023',
            cpi: '8.51/10',
        },
        // {
        //     degree: 'Intermediate',
        //     institution: 'Bhavan’s Kesari Devi Kanoria Vidya Mandir, Renukoot',
        //     duration: 'May 2019',
        // },
        // {
        //     degree: 'High School',
        //     institution: 'Bhavan’s Kesari Devi Kanoria Vidya Mandir, Renukoot',
        //     duration: 'May 2017',
        // },
        // Add other education as needed
    ];

    const projects = [
        
        {
            name: 'TutorSage',
            duration: 'Nov 2021 – Feb 2022',
            role: 'Full-Stack Developer',
            responsibilities: [
                'Self-managed a full-stack project to develop a cutting-edge web application, resulting in a 25% improvement in user engagement metrics compared to previous iterations.',
                'Utilized React.js, Redux, Saga, TailwindCSS, and Typescript for front-end development, achieving a 30% reduction in loading times and a 20% increase in user satisfaction ratings based on post-launch surveys.',
                'Orchestrated the server-side infrastructure with Java-based Spring Boot Framework, optimizing API response times by 40% and ensuring seamless scalability to accommodate a 50% increase in concurrent users.',
            ],
        },
        {
            name: 'TimeBank',
            duration: 'Oct 2021 – Nov 2021',
            role: 'Full-Stack Developer',
            responsibilities: [
                'Managed a team of five developers to build a web application from scratch, employing the MERN stack.',
                'Orchestrated the creation and implementation of the server-side functionality of the web app using Node.js, Express.js, and MongoDB.',
                'Collaborated with the front-end team to design specific pages by utilizing React.js, Redux, and Tailwind CSS.',
            ],
        }
    ];

    return (
        <div className=" bg-white w-a4 h-a4 mx-0 my-auto p-8 shadow-sm text-justify">
            <h1 className="text-xl font-semibold text-black text-center">Abhishek Kumar Singh</h1>
            <p className="text-sm text-center">S S Market, Main Road, Renukoot, UP</p>
            <p className="text-sm text-center">
                <a href="mailto:abhicoding8@gmail.com" target="_blank" rel="noopener noreferrer">abhicoding8@gmail.com</a> | +91 9140654872
            </p>

            <div className="flex justify-center space-x-4">
                {/* <a href="https://portfolio.com" target="_blank" rel="noopener noreferrer" className="text-sm underline text-link">Portfolio</a> */}
                <a href="https://github.com/Abhi088" target="_blank" rel="noopener noreferrer" className="text-sm underline text-link">GitHub</a>
                <a href="https://linkedin.com/in/abhi088" target="_blank" rel="noopener noreferrer" className="text-sm underline text-link">LinkedIn</a>
            </div>

            {/* <section className="summary mt-4">
                <h3 className="text-base font-semibold text-black">Summary</h3>
                <hr className="mb-2 border-black border-t-1" />
                <p className="text-xs">Experienced full-stack software developer proficient in both front-end and back-end development, consistently delivering high-quality work ahead of schedule.</p>
            </section> */}

            {/* <section className="skills mt-4 */}
                {/* <h3 className="text-base font-semibold text-black">Technical Skills</h3>
                <hr className="mb-2 border-black border-t-1" />
                {Object.entries(technicalSkills).map(([category, { displayName, skills }]) => (
                    <div key={category} className="flex items-baseline space-x-2">
                        <h4 className="text-xs font-semibold text-black">{displayName} - </h4>
                        <p className="text-xs">{skills.join(', ')}</p>
                    </div>
                ))} */}

                {/* <h3 className="text-base font-semibold text-black mt-2">Professional Skills</h3>
                <hr className="mb-2 border-black border-t-1" />
                <p className="text-xs">{professionalSkills.join(', ')}</p> */}
            {/* </section> */}

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
                                <span className="italic"><b className="font-semibold">{edu.cpi}</b>, {edu.degree}</span>, &nbsp;
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