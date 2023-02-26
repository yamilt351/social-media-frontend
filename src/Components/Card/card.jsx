import React from 'react'
import { MdThumbUp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import ContentComments from '../contentComments/ContentComments'
import './card.css'

function Card() {
    return (
        <div className="card">
            <Link className="link-list" to={'/Post/id'}>
                <div className="card-container">
                    <div className="titles">
                        <h2 className="Story">The Broken Justice Arm</h2>
                    </div>
                    <div>
                        <img
                            src="https://c.mangatown.com/store/manga/14647/001.0/compressed/n002.jpg"
                            className="thumbnail"
                        ></img>
                        <h3 className="autor">Jes Kasper</h3>

                        <p className="CreatedAt">
                            <MdThumbUp /> 1.000.999
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
