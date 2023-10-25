import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0, isRunning: false}

  id = null

  Start = () => {
    const {isRunning} = this.state
    if (!isRunning) {
      this.id = setInterval(() => {
        this.setState(prevState => ({
          timeInSeconds: prevState.timeInSeconds + 1,
          isRunning: true,
        }))
      }, 1000)
    }
  }

  Stop = () => {
    clearInterval(this.id)
    this.setState({isRunning: false})
  }

  Reset = () => {
    clearInterval(this.id)
    this.setState({timeInSeconds: 0, isRunning: false})
  }

  formatTime = () => {
    const {timeInSeconds} = this.state
    const Minutes = Math.floor(timeInSeconds / 60)
    const Seconds = timeInSeconds % 60
    return `${Minutes < 10 ? '0' : ''}${Minutes}:${
      Seconds < 10 ? '0' : ''
    }${Seconds}`
  }

  render() {
    return (
      <div className="container">
        <h1 className="appHeader">Stopwatch</h1>
        <div className="box">
          <div className="timeWrap">
            <div className="imP">
              <img
                id="timer"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p id="timerText">Timer</p>
            </div>
            <h1>{this.formatTime()}</h1>
          </div>
          <div className="buttonWrap">
            <button onClick={this.Start} className="Start">
              Start
            </button>
            <button onClick={this.Stop} className="Stop">
              Stop
            </button>
            <button onClick={this.Reset} className="Reset">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
