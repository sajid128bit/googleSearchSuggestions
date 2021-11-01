// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, changeState2} = props
  const {suggestion} = suggestionItem
  const changeFun = () => {
    changeState2(suggestion)
  }
  return (
    <li className="listCon">
      <p className="para">{suggestion}</p>
      <img
        className="arrowImage"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={changeFun}
      />
    </li>
  )
}
export default SuggestionItem
