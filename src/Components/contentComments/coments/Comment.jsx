import React from 'react'
import './index.css'

const Comment = () => {
    return (
        <aside className='comment'>
            <head className='comment-head'>
                <img src="" alt="" />
                <span className='username'>username</span>
            </head>
            <form action="" className='comment-form'>
                <input type="text" />
                <button className='comment-form-btn'>Created at</button>
            </form>
        </aside>
    )
}

export default Comment
