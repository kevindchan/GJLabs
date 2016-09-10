import React, {Component} from 'react';

export default ({beer, likeHandler}) => {
  console.log(beer)
  const image = (size) => {
    const src = beer.labels !== undefined ? beer.labels[size] : 
      'http://images.huffingtonpost.com/2016-01-26-1453821995-8643361-beermain.jpg';
    return src;
  }
  const breweryName = (beer) => {
    const name = beer.breweries !== undefined ? beer.breweries[0].name : '';
    return name;
  }
  return (
    <div className="col s4">
      <div className="card small">
        <div className="card-image">
          <img className='responsive-img activator' src={image('medium')} />
        </div>
        <div className="card-content activator valign-wrapper">
          <span className="card-title activator grey-text text-darken-4" 
            style={{fontSize: '18px', lineHeight: '100%'}}>{beer.name}
          </span><i className="material-icons right">more_vert</i>
          <p className='center-align valign'>
            <input 
              type="checkbox" 
              className="filled-in right" 
              id={beer.id} 
              value={beer.id}
              data-description={beer.description}
              data-icon-url={image('icon')} 
              data-brewery-name={breweryName(beer)}
              data-beer-name={beer.name}
              data-style-family={beer.styleFamily}
              data-style-family-id={beer.styleFamilyId}
              data-style-id={beer.styleId}
              data-abv={beer.abv}
              data-ibu={beer.ibu}
              data-srm={beer.srmId}
              onChange={likeHandler}
            />
            <label htmlFor={beer.id}></label>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{beer.style.name}<i className="material-icons right">close</i></span>
          <p>{beer.description}</p>
        </div>
      </div>
    </div>
  );
}