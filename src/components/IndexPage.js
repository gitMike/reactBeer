//IndexPage.js
import React from 'react';
import BreweryPreview  from './BreweryPreview';
import breweries from '../data/breweries';

export default class IndexPage extends React.Component{
	render() {
		return(
			<div className="home">
				<div className="brewery-selector">
					{breweries.map(breweryData => <BreweryPreview key={breweryData.id} {...breweryData} />)}
				</div>
				<div className="app-content">{this.props.children}</div>
			</div>
		);
	}
}

//pass ALL athlete data using spread operator -- don't know (or care) what data is displayed!