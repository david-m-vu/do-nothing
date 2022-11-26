import React from "react"

class Timer extends React.Component {
    displayTime() {
        let seconds = this.props.time / 1000;
        let minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        return `${minutes} : ${seconds}`;
    }

    render() {
       
        return (
            <div>
                <h3>{this.displayTime()}</h3>
            </div>
        );
    }
}

export default Timer