import './App.css';
import React from 'react';
import Timer from '../Timer/Timer';
import Settings from "../Settings/Settings";
import yeojinBackground from "../../assets/yeojin-background2.jpeg";
import sunsetBackground from "../../assets/sunset.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 2000 * 60,
      time: 2000 * 60,
      hasCompleted: false,
      hasInitiated: false,
      onApp: false,
      background: true
    }
    this.resetTimer = this.resetTimer.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.toggleBackground = this.toggleBackground.bind(this);
    this.startOver = this.startOver.bind(this);

    this.timer = 0;
  }

  handleMouseLeave() {
    this.setState({
      onApp: false
    });
    // console.log("MOUSE LEAVE");
  }

  handleMouseEnter() {
    if (!this.state.hasInitiated) {
      this.setState({
        hasInitiated: true
      })
    }
    this.setState({
      onApp: true
    })
    // console.log("MOUSE ENTER");
  }

  resetTimer() {
    if (!this.state.hasCompleted) {
      this.setState({
        time: this.state.start
      })
    }
  }

  startOver() {
    this.setState({
      time: this.state.start,
      hasCompleted: false
    })
  }

  setTimer(newTime) {
    this.setState({
      start: newTime
    })
  }

  toggleBackground() {
    this.setState({
      background: !this.state.background
    })
  }

  getBackground() {
    if (this.state.background) {
      return { "backgroundImage": `url(${yeojinBackground}`, "backgroundSize": "cover"};
    } else {
      return { "backgroundImage": `url(${sunsetBackground}`, "backgroundSize": "cover"};
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.time <= 0) {
        this.setState({
          hasCompleted: true
        })
      } else if (this.state.onApp) {
        let newTime = this.state.time - 1000;
        if (newTime < 0) {
          newTime = 0;
        }
        this.setState(
          { time: newTime }
        );
      }
    }, 1000)
  }

  render() {
    return (
      <div className="App" style={this.getBackground()}onMouseMove={this.resetTimer} 
      onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} onKeyDown={this.resetTimer} tabIndex="0">
        <div className="Settings">
          <Settings start={this.state.start} onTimeChange={this.setTimer} 
          onBackgroundToggle={this.toggleBackground}/>
        </div>
        <div className="Timer">
          <Timer start={this.state.start} time={this.state.time} 
          hasCompleted={this.state.hasCompleted} hasInitiated={this.state.hasInitiated} onStartOver={this.startOver}/>
        </div>
      </div>
    )
  }
}

export default App;
