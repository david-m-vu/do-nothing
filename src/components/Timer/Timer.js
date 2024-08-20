import React from "react"
import "./Timer.css"

class Timer extends React.Component {
    displayTime() {
        let seconds = this.props.time / 1000;
        let minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;

        if (Math.floor(seconds / 10) === 0) {
            seconds = '0' + seconds;
        }

        return `${minutes} : ${seconds === 0 ? "00" : seconds}`;
    }

    getTimerClass() {
        if (this.props.start === this.props.time && this.props.hasInitiated) {
            return "fail-timer";
        } else if (this.props.time === 0) {
            return "success-timer";
        } else {
            return "running-timer";
        }
    }

    render() {
       
        return (
            <div className="Timer">
                <div className="popup-text">
                    {this.props.hasCompleted && 
                    <div className="finish">
                        <h3>Congratulations! You made it!</h3>
                        <button onClick={this.props.onStartOver}>Start Over</button>
                    </div>}
                    {(this.props.start === this.props.time && this.props.hasInitiated && !this.props.hasCompleted) && 
                    <div className="fail">
                        <h3>~Live in the moment~</h3>
                    </div>}
                </div>
                <h3 className={this.getTimerClass()}>{this.displayTime()}</h3>
            </div>
        );
    }
}

export default Timer