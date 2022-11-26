import './App.css';
import React from 'react';
import Timer from '../Timer/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 3000 * 60,
      time: 5000,
      hasCompleted: false,
    }
    this.resetTimer = this.resetTimer.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.stopTimer = this.stopTimer.bind(this);

    this.timer = 0;
  }

  handleMouseLeave() {
    this.stopTimer()
  }

  resetTimer() {
    console.log("reset");
    if (!this.state.hasCompleted) {
      this.setState({
        time: this.state.start
      })
    }
  }

  stopTimer() {
    if (this.timer) {
      console.log("stop" + this.timer);
      clearInterval(this.timer);
    }
  }



  componentDidMount() {
    console.log("start");
    this.timer = setInterval(() => {
      if (this.state.time <= 0) {
        this.setState({
          hasCompleted: true
        })
        clearInterval(this.timer);
      } else {
        this.setState(
          { time: this.state.time - 1000 }
        );
      }
    }, 1000)
    console.log(this.timer);
  }

  render() {
    return (
      <div className="App" onMouseMove={this.resetTimer} onMouseLeave={this.handleMouseLeave}>
        <Timer time={this.state.time} />
      </div>
    )
  }
}

export default App;
