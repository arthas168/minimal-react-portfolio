import React from 'react'

export default function Card({ title, content, longMobile }) {
    return (
        <div className={`card ${longMobile && "long_mobile_card"}`}>
            <span className="card_title">
                {title}
            </span>
            {content}
        </div>
    )
}
