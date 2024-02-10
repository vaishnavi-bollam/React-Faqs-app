// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    console.log(faqsList)
    return (
      <div className="main-bg">
        <h1 className="heading">FAQs</h1>
        <ul>
          {faqsList.map(eachFaq => (
            <FaqItem
              eachFaq={eachFaq}
              onBtnCLicked={this.onBtnCLicked}
              key={eachFaq.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
