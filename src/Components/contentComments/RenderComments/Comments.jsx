import React from 'react'
import {MdThumbDown, MdThumbUp} from 'react-icons/md'
import './Comments.css'

function Comment() {
    return (
        <div className="comment-render">
            <div className="user-data-container">
                <img src="adasda" className="profile-comment-picture" />
                <h2>Lorem, ipsum.</h2>
            </div>
            <div className="comment-render-container">
                <p className="comment-parragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at
          nulla harum consequuntur perferendis? Aliquam commodi nam at, alias
          tempora ea, optio fuga corporis, temporibus sed nulla voluptatem
          doloribus eaque.
                </p>
                <div className='ago-and-actions'>
                    <p>3 days ago</p>
                    <div className="buttons-user-action">
                        <button className='interaction'><MdThumbUp /></button>
                        <button className='interaction'> <MdThumbDown /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment
