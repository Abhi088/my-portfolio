import React from 'react';
import myData from '../constants/mydata.json';

export const Home: React.FC = () => {
    return (
        <div className="mx-auto">
            <header className="py-5 bg-background">
                <nav className='flex justify-end px-20'>
                    <ul className="w-1/4 flex justify-end space-x-20">
                        <li>
                            <a href="/" className="font-bold">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="font-bold">About</a>
                        </li>
                        <li>
                            <a href="#projects" className="font-bold">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="font-bold">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='flex flex-col md:flex-row w-full h-full bg-background items-end justify-between'>
                <div className='p-10 h-full'>
                    <h1 className='font-caveat text-9xl font-semibold'>Hi</h1>
                    <h2 className='font-caveat text-7xl font-semibold'>I'm a Full Stack Developer</h2>
                    <button className='p-4 border-2 rounded-full bg-orange-300 text-white font-bold mt-8'>Learn about me</button>
                </div>
                <img src={require('../assets/K4C.png')} alt="Banner" className="rounded-lg max-h-2/3-screen" />
            </div>
            <main>
                <section id="about" className="m-10 md:m-20 flex flex-col sm:flex-row sm:space-x-16">
                    <h2 className="text-3xl md:text-4xl font-bold whitespace-pre">About Me</h2>
                    <p className="text-lg text-justify">I am Abhishek Kumar Singh, a seasoned full-stack software developer dedicated to delivering exceptional digital solutions. My journey in Computer Science & Engineering at GLA University, Mathura, has equipped me with a solid foundation complemented by hands-on experience in the field. Proficient in an extensive array of technologies, ranging from front-end frameworks like ReactJS and Angular to back-end frameworks such as Express.js and Spring Boot, I bring a versatile skill set to every project I undertake. My tenure at MyAnatomy Integration Pvt. Ltd. not only allowed me to contribute significantly to the development of API endpoints but also provided me with the opportunity to nurture a collaborative team culture. I am deeply passionate about problem-solving and am committed to continuous learning and growth. I am eager to leverage my expertise to drive innovation and make meaningful contributions to future endeavors.</p>
                </section>
                <section className='m-10 md:m-20 flex flex-col items-center'>
                    <h2 className='text-3xl md:text-4xl font-bold text-center'>Technologies I use</h2>
                    <div className='flex space-x-6 md:space-x-20 mx-0 md:mx-10 lg:mx-24 items-center flex-wrap justify-center'>
                        <img src={require('../assets/technologies/react.png')} alt='ReactJS' className='max-w-16 mt-6' />
                        <img src={require('../assets/technologies/angular.png')} alt='Angular' className='max-w-16 mt-6' />
                        <img src={require('../assets/technologies/expressjs.png')} alt='ExpressJS' className='max-w-44 mt-6' />
                        <img src={require('../assets/technologies/nodejs.png')} alt='NodeJS' className='max-w-28 mt-6' />
                        <img src={require('../assets/technologies/springboot.png')} alt='Spring Boot' className='max-w-40 mt-6' />
                        <img src={require('../assets/technologies/ninja.png')} alt='Ninja Framework' className='max-w-32 mt-6' />
                        <img src={require('../assets/technologies/mongodb.png')} alt='MongoDB' className='max-w-20 mt-6' />
                        <img src={require('../assets/technologies/postgresql.png')} alt='PostgreSQL' className='max-w-20 mt-6' />
                        <img src={require('../assets/technologies/mysql.png')} alt='MySQL' className='max-w-16 mt-6' />
                        <img src={require('../assets/technologies/java.png')} alt='JAVA' className='max-w-16 mt-6' />
                        <img src={require('../assets/technologies/c++.png')} alt='C++' className='max-w-16 mt-6' />
                        <img src={require('../assets/technologies/typescript.png')} alt='Typescript' className='max-w-16 mt-6' />
                        <img src={require('../assets/technologies/javascript.png')} alt='Javascript' className='max-w-16 mt-6' />
                        <img src={require('../assets/technologies/html5.png')} alt='HTML5' className='max-w-20 mt-6' />
                        <img src={require('../assets/technologies/css3.png')} alt='CSS3' className='max-w-14 mt-6' />
                        <img src={require('../assets/technologies/redux.png')} alt='Redux' className='max-w-20 mt-6' />
                        <img src={require('../assets/technologies/redux-saga.png')} alt='Redux-Saga' className='max-w-32 mt-6' />
                        <img src={require('../assets/technologies/tailwindCSS.png')} alt='TailwindCSS' className='max-w-32 mt-6' />
                        <img src={require('../assets/technologies/bootstrap.png')} alt='Bootstrap' className='max-w-20 mt-6' />
                        <img src={require('../assets/technologies/materialui.png')} alt='MaterialUI' className='max-w-20 mt-6' />
                        <img src={require('../assets/technologies/git.png')} alt='GIT' className='max-w-20 mt-6' />
                    </div>
                </section>
                <section id="projects" className="m-10 md:m-20">
                    <h2 className='text-3xl md:text-4xl font-bold'>Projects</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
                        <div className='bg-red-300 h-40 rounded-2xl'>
                            <h3 className='font-semibold text-2xl p-4'>TutorSage</h3>
                        </div>
                        <div className='bg-red-300 h-40 rounded-2xl'>
                            <h3 className='font-semibold text-2xl p-4'>TimeBank</h3>
                        </div>
                    </div>
                </section>
                <section id="contact" className="m-10 md:m-20">
                    <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
                    <p className="text-xl">You can reach me at <a className='text-link font-medium' href={`mailto:${myData.email}`}>{myData.email}</a> or on <a className='space-x-1 text-link font-medium' href={myData.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-lg text-linkedin fa-linkedin"></i><span>Linkedin</span></a>.</p>
                </section>
            </main>
        </div>
    );
}