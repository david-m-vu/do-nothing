import './App.css';
import React from 'react';
import Timer from '../Timer/Timer';
import Settings from "../Settings/Settings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 2000 * 60,
      time: 2000 * 60,
      hasCompleted: false,
      onApp: true
    }
    this.resetTimer = this.resetTimer.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);

    this.timer = 0;
  }

  handleMouseLeave() {
    this.setState({
      onApp: false
    });
    console.log("MOUSE LEAVE");
  }

  handleMouseEnter() {
    this.setState({
      onApp: true
    })
    console.log("MOUSE ENTER");
  }

  resetTimer() {
    console.log("reset");
    if (!this.state.hasCompleted) {
      this.setState({
        time: this.state.start
      })
    }
  }

  componentDidMount() {
    console.log("start");
    this.timer = setInterval(() => {
      if (this.state.time <= 0) {
        this.setState({
          hasCompleted: true
        })
        this.displayFinish();
      } else if (this.state.onApp) {
        this.setState(
          { time: this.state.time - 1000 }
        );
      }
    }, 1000)
    console.log(this.timer);
  }

  render() {
    return (
      <div className="App" onMouseMove={this.resetTimer} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}>
        <div className="Settings">
          <Settings/>
        </div>
        <div className="Timer">
          <Timer time={this.state.time} hasCompleted={this.state.hasCompleted}/>
        </div>
      </div>
    )
  }
}

export default App;
