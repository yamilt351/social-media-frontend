import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdOutlineMenuBook } from 'react-icons/md'
import Card from '../Card/card.jsx'
import './Recommended.css'
/*eslint linebreak-style: ["error", "unix"]*/
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
function Recommended({ prop, tags }) {
    const [recommend, setRecommend] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const resRecommended = await axios.get(`${URL}posts/tags?tags=${tags}`)
            setRecommend(resRecommended.data)
        }
        fetchData()
    }, [tags])

    return (
        <section className="Recommended-section" id="Recommended">
            <div className="text-Recommended-container">
                <h1 className="Recomendations">
                    <MdOutlineMenuBook /> Read More:
                </h1>
            </div>
            <div className={!prop ? 'cards-Recommended-container' : 'off'}>
                {recommend.map((recomendation) => {
                    const { title, like, userId} = recomendation
                    return (
                        <Card
                            title={title}
                            like={like}
                            userId={userId}
                            key={recomendation._id}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Recommended
