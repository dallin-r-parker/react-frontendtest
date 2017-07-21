import React from 'react'
import logo from '../../Assets/logo.svg'
import searchIcon from '../../Assets/icon_search.png'
import './Nav.css'

export default function Nav(props) {
	return(
		<div className="nav-container">
			<img src={logo} alt="Fohr Logo"/>
			<img src={searchIcon} alt="Search Icon"/>
			<input type="text" placeholder="Search for an influencer, list #hashtag or @handle"/>
		</div>
	)

}

//ONLY PRESSING ENTER!