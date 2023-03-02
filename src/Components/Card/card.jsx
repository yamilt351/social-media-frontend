import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdThumbUp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import { URL } from '../../urlStore'
import './card.css'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/*eslint linebreak-style: ["error", "unix"]*/
function Card({ userId, like, title, createdAt, id }) {
    const [image, setImage] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        try {
            const fetchDataUser = async () => {
                const responseUserData = await axios.get(`${URL}users/find/${userId}`)
                const dataUser = responseUserData.data
                setUser(dataUser)
            }
            fetchDataUser()
        } catch (error) {
            console.error(error.message)
        }
    }, [userId])

    useEffect(() => {
        try {
            const fetchDataImage = async () => {
                const resImgData = await axios.get(`${URL}profilepic/${user.imageId}`)
                const dataImg = resImgData.data
                setImage(dataImg)
                
            }
            fetchDataImage()
        } catch (error) {
            console.error(error.message)
        }
    }, [user.imageId])

    return (
        <Link className="link-list" to={`/Post/${id}/${userId}`}>
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
