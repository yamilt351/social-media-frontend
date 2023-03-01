import React, { useEffect, useState } from 'react'
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
import axios from 'axios'
import { URL } from '../../urlStore'
import { format } from 'timeago.js'
/*eslint linebreak-style: ["error", "unix"]*/
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
function Post({ key, user }) {
    const [hideComments, setHideComments] = useState(false)
    const [hideRecommended, setHideRecommended] = useState(false)
    const [Comments, setComments] = useState({})
    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`${URL}find/${key}`)
                const data = res.data
                setPost(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchPost()
    }, [key])

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`${URL}comments/${post.id}`)
                const data = res.data
                setComments(data)
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchComments()
    }, [post.id])
    return (
        <section className="section-Recommended-container">
            <div className="post-section">
                <div className="story-author-container">
                    <div className="head-and-description-container">
                        <div className="head">
                            <h1>
                                {' '}
                                <MdOutlineBookmark /> {post.title}
                            </h1>{' '}
                            <p className="createdat-style">{format(post.createdat)}</p>
                        </div>
                        <div className="sinopsis">
                            <p className="parragraph-1">{post.description}</p>
                        </div>
                    </div>
                    <div className="body-post">
                        <p className="parragraph-2">{post.description}</p>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer__items__center bg-color">
                        <div className="footer__items__center gap">
                            <Link to={'/Profile'} className="link-list-user">
                                <img className="image-author-profile" src="adadasdd"></img>
                            </Link>
                            <Link to={'/Profile'} className="link-list-user">
                                <h2 className="author-name-display">Autor name</h2>
                            </Link>
                        </div>
                        <div className="footer__items__center gap">
                            <FaHeart className="icon-user-info" />
                            <p className="parragraph-3">{user.subscribers}</p>
                        </div>
                        <div className="footer__items__center gap">
                            <MdRemoveRedEye className="icon-user-info" />
                            <p className="parragraph-4">{post.views}</p>
                        </div>
                    </div>
                    <div className="footer__items__center">
                        <button className="like footer__items__center gap">
                            <MdThumbUp /> <span>{post.like.length}</span>
                        </button>
                        <button className="dislike footer__items__center gap">
                            <MdThumbDown /> <span>{post.dislike.length}</span>
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
