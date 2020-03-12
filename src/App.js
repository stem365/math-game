import React from 'react';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputGiven: false
    };
    this.inputValue = ''
    this.textInputRef = React.createRef()
    this.totalCount = 0
    this.correctCount = 0
    this.number1 = 0
    this.number2 = 0
    this.correctValue = ''
    this.correctLabel = ''
    this.correctLabelColor = ''
  }

  handleSubmit = (event) => {
    this.totalCount++
    if (this.inputValue === this.correctValue) {
      this.correctCount++
      this.correctLabel = 'Correct!'
      this.correctLabelColor = 'green'
    } else {
      this.correctLabel = 'Wrong!'
      this.correctLabelColor = 'red'
    }
    this.setState({ inputGiven: true })
    event.preventDefault();
  }

  handleChange = (event) => {
    this.inputValue = event.target.value
  }

  handleContinueClick = (event) => {
    // reset text input field
    this.textInputRef.current.value = ''
    // render the UI: now user should give input again
    this.setState({ inputGiven: false })
  }

  getRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1
  }

  showCalculationTask = () => {
    // only show a new calculation, when waiting for a new user input
    if (!this.state.inputGiven) {
      this.number1 = this.getRandomNumber()
      this.number2 = this.getRandomNumber()
      this.correctValue = String(this.number1 * this.number2)
    }
    return (<b>{this.number1 + ' \u00d7 '+ this.number2}</b>)
  }

  render() {
    // show continue button and correct labels only, if user has given input
    let correctLabelLayout = ''
    let correctResultLayout = ''
    let continueButtonLayout = ''
    if (this.state.inputGiven == true) {
      correctLabelLayout =
        <div style={{lineHeight: 4}}>
          <strong>
            <font color={this.correctLabelColor}>
              {this.correctLabel}
            </font>
          </strong>
        </div>
      // show 'correct result is' text only when user's answer was wrong
      if (this.inputValue !== this.correctValue) {
        correctResultLayout =
          <div  style={{lineHeight: 2}}>
            The correct answer is {this.correctValue}
          </div>
      }
      continueButtonLayout =
        <div  style={{lineHeight: 2}}>
          <Button
            variant="primary"
            onClick={this.handleContinueClick}>
            Continue
            </Button>{' '}
        </div>
    }
    return (
      <div>
        <header className="App-header">
          <p style={{lineHeight: 4}}>
            <strong>{this.correctCount} of {this.totalCount} correct!</strong>
        </p>
          <p>
            Calculate
        </p>
          <p>
            {this.showCalculationTask()}
          </p>
          <form onSubmit={this.handleSubmit}>
            <input
              ref={this.textInputRef}
              type='text'
              onChange={this.handleChange}
              // disable text input, when user has just given input
              disabled={this.state.inputGiven}
            />
            <input
              type='submit'
              value='Done'
              // disable submit button, when user has just given input
              disabled={this.state.inputGiven}
            />
            {/* <input type="reset" defaultValue="Reset" /> */}
          </form>
          {correctLabelLayout}
          {correctResultLayout}
          {continueButtonLayout}
        </header>
      </div>
    );
  }
}

export default App;
