import React, { useState } from 'react'
import Recommended from '../Recommended/Recommended'
import { FaHeart } from 'react-icons/fa'
import ContentComments from '../contentComments/ContentComments'
import './Post.css'
import {
    MdRemoveRedEye,
    MdThumbDown,
    MdThumbUp,
    MdOutlineBookmark,
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
              facilis blanditiis optio magnam, praesentium non veniam Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
              obcaecati expedita ipsa delectus asperiores sed, cumque ea nihil
              similique beatae eius ab facere eaque assumenda natus sapiente cum
              laboriosam ipsam. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dignissimos ipsa, Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dignissimos ipsa, ratione
              repellendus quidem, obcaecati explicabo non nesciunt excepturi
              porro optio quos voluptatibus perferendis a fugit incidunt modi
              iste magnam atque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorum, sed soluta qui repudiandae quas
              similique excepturi consequuntur enim et fugiat ad officia facilis
              blanditiis optio magnam, praesentium non veniam Lorem ipsum dolor
              sit amet consectetur
                        </p>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="author-information-container">
                        <img className="image-author-profile" src="adadasdd"></img>
                        <h2>Autor name</h2>
                        <div className="channel-information">
                            <p className="parragraph-3">
                                {' '}
                                <FaHeart /> 5000
                            </p>
                            <p className="parragraph-4">
                                {' '}
                                <MdRemoveRedEye /> 3000
                            </p>
                        </div>
                    </div>

                    <div className="user-action-container">
                        <button className="like">
              like <MdThumbUp />{' '}
                        </button>
                        <button className="dislike">
                            {' '}
              dislike <MdThumbDown />
                        </button>
                        <button className="Subscribe">
              Subscribe <FaHeart />
                        </button>
                    </div>
                    <button
                        onClick={() => setHideComments(!hideComments)}
                        className="hider-button"
                    >
                        {!hideComments ? 'Hide Comments' :   'Show Comments'}
                    </button>
                </div>
                <div className={!hideComments ? 'comentary-section' : 'off'}>
                    <h1> Discuss: </h1>
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
