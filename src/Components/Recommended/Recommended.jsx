import React from 'react'
import Card from '../Card/card.jsx'
import './Recommended.css'
function Recommended() {
    return (
        <section className="Recommended-section" id="Recommended">
            <div className="text-Recommended-container">
                <h1 className='Recomendations'>Read more:</h1>
            </div>
            <div className="cards-Recommended-container">
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
