//breweryPage.js
// src/components/breweryPage.js
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import BreweryMenu from './BreweryMenu';
import BeerMenu from './BeerMenu';
import Beer from './Beer';

import Flag from './Flag';
import breweries from '../data/breweries';
//import { View, Image } from 'react-native';
import JsonTable from 'react-json-table';


//import {Table, Column, Cell} from 'fixed-data-table';
const columns = [ 'id',
{key: 'name', label:'Name'},
{key: 'style', label:'Style'},
{key: 'ibu', label:'Bitterness'},
{key: 'abv', label:'% Alcohol'},
{key: 'bottle_image_url', label:'pic', cell: function(item, columnKey){
  return <img className="btl_img" src={item.bottle_image_url} width={item.width} height={item.height} />
}},
{key: 'notes', label: 'Notes'}
];

export default class BreweryPage extends React.Component {

  render() {

        const id = this.props.params.id;
        const brewery = breweries.filter((brewery) => brewery.id === id)[0];

        if (!brewery) {
          return <NotFoundPage/>;
        }
        const headerStyle = { backgroundImage: `url(/img/${brewery.cover})` };
        return (
          <div className="brewery-full">
            <BreweryMenu />
            <div className="brewery">
              <header style={headerStyle}/>
              <div className="picture-container">
                <img src={brewery.image}/>
                <h2 className="name">{brewery.name}</h2>
              </div>
              <section className="description">
                (Find out more on <a href={brewery.link} target="_blank">Wikipedia</a>).
              </section>
{/*
          <section className="beers">
            <p>Winner of <strong>{brewery.beers.length}</strong> beers:</p>
            <ul>{
              brewery.beers.map((beer, i) => <Beer key={i} {...beer}/>)
            }</ul>
          </section>
*/}
          <section className="beers">
            <p>Table of beers</p>
            <JsonTable rows={brewery.beers} columns={columns} />
          </section>

            </div>
            <div className="navigateBack">
              <Link to="/">« Back to the index</Link>
            </div>
          </div>
        );
  }
}
