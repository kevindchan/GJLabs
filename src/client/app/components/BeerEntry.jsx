var axios = require('axios');
import React, {Component} from 'react';

export default class BeerEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    }
  }
  componentWillMount() {
    this.setState({
      beer: this.props.beer
    })
  }
  imageSelector(size) {
    const src = this.state.beer.labels !== undefined ? this.state.beer.labels[size] : 
      'http://images.huffingtonpost.com/2016-01-26-1453821995-8643361-beermain.jpg';
    return src;
  }
  breweryName(beer) {
    const name = beer.breweries !== undefined ? beer.breweries[0].name : '';
    return name;
  }
  likeHandler(e) {
    const userId = localStorage.userId;
    const liked = e.target;
    const styleFamily = $(liked).data('style-family');
    const beer = {
      beerId: $(liked).val(),
      description: $(liked).data('description'),
      iconUrl: $(liked).data('icon-url'),
      breweryName: $(liked).data('brewery-name'),
      beerName: $(liked).data('beer-name'),
      styleFamily: styleFamily,
      styleFamilyId: $(liked).data('style-family-id'),
      styleId: $(liked).data('style-id'),
      abv: $(liked).data('abv'),
      ibu: $(liked).data('ibu'),
      srm: $(liked).data('srm')
    }
    axios.post('/api/users/' + userId + '/beers', beer)
    .then((response) => {
      this.props.updateBeerLog();
    })
    .catch((err) => {
      console.log('Error posting like.')
    })
  }
  render() { 
    return (
      <div className="col s4">
        <div className="card small">
          <div className="card-image">
            <img className='responsive-img activator' src={this.imageSelector('medium')} />
          </div>
          <div className="card-content activator valign-wrapper">
            <span className="card-title activator grey-text text-
            darken-4" 
              style={{fontSize: '18px', lineHeight: '100%'}}>{this.state.beer.name}
            </span><i className="material-icons right">more_vert</i>
            <p className='center-align valign'>
              <input 
                type="checkbox" 
                className="filled-in right" 
                id={this.state.beer.id} 
                value={this.state.beer.id}
                data-description={this.state.beer.description}
                data-icon-url={this.imageSelector('icon')} 
                data-brewery-name={this.breweryName(this.state.beer)}
                data-beer-name={this.state.beer.name}
                data-style-family={this.state.beer.styleFamily}
                data-style-family-id={this.state.beer.styleFamilyId}
                data-style-id={this.state.beer.styleId}
                data-abv={this.state.beer.abv}
                data-ibu={this.state.beer.ibu}
                data-srm={this.state.beer.srmId}
                onChange={this.likeHandler.bind(this)}
              />
              <label htmlFor={this.state.beer.id}></label>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {this.state.beer.style.name}
              <i className="material-icons right">close</i>
            </span>
            <p>{this.state.beer.description}</p>
          </div>
        </div>
      </div>
    );
  }
}