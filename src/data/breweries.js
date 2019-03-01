"use strict";


const breweries = [
  {
    'id': 'meb',
    'name': 'Stone Brewing',
    'country': 'usa',
    'state' : 'CA',
    'image': 'http://www.stonebrewing.com/sites/default/files/images/locations/logos/escondido-logo.png',
    'cover': 'http://www.stonebrewing.com/sites/default/files/images/locations/logos/escondido-logo.png',
    'link': 'http://www.stonebrewing.com/visit/bistros/escondido',
    'info_link' : 'https://en.wikipedia.org/wiki/Stone_Brewing_Co.',
    'beers': [
      { 'id': '10001','name': 'Double IPA', 'style': 'IPA', 'ibu': '100+', 'abv': '8.5', 'bottle_image_url': 'http://www.stonebrewing.com/sites/default/files/beer/menu/stone-ruin-2-menu.png', 'width':'25%', 'height':'25%','notes': 'Delciouso!' },
      { 'id': '10002','name': 'Smoked Porter', 'style': 'Porter', 'ibu': '53', 'abv': '5.9', 'bottle_image_url': 'http://www.stonebrewing.com/sites/default/files/beer/menu/2016_smokedporter_menu.png', 'width':'25%', 'height':'25%','notes': 'Heidi favorite.' }, 
      { 'id': '10003','name': 'Coffe Milk Stout', 'style': 'Stout', 'ibu': '40', 'abv': '5.0', 'bottle_image_url': 'http://www.stonebrewing.com/sites/default/files/beer/menu/2016_cms_bottle_0.png', 'width':'25%', 'height':'25%','notes': 'Heidi favorite.' }, 

    ],
  },
  {
    'id': 'aren',
    'name': 'EvilTwin Brewing',
    'country': 'usa',
    'state' : 'NY',
    'image': 'http://media.cargocollective.com/1/10/331797/headerimg/Evil_Twin_Logo.jpg',
    'cover': 'http://media.cargocollective.com/1/10/331797/headerimg/Evil_Twin_Logo.jpg',
    'link': 'http://eviltwin.dk/',
    'info_link' : 'https://en.wikipedia.org/wiki/Evil_Twin_Brewing',
    'beers': [
      { 'id': '20001','name': 'Don No', 'style': 'Berliner Weisse', 'ibu': '0', 'abv': '10', 'bottle_image_url': 'http://payload488.cargocollective.com/1/10/331797/12063335/prt_300x630_1476367862.jpg', 'width':'25%', 'height':'15%','notes': 'New to us' },
      { 'id': '20002','name': 'Sour Bikini', 'style': 'Sour', 'ibu': '0', 'abv': '10', 'bottle_image_url': 'http://payload323.cargocollective.com/1/10/331797/8760180/prt_300x630_1413922460.jpg', 'width':'25%', 'height':'15%','notes': 'Soureeeee' }, 
      { 'id': '20003','name': 'I Love You With My Stout', 'style': 'Stout', 'ibu': '0', 'abv': '10+', 'bottle_image_url': 'http://payload268.cargocollective.com/1/10/331797/7679006/prt_300x630_1403015571.jpg', 'width':'25%', 'height':'15%','notes': 'We both like this alot!' }, 

    ],
  }
];


export default breweries;

