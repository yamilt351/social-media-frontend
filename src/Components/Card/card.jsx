import React from 'react'
import { MdThumbUp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import './card.css'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/*eslint linebreak-style: ["error", "unix"]*/
function Card({ key, userId, like, title, createdAt }) {
    return (
        <div className="card" key={key}>
            <Link className="link-list" to={`/Post/${userId}`} key={key}>
                <div className="card-container">
                    <div className="titles">
                        <h2 className="Story">{title}</h2>
                    </div>
                    <div>
                        <img
                            src="https://3.bp.blogspot.com/-kGUpQspAz_s/UGmmQ1K_mvI/AAAAAAAADnY/9Y164v0Y5UA/s1600/laura-gallego-libro-portales.jpg"
                            className="thumbnail"
                        ></img>
                        <h3 className="autor">Pepe</h3>

                        <p className="CreatedAt">
                            <MdThumbUp /> {like.lenght}
                            {format(createdAt)}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
