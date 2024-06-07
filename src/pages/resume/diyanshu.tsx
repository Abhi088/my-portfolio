export const ResumeDivyanshu = () => {
    const technicalSkills = {
        languages: {
            displayName: 'Programming Languages',
            skills: ['Java', 'JavaScript']
        },
        libraries: {
            displayName: 'Libraries/Frameworks',
            skills: ['Node.js', 'Express.js', 'ReactJS', 'Redux']
        },
        databases: {
            displayName: 'Databases',
            skills: ['MongoDB', 'MySQL']
        },
        versionControl: {
            displayName: 'Tools',
            skills: ['Git & GitHub', 'Postman', 'Robo3T', 'RabbitMQ', 'VS Code']
        }
    };

    const experience = [
        {
            company: 'MyAnatomy Integration Pvt. Ltd., Remote',
            roles: [
                // {
                //     role: 'Software Developer',
                //     duration: 'July 2023 – present',
                //     responsibilities: [
                //         'Spearheaded the development of over 20 API endpoints, which facilitated a remarkable 30% increase in data exchange efficiency, consequently elevating platform functionality and user experience.',
                //         'Collaborated seamlessly within a cross-functional team to deliver 5 pivotal features, contributing to a notable 15% surge in user engagement and overall satisfaction.',
                //         'Ensured continuous improvement and seamless operation by efficiently delivering enhancements and resolving bugs, resulting in a 15 % increase in product stability',
                //         'Demonstrated rapid acquisition of essential technology skills, effectively applying practical knowledge to implement solutions with a 20% increase in efficiency.',
                //         'Mentored and coached 3 junior team members, fostering a supportive learning environment that led to an impressive 40% enhancement in their productivity and code quality.'
                //     ],
                // },
                {
                    role: 'Software Developement Intern',
                    duration: 'Jun 2023 – Present',
                    responsibilities: [
                        'Developed and maintained backend components of web applications using Node.js, Express.js, and MongoDB, ensuring 20 % increase in data processing speed.',
                        'Collaborated with a team of developers to design and implement RESTful APIs for various projects, facilitating a 30% reduction in frontend-backend communication latency.',
                        'Contributed to the architecture and design of database schemas, optimizing data storage and retrieval mechanisms for a 40% improvement in performance and scalability.',
                        'Participated in daily stand-up meetings and sprint planning sessions, achieving a 15% increase in team productivity through effective task coordination.',
                        'Implemented authentication and authorization mechanisms using JWT tokens, reducing security vulnerabilities by 50% and enhancing user data protection.'
                    ],
                },
            ],
        },
        // {
        //     company: 'Devslane, Remote',
        //     roles: [
        //         {
        //             role: 'Front-End Trainee',
        //             duration: 'July 2021 – Sept 2021',
        //             responsibilities: [
        //                 'Under the mentorship of Devslane, I participated in the creation of a student training management app using ReactJS for a web application.',
        //                 'Acquired knowledge and skills in enhancing user experience (UX) and user interface (UI) by optimizing the web app for speed, accessibility, and usability, using Redux Saga.',
        //             ],
        //         },
        //     ],
        // }
    ];

    const education = [
        {
            degree: 'Bachelor of Technology in Computer Science & Engineering',
            institution: 'GLA University, Mathura',
            duration: 'Jun 2019 – May 2023',
            cpi: '7.8/10',
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
            name: 'Learning Management System (LMS)',
            duration: 'May 2023 – Present',
            role: 'Full-Stack Developer',
            responsibilities: [
                'Streamlined adoption of cutting-edge technologies, achieving 100% deadline adherence while enhancing productivity and efficiency.',
                'Implemented RESTful APIs, enhancing the application performance and scalability.',
                'Crafted pivotal components with React and Redux, pivotal to launching major features, and provided mentorship to junior team members, fostering their growth.',
                'Managed data downloading flow using RabbitMQ for asynchronous data downloads and sharing it via email for colleges.'
            ],
        },
        {
            name: 'E-Commerce Platform',
            duration: 'Aug 2022 – Oct 2022',
            role: 'Full-Stack Developer',
            responsibilities: [
                'Solely led the development of an Ecommerce web App, leveraging a diverse skill set encompassing HTML, CSS, JavaScript, and React Js technologies.',
                'Successfully managed an array of complex challenges independently, resulting in the seamless construction of a highly functional and visually appealing online platform.',
                'Managed to overcome various challenges during the project with only minimal assistance from others, relying mostly on personal ingenuity and determination.',
            ],
        },
        {
            name: 'TimeBank',
            duration: 'Nov 2021 – Dec 2021',
            role: 'Full-Stack Developer',
            responsibilities: [
                'Led a team of 5 developers to build a cutting-edge web application from inception to launch, employing the MERN stack.',
                'Orchestrated the creation and implementation of the server-side functionality of the web app using Node.js, Express.js, and MongoDB.',
                // 'Collaborated with the front-end team to design specific pages by utilizing React.js, Redux, and Tailwind CSS.',
            ],
        }
    ];

    return (
        <div className=" bg-white w-a4 h-a4 mx-0 my-auto p-8 shadow-sm text-justify">
            <h1 className="text-3xl font-semibold text-black text-center">Divyanshu Sinha</h1>
            <p className="text-base text-center">Mahmoorganj, Varanasi, Uttar Pradesh</p>
            <p className="text-base text-center">
                <a href="mailto:divyanshu9307@gmail.com" target="_blank" rel="noopener noreferrer">divyanshu9307@gmail.com</a> | +91 8318534944
            </p>

            <div className="flex justify-center space-x-4">
                <a href="https://github.com/divyanshu9307" target="_blank" rel="noopener noreferrer" className="text-base underline text-link">GitHub</a>
                <a href="https://www.linkedin.com/in/divyanshu-sinha-0946211a0/" target="_blank" rel="noopener noreferrer" className="text-base underline text-link">LinkedIn</a>
            </div>


            <section className="skills mt-4">
                <h3 className="text-lg font-semibold text-black">Technical Skills</h3>
                <hr className="mb-2 border-black border-t-1" />
                {Object.entries(technicalSkills).map(([category, { displayName, skills }]) => (
                    <div key={category} className="flex items-baseline space-x-2">
                        <h4 className="text-xs font-semibold text-black">{displayName} - </h4>
                        <p className="text-xs">{skills.join(', ')}</p>
                    </div>
                ))}
            </section>

            <section className="experience mt-4">
                <h3 className="text-lg font-semibold text-black">Experience</h3>
                <hr className="mb-2 border-black border-t-1" />
                {experience.map((exp, index) => (
                    <div key={index} className="mt-3">
                        <h4 className="text-base font-semibold text-black">{exp.company}</h4>
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
                <h3 className="text-lg font-semibold text-black">Projects</h3>
                <hr className="mb-1 border-black border-t-1" />
                {projects.map((project, index) => (
                    <div key={index} className="mt-2 mb-4">
                        <h4 className="text-base flex justify-between items-center text-black">
                            <span>
                                <span className="font-semibold">{project.name}</span>, &nbsp;
                                <span className="italic text-xs">{project.role}</span>
                            </span>
                            <span className="text-xs">{project.duration}</span>
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
                <h3 className="text-lg font-semibold text-black">Education</h3>
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