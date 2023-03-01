import React from 'react'
import './index.css'
import { MdCoffee } from 'react-icons/md'
/*eslint linebreak-style: ["error", "unix"]*/
const CreateComment = () => {
    return (
        <section className="comment">
            <div className="comment-head">
                <img className="user-profile-image" alt="" src="adasdasd" />
            </div>
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

export default CreateComment
