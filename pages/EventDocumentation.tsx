import React from 'react';
import Head from 'next/head';

import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

import '../app/globals.css';

const EventDocumentation = () => {
    return (
        <div>
            <Head>
                <title>PROTOCOL 1.0 | IEEE SRMIST</title>
                <meta name="description" content="Empower Computer Science and Engineering students to innovate and create impactful solutions using cutting-edge technologies in a supportive online environment. Join PROTOCOL 1.0 hackathon now!" />
                <meta name="keywords" content="PROTOCOL 1.0, hackathon, IEEE SRMIST, computer science, engineering, innovation, technology" />
                <link rel="icon" href="/favicon.ico?v=2" />
            </Head>

            <Navbar />
            <div className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
                <h1 className="text-3xl font-bold mb-4">PROTOCOL 1.0 Event Documentation</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Table of Contents</h2>
                    <ul className="list-disc pl-6">
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#event-overview">Event Overview</a></li>
                        <li><a href="#tracks">Tracks</a></li>
                        <li><a href="#schedule">Schedule</a></li>
                        <li><a href="#registration">Registration</a></li>
                        <li><a href="#participation-guidelines">Participation Guidelines</a></li>
                        <li><a href="#project-submission">Project Submission</a></li>
                        <li><a href="#judging-criteria">Judging Criteria</a></li>
                        <li><a href="#rewards">Rewards</a></li>
                        <li><a href="#mentors-and-support">Mentors and Support</a></li>
                        <li><a href="#frequently-asked-questions-faq">Frequently Asked Questions (FAQ)</a></li>
                        <li><a href="#contact-information">Contact Information</a></li>
                    </ul>
                </div>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="introduction">Introduction</h2>
                    <p>Welcome to PROTOCOL 1.0! PROTOCOL 1.0 is an innovative online hackathon aimed at empowering Computer Science and Engineering students to innovate and create impactful solutions.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="event-overview">Event Overview</h2>
                    <p>PROTOCOL 1.0 is a 4-day online hackathon focused on three main tracks: HealthTech Solutions, Future Tech Innovations, and Sustainable Development. Participants will have the opportunity to collaborate, learn from industry experts, and develop solutions to real-world challenges.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="tracks">Tracks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">HealthTech Solutions</h3>
                            <p>Explore innovative solutions to healthcare challenges such as telemedicine platforms, health monitoring devices, AI-based diagnostics, and mental health support apps.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Future Tech Innovations</h3>
                            <p>Delve into cutting-edge technologies like AI, blockchain, IoT, AR/VR, and robotics to solve complex problems and drive technological advancements.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Sustainable Development</h3>
                            <p>Tackle environmental and social challenges through technology-driven solutions, focusing on areas such as renewable energy, waste management, sustainable agriculture, conservation efforts, and eco-friendly lifestyle tools.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="schedule">Schedule</h2>
                    <ul className="list-disc pl-6">
                        <li><strong>Day 1: April 12th, 2024</strong>
                            <ul className="list-disc pl-6">
                                <li>Introduction and Track Description: 8:00 PM - 10:00 PM</li>
                            </ul>
                        </li>
                        <li><strong>Day 2-4: April 13th-15th, 2024</strong>
                            <ul className="list-disc pl-6">
                                <li>Hackathon Sessions: All-day</li>
                            </ul>
                        </li>
                        <li><strong>Day 5: April 16th, 2024</strong>
                            <ul className="list-disc pl-6">
                                <li>Results Declaration</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="registration">Registration</h2>
                    <p>To participate in PROTOCOL 1.0, register on our website at <a href="https://registrations.ieeesrmist.com/protocol" className="text-blue-500 hover:underline">Registration Link</a>. Registration is free and open to all Computer Science and Engineering students.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="participation-guidelines">Participation Guidelines</h2>
                    <ul className="list-disc pl-6">
                        <li>Participants can work individually or in teams (Max Size - 2).</li>
                        <li>All projects must be submitted within the specified timeline.</li>
                        <li>Projects must adhere to the chosen track themes.</li>
                        <li>Plagiarism is strictly prohibited.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="project-submission">Project Submission</h2>
                    <p>Participants must submit their projects by April 15th, 2024, 10:00 AM. Submissions should include:</p>
                    <ul className="list-disc pl-6">
                        <li>GitHub links to code repositories</li>
                        <li>Case Study PowerPoint presentation</li>
                        <li>Small video presentation about the project</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="judging-criteria">Judging Criteria</h2>
                    <p>Projects will be judged based on criteria such as creativity, technical complexity, impact, and presentation. Judges will evaluate each project holistically to determine the winners.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="rewards">Rewards</h2>
                    <p>Exciting Rewards await the winners of PROTOCOL 1.0! Rewards include certificates, mentorship opportunities, and more.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="mentors-and-support">Mentors and Support</h2>
                    <p>Expert mentors will provide guidance and support to participants throughout the hackathon. Connect with mentors on Discord for assistance with technical challenges, project development, and pitching.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="frequently-asked-questions-faq">Frequently Asked Questions (FAQ)</h2>
                    <p>Refer to the FAQ section for answers to commonly asked questions about PROTOCOL 1.0.</p>
                    {/* Add FAQ content here */}
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2" id="contact-information">Contact Information</h2>
                    <p>For any inquiries or assistance, please contact our team at <a href="mailto:ieee@srmist.edu.in" className="text-blue-500 hover:underline">ieee@srmist.edu.in</a>.</p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default EventDocumentation;