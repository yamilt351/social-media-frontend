import React from 'react'
import Recommended from '../Recommended/Recommended'
import './Post.css'
function Post() {
    return (
        <section className="section-Recommended-container">
            <div className="post-section">
                <div className="story-author-container">
                    <div className="head-and-description-container">
                        <div className="head">
                            <h1>Title</h1> <p>created at</p>
                        </div>
                        <div className="sinopsis">
                            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                aliquid quibusdam est expedita incidunt delectus veniam magnam
                saepe voluptas
                            </p>
                        </div>
                    </div>
                    <div className="body-post">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos ipsa, ratione repellendus quidem, obcaecati explicabo
            non nesciunt excepturi porro optio quos voluptatibus perferendis a
            fugit incidunt modi iste magnam atque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolorum, sed soluta qui repudiandae
            quas similique excepturi consequuntur enim et fugiat ad officia
            facilis blanditiis optio magnam, praesentium non veniam Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Blanditiis, obcaecati
            expedita ipsa delectus asperiores sed, cumque ea nihil similique
            beatae eius ab facere eaque assumenda natus sapiente cum laboriosam
            ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos ipsa, Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dignissimos ipsa, ratione repellendus quidem,
            obcaecati explicabo non nesciunt excepturi porro optio quos
            voluptatibus perferendis a fugit incidunt modi iste magnam atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            sed soluta qui repudiandae quas similique excepturi consequuntur
            enim et fugiat ad officia facilis blanditiis optio magnam,
            praesentium non veniam Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, obcaecati expedita ipsa delectus
            asperiores sed, cumque ea nihil similique beatae eius ab facere
            eaque assumenda natus sapiente cum laboriosam ipsam. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa,
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos ipsa, ratione repellendus quidem, obcaecati explicabo
            non nesciunt excepturi porro optio quos voluptatibus perferendis a
            fugit incidunt modi iste magnam atque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolorum, sed soluta qui repudiandae
            quas similique excepturi consequuntur enim et fugiat ad officia
            facilis blanditiis optio magnam, praesentium non veniam Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Blanditiis, obcaecati
            expedita ipsa delectus asperiores sed, cumque ea nihil similique
            beatae eius ab facere eaque assumenda natus sapiente cum laboriosam
            ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos ipsa, Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dignissimos ipsa, ratione repellendus quidem,
            obcaecati explicabo non nesciunt excepturi porro optio quos
            voluptatibus perferendis a fugit incidunt modi iste magnam atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            sed soluta qui repudiandae quas similique excepturi consequuntur
            enim et fugiat ad officia facilis blanditiis optio magnam,
            praesentium non veniam Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, obcaecati expedita ipsa delectus
            asperiores sed, cumque ea nihil similique beatae eius ab facere
            eaque assumenda natus sapiente cum laboriosam ipsam. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa,
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos ipsa, ratione repellendus quidem, obcaecati explicabo
            non nesciunt excepturi porro optio quos voluptatibus perferendis a
            fugit incidunt modi iste magnam atque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolorum, sed soluta qui repudiandae
            quas similique excepturi consequuntur enim et fugiat ad officia
            facilis blanditiis optio magnam, praesentium non veniam Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Blanditiis, obcaecati
            expedita ipsa delectus asperiores sed, cumque ea nihil similique
            beatae eius ab facere eaque assumenda natus sapiente cum laboriosam
            ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos ipsa, Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dignissimos ipsa, ratione repellendus quidem,
            obcaecati explicabo non nesciunt excepturi porro optio quos
            voluptatibus perferendis a fugit incidunt modi iste magnam atque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            sed soluta qui repudiandae quas similique excepturi consequuntur
            enim et fugiat ad officia facilis blanditiis optio magnam,
            praesentium non veniam Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, obcaecati expedita ipsa delectus
            asperiores sed, cumque ea nihil similique beatae eius ab facere
            eaque assumenda natus sapiente cum laboriosam ipsam. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa,
                    </div>
                </div>
                <div className="footer-container">
                    <div className="author-information-container">
                        <img className="image-author-profile" src="adadasdd"></img>
                        <h2>Autor name</h2>
                        <div className='channel-information'>
                            <h3>suscriptors</h3>
                            <h4>views</h4>
                        </div>
                    </div>

                    <div className="user-action-container">
                        <button className="like">like</button>
                        <button className="dislike">dislike</button>
                        <button className="Subscribe">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="Recommended-section-node">
                <Recommended />
            </div>
        </section>
    )
}
export default Post
