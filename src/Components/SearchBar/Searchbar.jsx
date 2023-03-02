import React from 'react'
import { MdSearch } from 'react-icons/md'
import './Searchbar.css'
/*eslint linebreak-style: ["error", "unix"]*/
function Searchbar() {

    return (
        <div className="full-navbar-container">
            <div className="container__search">
                <input type="text" className='container__search__input' placeholder='Search here...' />
                <button className='search__btn'>
                    <MdSearch/>
                </button>
            </div>
        </div>
    )
}
export default Searchbar
