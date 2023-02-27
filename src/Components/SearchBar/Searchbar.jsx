import React from 'react'
import './Searchbar.css'
import { MdSearch } from 'react-icons/md'

function Searchbar() {
    return (
        <div className="full-navbar-container">
            <div className="navbar-search-container">
                <div className="navbar-container">
                    <input type="text" className='search-bar' placeholder='Search...'></input>
                </div>
                <div className="button-search-container">
                    <button className="search-button" type="submit"><MdSearch className='icon-svg'/></button>
                </div>
            </div>
        </div>
    )
}
export default Searchbar
