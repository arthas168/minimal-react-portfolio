import React from 'react'
import Card from "./Card"

export default function Experience() {
    return (
        <div className="experience">
            <Card title="🙋‍♂️ whoami" content={
                <span className="whoami">
                    Passionate blockchain advocate. Long history of organising and working with people.
                    My hobbies include magic tricks with playing cards, cardistry, cooking and hiking.
                    I also recently bought an Arduino and a Raspberry Pi and have started looking into electronics, embedded software and IoT.
                    In my spare time I enjoy reading history books and working on side projects. Big supporter of open source software and an avid fan of Linux (currently on Manjaro).
                </span>
            } />
            <Card longMobile={true} title="👨‍💻 Work Experience" content={
                <div className="workplace_list">
                    <div className="workplaces">
                        <span className="workplace_title">
                            Rust Developer - <span className="co_name">LimeChain</span> (Mar 2021 - Now)
                        </span>
                        <span className="workplace_description">
                            Rust, AssemblyScript, WebAssembly.
                        </span>
                        <span className="workplace_title">
                            Full Stack Developer - <span className="co_name">TechPods</span> (Jan 2020 - Mar 2021)
                        </span>
                        <span className="workplace_description">
                           Kotlin, Flutter, React, AWS, Docker, GraphQL, TypeScript, Quarkus, Gradle.
                        </span>
                        <span className="workplace_title">
                            Blockchain Developer - <span className="co_name">WeiChain</span> (Jan 2019 - Jan 2020)
                        </span>
                        <span className="workplace_description">
                            React, Node.js, Solidity.
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
                        Throughout the courses at SoftUni I studied the fundamentals of programming with Java and C#,
                        along with everything needed to build full stack web applications with JavaScript. I also studied Blockchain technologies and created decentralized applications with the Solidity programming language on the Ethereum network.
                        Most of my educational projects can be found on my GitHub page.
                    </span>
                </div>
            }
            />
        </div>
    )
}
