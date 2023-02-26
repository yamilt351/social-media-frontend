import React from 'react'
import './index.css'
import { MdCoffee } from 'react-icons/md'
const Comment = () => {
    return (
        <section className="comment">
            <head className="comment-head">
                <img className="user-profile-image" alt="" src="adasdasd" />
            </head>
            <form action="" className="comment-form">
                <textarea
                    className="coment-form-input"
                    placeholder="What is your opinion?"
                    rows="5"
                />

                <button className="comment-form-btn">
                    <MdCoffee /> Discuss
                </button>
            </form>
        </section>
    )
}

export default Comment
