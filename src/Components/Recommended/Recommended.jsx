import React from 'react'
import {MdOutlineMenuBook} from 'react-icons/md'
import Card from '../Card/card.jsx'
import './Recommended.css'
/*eslint linebreak-style: ["error", "unix"]*/
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
function Recommended({prop}) {
    return (
        <section className="Recommended-section" id="Recommended">
            <div className="text-Recommended-container">
                <h1 className="Recomendations"><MdOutlineMenuBook/> Read More:</h1>
            </div>
            <div className={!prop ? 'cards-Recommended-container' : 'off'}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default Recommended
