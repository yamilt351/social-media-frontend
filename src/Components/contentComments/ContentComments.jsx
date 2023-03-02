import React, { useEffect, useState } from 'react'
import CreateComment from './coments/Comment'
import Comment from './RenderComments/Comments'
import './index.css'
import axios from 'axios'
import { URL } from '../../urlStore'

/*eslint linebreak-style: ["error", "unix"]*/
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const ContentComments = ({ postId }) => {
    const [loadComments, setLoadComments] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const resComments = await axios.get(`${URL}comments/${postId}`)
            setLoadComments(resComments.data)
            console.log(postId)
            console.log(loadComments)
        }
        fetchData()
    }, [postId])
    return (
        <div className="content">
            <CreateComment />
            {loadComments.map((value) => {
                const { description, userId, like, dislike, createdAt } = value
                return (
                    <Comment
                        key={value._id}
                        description={description}
                        userId={userId}
                        like={like}
                        dislike={dislike}
                        createdat={createdAt}
                    />

                )
            })}
        </div>
    )
}

export default ContentComments
