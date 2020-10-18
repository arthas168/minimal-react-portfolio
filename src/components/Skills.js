import React from 'react'
import Tag from "./Tag"

export default function Skills() {
    return (
        <>
            <div className="skills">

                <h1>Highly skilled with: </h1>
                <div className="tag_list">
                    <Tag data-tip="js" name="JavaScript" isFirst={true} text="👨‍💻 My go-to programming language! I've been using JavaScript both for personal and professional projects ever since 2018.
                    I've worked with TypeScript, Nodejs & Express to build solid backend APIs. I've also used React and React Native to bring dynamic & polished UIs to life.
                    For my databases when working with JavaScript I've utilized MongoDB & Postgres. And finally, I have numerous personal projects using JavaScript which you can find on my GitHub repo page."/>
                    <Tag name="Kotlin" text="👨‍💻 I've been utilizing Kotlin (alongside Gradle and Quarkus) with a Postgres database on a daily basis for the past 5 months to build secure, reliable & 
                    fast backend microservices."/>
                    <Tag name="Databases" isLast={true} text="👨‍💻 When it comes to databases, from 2017 until now I've mostly used MongoDB, Postgres and Google's Firestore Service. 
                    I also have experience with MySQL, Redis and AWS."/>
                </div>
                <h1>Good at: </h1>
                <div className="tag_list">
                    <Tag name="Java" text="☕ Java is my first programming language! 
                    During my time in the Software University I studied the basics, fundamentals, and advanced concepts of programming and OOP principles with Java. I haven't used it professionally
                    since, but at work I use Kotlin daily, so I feel pretty comfortable with the JVC ecosystem. I've also used Spring, Maven and Hibernate with MySQL."/>
                    <Tag name="Flutter" text="🐦 For the 2 months I've been using Flutter on a daily basis to build fast, dynamic & interactive mobile UIs for both iOS and Android. I also have a few personal
                    projects in progress with Flutter which you can find on my GitHub repo page."/>
                    <Tag name="Python" isLast={true} text="🐍 I haven't used Python professionally yet, but I've built several personal projects (some of which are on my GitHub repo page).
                    Python is my go-to language for writing small scripts and also learning cybersecurity and ethical hacking. I really want to start using the Django framework for web development."/>

                </div>
                <h1>Want to learn: </h1>
                <div className="tag_list">
                    <Tag name="Rust" text="⚙️ I'm really keen on learning Rust and utilizing it for embedded software development and getting into efficient low-level programming as a whole." />
                    <Tag name="Elixir" text="🧪 Elixir seems like a really fun to use language and I'd like to learn it to build distributed and fault-tolerant applications." />
                    <Tag name="Ruby" isLast={true} text="💎 Ruby seems like a really fun to use language and I'd like to learn it alongside the Rails framework, to build all kinds of applications." />

                </div>
            </div>
        </>
    )
}
