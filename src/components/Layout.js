//AthletePreview.js
import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component{
	render() {
		return(
			<div className="app-container">
				<header>
					<Link to="/">
						<img className="logo" src="/img/summer-sunshine-alcohol-drink.jpg"/>
					</Link>
				</header>
				
				<div className="app-content">{this.props.children}</div>

				<footer>
					<p>
						This is a NOT demo to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
					</p>
				</footer>
			</div>
		);
	}
}

//props.children React provides this to every component, allows us to nest components inside each other!