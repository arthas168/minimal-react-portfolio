import React from 'react'

export default function Card({title, content}) {
    return (
        <div className="card">
            <span className="card_title">
                {title}
            </span>
            {content}
        </div>
    )
}
