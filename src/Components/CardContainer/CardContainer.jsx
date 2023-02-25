import React from 'react'
import './CardContainer.css'
import Card from '../Card/card'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

function CardContainer({ indicator }) {
    return (
        <>
            <h1 className="Page-indicator">{indicator}</h1>
            <div className="section-card-container">
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
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
export default CardContainer
