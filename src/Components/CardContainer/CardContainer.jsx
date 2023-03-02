
import React, { useEffect, useState } from 'react'
import './CardContainer.css'
import Card from '../Card/card'
import axios from 'axios'
import { URL } from '../../urlStore'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/*eslint linebreak-style: ["error", "unix"]*/

function CardContainer({ indicator, type }) {
    const [article, setArticle] = useState([])
    
    useEffect(() => {
        const fetchArticle = async () => {
            const res = await axios.get(`${URL}posts/${type}`)
            const data = res.data
            setArticle(data)
        }
        fetchArticle()
    }, [type])

    return (
        <>
            <h1 className="Page-indicator">{indicator}</h1>
            <div className="section-card-container">
                {article.map((post) => {
                    const {  userId, like, title, createdAt, tags } =
            post
                    return (
                        <div className="card" key={post._id}>

                            <Card
                                title={title}
                                id={post._id}
                                userId={userId}
                                like={like}
                                createdAt={createdAt}
                                tags={tags}
                            />
                        </div>

                    )
                })}
            </div>
        </>
    );
}
export default CardContainer

