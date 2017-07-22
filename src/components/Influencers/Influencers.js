import React from 'react'
import './Influencers.css'

export default function Influencers(props) {
	return(
		<div className="influencers-container">
				<div className="card-wrap">
				<img src={props.image}
				     alt="{props.blog}"/>
				<h3>{props.blog}</h3>
				<h4>BY {props.first} {props.last}</h4>
				<p>{props.site}</p>
				<p>{props.location}</p>
				<p>{props.followers} total followers</p>
			</div>
		</div>
	)
}