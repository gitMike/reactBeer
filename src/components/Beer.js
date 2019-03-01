//Medal.js
import React from 'react';

export default class Beer extends React.Component{

	render() {
		return(
			<li className="beer">
			    <span className="name">{this.props.name}</span>
				<span className="style">{this.props.style}</span>
				<span className="ibu">{this.props.ibu}</span>
				<span className="abv"> {this.props.abv}</span>
				<span className="id"> ({this.props.id})</span>
				<span className="notes"> {this.props.notes}</span>
			</li>			
		);
	}

}
