import React from 'react'
import Card from "./Card"

export default function Experience() {
    return (
        <div className="experience">
            <Card title="🙋‍♂️ whoami" content={
                <span className="whoami">
                    Passionate blockchain advocate. Long history of organising and working with people.
                    My hobbies include magic tricks with playing cards, Cardistry, cooking and hiking.
                    I also recently bought an Arduino and a Raspberry Pi and have started looking into electronics, embedded software and IoT.
                    In my spare time I enjoy reading history books and working on side projects. Big supporter of open source software and an avid fan of Linux (currently on Manjaro).
                </span>
            } />
            <Card longMobile={true} title="👨‍💻 Work Experience" content={
                <div className="workplace_list">
                    <div className="workplaces">
                        <span className="workplace_title">
                            Full Stack Developer - <span className="co_name">TechPods</span> (Mar 2020 - Now)
                        </span>
                        <span className="workplace_description">
                           Maintaining and improving a microservices based Kotlin backend with a Postgres database,
                            a Flutter mobile app, and a React frontend for scheduling and executing appointments. Other technologies used: AWS, Docker, GraphQL, TypeScript, Quarkus, Gradle.
                        </span>
                        <span className="workplace_title">
                            Blockchain Developer - <span className="co_name">WeiChain</span> (Jan 2019 - Mar 2020)
                        </span>
                        <span className="workplace_description">
                            Writing smart contracts on the Ethereum and Aeternity blockchains, building web applications with React.
                        </span>
                    </div>
                </div>
            } />
            <Card title="📚 Education" content={
                <div className="education">
                    <span className="education_title">
                        Software University, Sofia (Jun 2017 - Mar 2020)
                    </span>
                    <span className="education_text">
                        Throughout the courses at SoftUni I learned the fundamentals of programming - at first, with Java and C#,
                        along with everything needed to build full stack web applications with JavaScript. I also studied Blockchain technologies, which includes creating decentralized applications with the solidity language on the Ethereum network, and much more.
                        Most of my educational projects can be found in my GitHub repo.
                    </span>
                </div>
            }
            />
        </div>
    )
}
