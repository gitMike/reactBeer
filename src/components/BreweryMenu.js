// src/components/AthletesMenu.js
import React from 'react';
import { Link } from 'react-router';
import breweries from '../data/breweries';

export default class BreweryMenu extends React.Component {
  render() {
    return (
      <nav className="breweries-menu">
        {breweries.map(menuBrewery => {
          return <Link key={menuBrewery.id} to={`/brewery/${menuBrewery.id}`} activeClassName="active">
            {menuBrewery.name}
          </Link>;
        })}
      </nav>
    );
  }
}