import React from 'react'
import { MdThumbUp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './card.css'

function Card() {
    return (
        <div className="card">
            <Link className="link-list" to={'/Post/id'}>
                <div className="card-container">
                    <div className="titles">
                        <h2 className="Story">El poder del pendulo en tu vida</h2>
                    </div>
                    <div>
                        <img
                            src="https://3.bp.blogspot.com/-kGUpQspAz_s/UGmmQ1K_mvI/AAAAAAAADnY/9Y164v0Y5UA/s1600/laura-gallego-libro-portales.jpg"
                            className="thumbnail"
                        ></img>
                        <h3 className="autor">Dr. Pendulo</h3>

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
