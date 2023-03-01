import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdThumbUp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import { URL } from '../../urlStore'
import './card.css'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/*eslint linebreak-style: ["error", "unix"]*/
function Card({ userId, like, title, createdAt, key }) {
    const [image, setImage] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${URL}users/find/${userId}`)
            const data = res.data
            setUser(data)
        }
        fetchUser()
    }, [userId])

    useEffect(() => {
        const fetchImage = async () => {
            const res = await axios.get(`${URL}profilepic/${user.imageId}`)
            const data = res.data
            setImage(data)
        }
        fetchImage()
    }, [user.imageId])

    return (
        <Link className="link-list" to={`/Post/${key}`} key={key}>
            <div className="card-container">
                <div className="titles">
                    <h2 className="Story">{title}</h2>
                </div>
                <div>
                    <img src={image.path} className="thumbnail"></img>
                    <h3 className="autor">{user.username}</h3>
                    <p className="CreatedAt">
                        <MdThumbUp /> {like.length}
                        {format(createdAt)}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Card
