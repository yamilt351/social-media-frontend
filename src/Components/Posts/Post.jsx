import React, { useState } from 'react'
import Recommended from '../Recommended/Recommended'
import { FaHeart } from 'react-icons/fa'
import ContentComments from '../contentComments/ContentComments'
import { Link } from 'react-router-dom'
import './Post.css'
import {
    MdRemoveRedEye,
    MdThumbDown,
    MdThumbUp,
    MdOutlineBookmark,
    MdCoffee,
} from 'react-icons/md'
function Post() {
    const [hideComments, setHideComments] = useState(false)
    const [hideRecommended, setHideRecommended] = useState(false)

    return (
        <section className="section-Recommended-container">
            <div className="post-section">
                <div className="story-author-container">
                    <div className="head-and-description-container">
                        <div className="head">
                            <h1>
                                {' '}
                                <MdOutlineBookmark /> Title
                            </h1>{' '}
                            <p className="createdat-style">created at</p>
                        </div>
                        <div className="sinopsis">
                            <p className="parragraph-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                aliquid quibusdam est expedita incidunt delectus veniam magnam
                saepe voluptas
                            </p>
                        </div>
                    </div>
                    <div className="body-post">
                        <p className="parragraph-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos ipsa, ratione repellendus quidem, obcaecati explicabo
              non nesciunt excepturi porro optio quos voluptatibus perferendis a
              fugit incidunt modi iste magnam atque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolorum, sed soluta qui repudiandae
              quas similique excepturi consequuntur enim et fugiat ad officia
                        </p>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer__items__center bg-color">
                        <Link to={'/Profile'}   className="link-list-user">
                            <img className="image-author-profile" src="adadasdd"></img>
                        </Link>
                        <Link to={'/Profile'} className="link-list-user">
                            <h2 className="author-name-display">Autor name</h2>
                        </Link>
                        <div className="footer__items__center ">
                            <p className="parragraph-3">
                                {' '}
                                <FaHeart className="icon-user-info" /> 5000
                            </p>
                            <p className="parragraph-4">
                                {' '}
                                <MdRemoveRedEye className="icon-user-info" /> 3000
                            </p>
                        </div>
                    </div>
                    <div className="footer__items__center">
                        <button className="like footer__items__center gap">
                            <MdThumbUp /> <span>like</span>
                        </button>
                        <button className="dislike footer__items__center gap">
                            <MdThumbDown /> <span>dislike</span>
                        </button>
                        <button className="Subscribe footer__items__center gap">
                            <FaHeart /> <span>Subscribe</span>
                        </button>
                    </div>
                    <button
                        onClick={() => setHideComments(!hideComments)}
                        className="hider-button"
                    >
                        {!hideComments ? 'Hide Comments' : 'Show Comments'}
                    </button>
                </div>
                <div className={!hideComments ? 'comentary-section' : 'off'}>
                    <h1 className="Discuss-coffe">
                        <MdCoffee /> Discuss:{' '}
                    </h1>
                    <ContentComments />
                </div>
                <button
                    onClick={() => setHideRecommended(!hideRecommended)}
                    className="hider-button"
                >
                    {!hideRecommended ? 'Hide Recomendations' : 'Show Recomendations'}
                </button>
            </div>
            <div className="Recommended-section-node">
                <Recommended prop={hideRecommended} />
            </div>
        </section>
    )
}
export default Post
