import React from 'react'
import {MdInsertPhoto,MdChatBubble, MdSearch,MdTipsAndUpdates, MdEditNote } from 'react-icons/md'
import './CreatePost.css'

function CreatePost() {
    return (
        <section className="container">
            <div className="container-post">
                <h1>Share your Story with us!</h1>
                <div className="create-post">
                    <form action="" className="form-post">
                        <label htmlFor=""><MdTipsAndUpdates/> Title</label>
                        <input type="text" placeholder="Title" />
                        <label htmlFor=""><MdEditNote/> Sinopsis</label>
                        <input type="text" placeholder="Sinopsis" />
                        <label><MdChatBubble/> Write your Post here!</label>
                        <textarea type="textarea" placeholder="Post" rows="10"/>
                        <label htmlFor=""><MdInsertPhoto/> Thumbnail</label>
                        <input type="file" placeholder="Thumbnail" />
                        <label htmlFor=""><MdSearch/> Make easy to find your post using tags!</label>
                        <input type="text" placeholder=" separate tags by comma" />
                    </form>
                    <button className='button-post'>Ready!</button>
                </div>
            </div>
        </section>
    )
}
export default CreatePost
