//BeerMenu.js
import React from 'react';
import { Link } from 'react-router';
import Beer from './Beer';
import breweries from '../data/breweries';

export default class BeerMenu extends React.Component {
  render() {
  	const id = this.props.id; //this.props.params.id;
  	const brewery = breweries.filter((brewery) => brewery.id === id)[0];
    return ( <div id={this.id} style="here"> Mike </div>
     // <nav className="beer-menu">
      //   {brewery.beers.map(beer => {
      //     return <Link key={beer.id} to={`/beer/${beer.id}`} activeClassName="active">
      //       {beer.name}
      //     </Link>;
      //   })}
      // </nav>
    );
  }
}