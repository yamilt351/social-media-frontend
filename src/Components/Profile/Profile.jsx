import React from 'react'
import './Profile.css'
import Card from '../Card/card.jsx'
function Profile() {
    return (
        <section className="profile-container-main" id="profile">
            <section className="user-profile-window-container">
                <div className="user-information-container">
                    <div className="user-image-container">
                        <img
                            src="adasd"
                            alt="user-image-profile"
                            className="user-image-profile-following"
                        />
                    </div>
                    <div className="user-data-container-profile">
                        <div className="user-contact-information-container">
                            <div className="username-container-profile">
                                <h1 className="username-profile">username</h1>
                            </div>
                            <div className="email-container-profile">
                                <h2 type="text" className="email-profile">
                  userEmail@hotmail.com
                                </h2>
                            </div>
                            <div className="createdat-container-profile">
                                <h2 type="text" className="created-profile">
                  created : 25 days ago
                                </h2>
                            </div>
                            <div className="followers-container">
                                <h3 className="followers-user">followed by 23000000 readers</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="following-users">
                <h1 className="following-users-title">following:</h1>
                <div className="following-users-container">
                    <div className="user-followed-container">
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
                </div>
            </section>
        </section>
    )
}
export default Profile
