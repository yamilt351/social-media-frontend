import React from 'react'
import { MdThumbDown, MdThumbUp } from 'react-icons/md'
import './Comments.css'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
function Comment({ description, userId, like, dislike, createdat }) {
    return (
        <div className="comment-render">
            <div className="user-data-container">
                <Link to={`/Profile/${userId}`} className="link-list-user">
                    <img src="adasda" className="profile-comment-picture" />
                </Link>
                <Link to={`/Profile/${userId}`} className="link-list-user">
                    <h2>Lorem, ipsum.</h2>
                </Link>
            </div>
            <div className="comment-render-container">
                <p className="comment-parragraph">{description}</p>
                <div className="ago-and-actions">
                    <p>{format(createdat)}</p>
                    <div className="buttons-user-action">
                        <button className="interaction">
                            <MdThumbUp />
                            {like}
                        </button>
                        <button className="interaction">
                            {' '}
                            <MdThumbDown />
                            {dislike}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment



