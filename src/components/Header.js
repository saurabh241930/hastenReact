
import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link className="item" to="/"><div className="ui huge header">HASHTEN</div></Link>
            <div className="right menu">
            <Link className="item" to="/">Add manual data</Link>
            </div>
        </div>
    )
}

 
export default Header;