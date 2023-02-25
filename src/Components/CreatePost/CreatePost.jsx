import React from 'react'
import data from './data'
function CreatePost() {
    return (
        <section className="create-Post">
            <div>
                {data.map((value) => {
                    const { id, description, title, post, img, tags, button } = value
                    return (
                        <div className="create-post" key={id}>
                            <form action="" className="form-post">
                                <label htmlFor="">{title}</label>
                                <input type="text" placeholder={title} />
                                <label htmlFor="">{description}</label>
                                <input type="text" placeholder={description} />
                                <label>{post}</label>
                                <input type="text" placeholder={post} />
                                <label htmlFor="">{img}</label>
                                <input type="text" placeholder={img} />
                                <label htmlFor="">{tags}</label>
                                <input type="text" placeholder={tags} />
                            </form>
                            <button>{button}</button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default CreatePost
