import React from 'react'
import CreateComment from './coments/Comment'
import Comment from './RenderComments/Comments'
import './index.css'
/*eslint linebreak-style: ["error", "unix"]*/

const ContentComments = () => {
    return (
        <div className="content">
            <CreateComment />
            <Comment />
           
        </div>
    )
}

export default ContentComments
