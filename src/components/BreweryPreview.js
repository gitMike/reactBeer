// src/components/AthletePreview.js
import React from 'react';
import { Link } from 'react-router';

export default class BreweryPreview extends React.Component {
  render() {
    return (
      <Link to={`/brewery/${this.props.id}`}>
        <div className="brewery-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="beer-count"><img src="/img/generic_beer.png"/> {this.props.beers.length}</span>
        </div>
      </Link>
    );
  }
}