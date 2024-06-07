export const ResumeAyush = () => {
    const technicalSkills = {
        languages: {
            displayName: 'Programming Languages',
            skills: ['JavaScript', 'Java', 'TypeScript']
        },
        libraries: {
            displayName: 'Libraries/Frameworks',
            skills: ['ReactJS', 'Redux', 'Redux Thunk', 'Node.js', 'Express.js']
        },
        databases: {
            displayName: 'Databases',
            skills: ['MongoDB', 'MySQL']
        },
        versionControl: {
            displayName: 'Tools',
            skills: ['Git & GitHub', 'Postman', 'Robo3T', 'VS Code']
        }
    };

    const experience = [
        {
            company: 'MyAnatomy Integration, Remote',
            roles: [
                {
                    role: 'Software Developer',
                    duration: 'Jun 2023 – Present',
                    responsibilities: [
                        'Led feature development, enhancement initiatives, and bug resolution for MATCH, Myanatomy\'s flagship product, resulting in a 20 % increase in user satisfaction.',
                        'Managed and mentored a team of 5 interns, providing hands-on guidance in their training and resolving over 100 queries, ensuring smooth delivery of enhancements and bug fixes.',
                        'Translated Figma designs into user-friendly interfaces using React, achieving a 30% improvement in user engagement, and seamlessly integrating with APIs through Redux integration, resulting in a 25% reduction in load times.'
                    ],
                },
                {
                    role: 'Technical Intern',
                    duration: 'Mar 2022 – May 2023',
                    responsibilities: [
                        'Ensured continuous improvement and seamless operation by efficiently delivering enhancements and resolving bugs, resulting in a 15 % increase in product stability.',
                        'Demonstrated rapid acquisition of essential technology skills, effectively applying practical knowledge to implement solutions with a 20% increase in efficiency.',
                        'Orchestrated the implementation and management of more than 50 unit tests with Chai, guaranteeing the robustness and reliability of the codebase, and reducing bug occurrences by 30 %.',
                    ],
                },
            ],
        },
        {
            company: 'CDK Global, Remote',
            roles: [
                {
                    role: 'Front-End Trainee',
                    duration: 'Jul 2021 – Dec 2021',
                    responsibilities: [
                        'I contributed to the development of "PartsVoice," a web application facilitating the sale of car parts. It enables users to send inquiry emails directly to sellers for their desired car parts.',
                        'Acquired knowledge and skills in enhancing user experience (UX) and user interface (UI) by optimizing the web app for speed, accessibility, and usability, using React.',
                    ],
                },
            ],
        }
    ];

    const education = [
        {
            degree: 'Bachelor of Technology in Computer Science & Engineering',
            institution: 'GLA University, Mathura',
            duration: 'Jun 2019 – May 2023',
            cpi: '8.38/10',
        }
    ];

    const projects = [
        {
            name: 'Learning Management System (LMS)',
            duration: 'Jun 2023 – Present',
            role: 'Full-Stack Developer',
            responsibilities: [
                'Streamlined adoption of cutting-edge technologies, achieving 100% deadline adherence while enhancing productivity and efficiency.',
                'Implemented RESTful APIs, enhancing the application performance and scalability.',
                'Crafted pivotal components with React and Redux, pivotal to launching major features, and provided mentorship to junior team members, fostering their growth.',
            ],
        },
        {
            name: 'Rahaish (Real Estate Business)',
            duration: 'Nov 2021 - Feb 2022',
            role: 'Full-Stack Developer',
            responsibilities: [
                'Directed a team of four individuals in the strategic planning and execution of our final year\'s major project, resulting in a 25 % increase in project efficiency.',
                'Spearheaded the successful launch of "Rahaish," a user-friendly website tailored for property seekers, enabling them to effortlessly find rentals or purchases based on specific preferences like room count, leading to a 40% rise in user engagement.',
                'Streamlined property listing procedures for owners and significantly enhanced user experience by implementing features allowing for effortless search and saving of favorite options, resulting in a 50% reduction in bounce rates.',
            ],
        }
    ];

    return (
        <div className=" bg-white w-a4 h-a4 mx-0 my-auto p-8 shadow-sm text-justify">
            <h1 className="text-xl font-semibold text-black text-center">Ayush Chauhan</h1>
            <p className="text-sm text-center">Bahjoi, Uttar Pradesh</p>
            <p className="text-sm text-center">
                <a href="mailto:chauhanayushofficial532@gmail.com" target="_blank" rel="noopener noreferrer">chauhanayushofficial532@gmail.com</a> | +91 8923077163
            </p>

            <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/ayush-chauhan-a118171b0/" target="_blank" rel="noopener noreferrer" className="text-sm underline text-link">LinkedIn</a>
                <a href="https://github.com/ayushchauhan248" target="_blank" rel="noopener noreferrer" className="text-sm underline text-link">GitHub</a>
                <a href="https://www.hackerrank.com/profile/ayushchauhanSDE" target="_blank" rel="noopener noreferrer" className="text-sm underline text-link">HackerRank</a>
                <a href="https://leetcode.com/u/ayush_chauhan_c1/" target="_blank" rel="noopener noreferrer" className="text-sm underline text-link">LeetCode</a>
            </div>

            <section className="skills mt-4">
                <h3 className="text-base font-semibold text-black">Technical Skills</h3>
                <hr className="mb-2 border-black border-t-1" />
                {Object.entries(technicalSkills).map(([category, { displayName, skills }]) => (
                    <div key={category} className="flex items-baseline space-x-2">
                        <h4 className="text-xs font-semibold text-black">{displayName} - </h4>
                        <p className="text-xs">{skills.join(', ')}</p>
                    </div>
                ))}
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