import React from 'react'
import Tag from "./Tag"

export default function Skills() {
    return (
        <>
            <div className="skills">

                <h1>Highly skilled with: </h1>
                <div className="tag_list">
                    <Tag name="Kotlin" position={'is_first'} text="👨‍💻 I've been utilizing Kotlin (alongside Gradle and Quarkus) with a Postgres database on a daily basis for the past 7 months to build secure, reliable & 
                    fast backend microservices."/>
                    <Tag name="Flutter" text="🐦 For the past 5 months I've been using Flutter everyday to build fast, dynamic & interactive mobile UIs for both iOS and Android. I also have a few personal
                    projects in progress with Flutter which you can find on my GitHub page."/>
                    <Tag data-tip="js" position={'is_last'} name="JavaScript" text="👨‍💻 I've been using JavaScript both for personal and professional projects ever since 2018.
                    I've worked with TypeScript and Nodejs (with Express and MongoDB). I've also used React and React Native."/>
                </div>
                <h1>Good at: </h1>
                <div className="tag_list">
                    <Tag name="Rust" text="⚙️ Recently, I've fallen in love with Rust. Everything about it - memory safety, speed, portability, efficiency and syntax is just simply amazing. I'm really eager to start using Rust professionally ASAP. I have a bunch of neat side projects with Rust on my GitHub page." />
                    <Tag name="Java" text="☕ Java is my first programming language! 
                    During my time in the Software University I studied the basics, fundamentals, and advanced concepts of programming and OOP principles with Java. I haven't used it professionally
                    since, but at work I use Kotlin daily, so I feel pretty comfortable with the JVM ecosystem. I've also used Spring, Maven and Hibernate with MySQL."/>
                    <Tag name="Python" position={'is_last'} text="🐍 I haven't used Python professionally yet, but I've built several personal projects with it (some of which are on my GitHub page). I also really want to start using the Django framework for web development."/>

                </div>
                <h1>Want to learn: </h1>
                <div className="tag_list">
                    <Tag name="Elm" text="🌲 I'm really keen on learning Elm, because it looks like a very interesting alternative to JS in terms of frontend development." />
                    <Tag name="Go" text="🐹 Go seems like a really efficient and fun language to learn." />
                    <Tag name="Elixir" position={'is_last'} text="🧪 Elixir seems like a really fun to use language and I'd like to learn it to build distributed and fault-tolerant applications." />
                </div>
            </div>
        </>
    )
}
