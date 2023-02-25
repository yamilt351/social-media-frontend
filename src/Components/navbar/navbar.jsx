import React, { useState } from 'react'
import { data } from './data'
import { loged } from './data'
import { Link } from 'react-router-dom'
import { MdMenu } from 'react-icons/md'
import './navbar.css'

function Navbar() {
    const [show, setShow] = useState(true)

    function showNabvar() {
        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    return (
        <nav className={show ? 'NavbarContainer' : 'NavbarContainerHide'}>
            <button className="Menu" onClick={() => showNabvar()}>
                <MdMenu />
            </button>
		
            <div className="UserProfile">
                <div className={show? 'UserPhoto' : 'hide-text'}>
                    <Link to={'/Profile'}>
                        <img
                            className={show? 'Photo':'hide-text'}
                            src="https://i.pinimg.com/originals/7b/b0/c7/7bb0c7c3684088adced7c455f9b0a307.jpg"
                        />
                    </Link>
                </div>
                <h1 className={show? 'Username':'hide-text'}>
                    <Link className='Username' to={'/Profile'}>
            Username
                    </Link>
                </h1>
            </div>

            <div className="UnLoged">
                <ul className="List">
                    {data.map((links) => {
                        const { id, name, icon, url } = links
                        return (
                            <li className="LinkContainer" key={id}>
                                <Link to={url} className="link-list">
                                    <div className={show ? 'normal' : 'big'}>{icon}</div>{' '}
                                    <p className={show ? 'show-text' : 'hide-text'}>{name}</p>{' '}                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="Loged">
                <ul className="List">
                    {loged.map((log) => {
                        const { id, name, icon, url } = log
                        return (
                            <li className="LinkContainer" key={id}>
                                <Link to={url} className="link-list">
                                    <div className={show ? 'normal' : 'big'}>{icon}</div>{' '}
                                    <p className={show ? 'show-text' : 'hide-text'}>{name}</p>{' '}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
