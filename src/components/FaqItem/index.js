import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClicked: false}

  buttonClicked = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {eachFaq, key} = this.props
    const {id, questionText, answerText, onBtnCLicked} = eachFaq
    const {isClicked} = this.state

    const iconimage = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altname = isClicked ? 'minus' : 'plus'

    const renderAuth = () => {
      if (isClicked) {
        return <p>{answerText}</p>
      }
      return null
    }

    return (
      <li>
        <div className="icon-container">
          <h1>{questionText}</h1>
          <button
            label="plus"
            type="button"
            onClick={this.buttonClicked}
            className="button"
          >
            <img src={iconimage} id="plus" alt={altname} />
          </button>
        </div>

        {renderAuth()}
      </li>
    )
  }
}

export default FaqItem
