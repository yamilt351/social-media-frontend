import React from 'react'
import { MdThumbUp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './card.css'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

function Card({ title, description, like,  userId,id }) {
    return (
        <div className="card" key={id}>
            <Link className="link-list" to={`/Post/${userId}`}>
                <div className="card-container">
                    <div className="titles">
                        <h2 className="Story">{title}</h2>
                    </div>
                    <div>
                        <p>{description}</p>
                        {/*<img src="asdasdadasdadad" className="thumbnail"></img>*/}
                        <h3 className="autor">Pepe</h3>
                        <p className="CreatedAt">
                            <MdThumbUp />
                            {like.length}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
