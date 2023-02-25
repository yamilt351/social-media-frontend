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
                        <label htmlFor=""><MdEditNote/> Describe in a few words your story</label>
                        <input type="text" placeholder="Description" />
                        <label><MdChatBubble/> Write your Post here!</label>
                        <input type="textbox" placeholder="Post" rows="30"/>
                        <label htmlFor=""><MdInsertPhoto/> Thumbnail</label>
                        <input type="file" placeholder="Thumbnail" />
                        <label htmlFor=""><MdSearch/> Make easy to find your post using tags!</label>
                        <input type="text" placeholder=" separate tags by comma" />
                    </form>
                    <button>Ready!</button>
                </div>
            </div>
        </section>
    )
}
export default CreatePost
