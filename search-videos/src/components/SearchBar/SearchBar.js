import React from 'react';
import Button from '../Button/Button';

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment"  style={{backgroundColor: 'LightYellow'}}>
        <form onSubmit={ this.onFormSubmit } className="ui form">
          <div className="field">
            <label>Search Videos</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
            <div style={{marginTop: '20px'}}>
              <Button value="Search" onClick={this.onInputChange}/>
            </div>
          </div> 
       </form>
      </div>
    );
  }
}

export default SearchBar;
