import React, { useEffect, useState } from 'react'
import './CardContainer.css'
import Card from '../Card/card'
import axios from 'axios'
import { http } from '../ApiCall/FetchFunctions'

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

function CardContainer({ indicator, type }) {
    const [article, setArticle] = useState([])

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await axios.get(`${http}posts/${type}`)
                const data = res.data
                setArticle(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchArticles()
    }, [type])

    return (
        <>
            <h1 className="page-indicator">{indicator}</h1>
            {article.map((value) => {
                const { id, userId, createdAt, description, title, like } = value
                return (
                    <div className="section-card-container" key={id}>
                        <Card
                            type={type}
                            userId={userId}
                            createdAt={createdAt}
                            description={description}
                            title={title}
                            like={like}
                        />
                    </div>
                )
            })}
        </>
    )
}
export default CardContainer
