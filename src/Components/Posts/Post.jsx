import React from 'react'
import Recommended from '../Recommended/Recommended'
import { FaHeart } from 'react-icons/fa'
import './Post.css'
import { MdRemoveRedEye, MdThumbDown, MdThumbUp , MdOutlineBookmark} from 'react-icons/md'
function Post() {
    return (
        <section className="section-Recommended-container">
            <div className="post-section">
                <div className="story-author-container">
                    <div className="head-and-description-container">
                        <div className="head">
                            <h1> <MdOutlineBookmark/> Title</h1> <p className='createdat-style'>created at</p>
                        </div>
                        <div className="sinopsis">
                            <p1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                aliquid quibusdam est expedita incidunt delectus veniam magnam
                saepe voluptas
                            </p1>
                        </div>
                    </div>
                    <div className="body-post">
                        <p2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos ipsa, ratione repellendus quidem, obcaecati explicabo
              non nesciunt excepturi porro optio quos voluptatibus perferendis a
              fugit incidunt modi iste magnam atque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolorum, sed soluta qui repudiandae
              quas similique excepturi consequuntur enim et fugiat ad officia
              facilis blanditiis optio magnam, praesentium non veniam Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
              obcaecati expedita ipsa delectus asperiores sed, cumque ea nihil
              similique beatae eius ab facere eaque assumenda natus sapiente cum
              laboriosam ipsam. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dignissimos ipsa, Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dignissimos ipsa, ratione
              repellendus quidem, obcaecati explicabo non nesciunt excepturi
              porro optio quos voluptatibus perferendis a fugit incidunt modi
              iste magnam atque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorum, sed soluta qui repudiandae quas
              similique excepturi consequuntur enim et fugiat ad officia facilis
              blanditiis optio magnam, praesentium non veniam Lorem ipsum dolor
              sit amet consectetur
                        </p2>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="author-information-container">
                        <img className="image-author-profile" src="adadasdd"></img>
                        <h2>Autor name</h2>
                        <div className="channel-information">
                            <p3> <FaHeart /> 5000</p3>
                            <p4> <MdRemoveRedEye/> 3000</p4>
                        </div>
                    </div>

                    <div className="user-action-container">
                        <button className="like">
              like <MdThumbUp />{' '}
                        </button>
                        <button className="dislike">
                            {' '}
              dislike <MdThumbDown />
                        </button>
                        <button className="Subscribe">
              Subscribe <FaHeart />
                        </button>
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
