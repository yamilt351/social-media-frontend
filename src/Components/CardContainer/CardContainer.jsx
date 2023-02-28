import React, { useEffect, useState } from 'react'
import './CardContainer.css'
import Card from '../Card/card'
import axios from 'axios'
import { http } from '../ApiCall/FetchFunctions'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

function CardContainer({ indicator }) {
    const [article, setArticle] = useState([])

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await axios.get(`${http}posts/random`)
                setArticle(res.data)
                console.log(article)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchArticles()
    }, [])
    return (
        <>
            <h1 className="Page-indicator">{indicator}</h1>
            <div className="section-card-container">
                {article.map(() => {
                    <Card/>
                })}
            </div>
        </>
    )
}
export default CardContainer
