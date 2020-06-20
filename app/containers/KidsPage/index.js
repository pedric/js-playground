/*
 * KidsPage
 *
 * This is the first thing users see of our App, at the '/kids' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import animals from './animals';
import surroundings from './surroundings';

class KidsPage extends React.Component{

  constructor(){
    super();
    this.state = {
      animals: animals,
      surroundings: surroundings,
      active_background: surroundings[0].image,
      active_animal: animals[0].image
    }
  }

  render(){

    const bg_styles = {
  
    }

    const animal_styles = {

    }

    return (
      <div>
        <img style={bg_styles} className={'surrounding-image'} src={this.state.active_background} alt='#' />
        <img style={animal_styles} className={'animal-image'} src={this.state.active_animal} alt='#' />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    )  
  }
}

export default KidsPage;