import React from 'react'
import CreateComment from './coments/Comment'
import Comment from './RenderComments/Comments'
import './index.css'
/*eslint linebreak-style: ["error", "unix"]*/
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const ContentComments = ({ data }) => {
    return (
        <div className="content">
            <CreateComment />
            <Comment
                description={data.description}
                userId={data.userId}
                like={data.like}
                dislike={data.dislike}
                createdat={data.createdat}
                postId={data.postId}
            />
        </div>
    )
}

export default ContentComments
