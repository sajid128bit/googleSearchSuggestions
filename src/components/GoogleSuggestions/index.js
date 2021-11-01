// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchEle: ''}

  changeInput = event => {
    this.setState({searchEle: event.target.value})
  }

  changeState = suggestion => {
    this.setState({searchEle: suggestion})
  }

  render() {
    const {searchEle} = this.state
    const {suggestionsList} = this.props
    const updatedList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchEle.toLowerCase()),
    )
    return (
      <div className="container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="searchContainer">
          <div className="searchCross">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIcon"
            />
            <input
              type="search"
              value={searchEle}
              className="search"
              placeholder="Search Google"
              onChange={this.changeInput}
            />
          </div>
          <ul className="unorderList">
            {updatedList.map(eachItem => (
              <SuggestionItem
                suggestionItem={eachItem}
                key={eachItem.id}
                changeState2={this.changeState}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
