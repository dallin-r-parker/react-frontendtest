import React from 'react'

export default function Influencers(props) {
	console.log(props)
	return(
		<div className="influencers-container">
			<img src={props.image} alt=""/>
			<blog-title>{props.blog}</blog-title>
			<blogger>{props.first} {props.last}</blogger>
			<p>{props.site}</p>
			<p>{props.location}</p>
			<p>{props.followers} total followers</p>
		</div>
	)
}