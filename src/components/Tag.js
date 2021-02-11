/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Tag({ name, text, isFirst, isLast }) {

    return <Popup trigger={
        <div className={`tag ${isLast && "last_item"} ${isFirst && "first_item"}`}>
            <p>{name}</p>
            {isFirst && <img className="shake-horizontal" src="../assets/push.png" alt="info-button"></img>}
        </div>
    } position="bottom center">
        <div className="popup_content">
            <span className="popup_text">
                {text}
            </span>
        </div>
    </Popup>
}
