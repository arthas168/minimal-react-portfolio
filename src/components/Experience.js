import React from 'react'
import Card from "./Card"

export default function Experience() {
    return (
        <div className="experience">
            <Card title="🙋‍♂️ whoami" content={
                <span className="whoami">
                    Passionate blockchain advocate. Long history of organising and working with people.
                    My hobbies include magic tricks with playing cards, Cardistry, cooking and hiking.
                    I also recently bought an Arduino and started looking into electronics and tinkering with IoT and embedded software.
                    In my spare time I enjoy reading history books or working on personal coding side projects. Big supporter of open source software and an avid fan of Linux (currently on Manjaro).
                </span>
            } />
            <Card longMobile={true} title="👨‍💻 Work Experience" content={
                <div className="workplace_list">
                    <div className="workplaces">
                        <span className="workplace_title">
                            Full Stack Developer - <span className="co_name">TechPods</span> (Mar 2020 - Now)
                        </span>
                        <span className="workplace_description">
                            TechPods is a one of a kind co-sourcing company. I am in the team that works for our biggest and most valuable client - OVO Energy, one of the main
                            energy supplying companies in the UK. The day to day work involves maintaining and improving a microservices based Kotlin backend with a Postgres database,
                            a Flutter mobile app for scheduling engineer appointments, and a React frontend. Other technologies used: AWS, Docker, GraphQL, TypeScript, Quarkus, Gradle.
                        </span>
                        <span className="workplace_title">
                            Blockchain Developer - <span className="co_name">WeiChain</span> (Jan 2019 - Mar 2020)
                        </span>
                        <span className="workplace_description">
                            Writing smart contracts on the Ethereum and Aeternity blockchains, building web applications with React.
                            During my time at WeiChain we created and deployed a decentralized cryptocurrency exchange and an atomic swap widget.
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
                        Throughout the courses at SoftUni I learned the fundamentals of programming - at first, with Java and C#, then more advanced concepts with JavaScipt,
                        along with everything needed to build full stack web applications. This includes front end technologies (such as React, HTML, CSS) and databases -
                        using MongoDB and MySQL, Blockchain technologies - creating decentralized applications with the solidity language on the Ethereum network, and much more.
                        Most of my educational projects can be seen in my GitHub repo.
                    </span>
                </div>
            }
            />
        </div>
    )
}
