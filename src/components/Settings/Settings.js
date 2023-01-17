import React from "react";
import "./Settings.css";
import settingsIcon from "./gear.png";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggledOn: false
        }

        this.toggleSettings = this.toggleSettings.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleBackgroundToggle = this.handleBackgroundToggle.bind(this);
    }

    handleTimeChange(event) {
        this.props.onTimeChange(event.target.value);
    }

    handleBackgroundToggle(event) {
        this.props.onBackgroundToggle();
    }

    toggleSettings() {
        this.setState({
            toggledOn: !(this.state.toggledOn)
        });
    }

    displaySettings() {
        if (this.state.toggledOn) {
            return (
                <div className="dropdown">
                    <div className="icon">
                        <img src={settingsIcon} alt="Settings Gear" onClick={this.toggleSettings}/>
                    </div>
                    <div className="adjustments">
                        <div className="timer-length">
                            <p>Timer length:</p>
                            <input defaultValue={this.props.start} onChange={this.handleTimeChange}/>
                            <p>ms</p>
                        </div>
                        <div className="background-toggle">
                            <p>Switch background</p>
                            <input type="checkbox" onChange={this.handleBackgroundToggle}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="label-container" onClick={this.toggleSettings}>
                    <p>Settings</p>
                    <img src={settingsIcon} alt="Settings Gear"/>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="Settings">
                <div className="bar-container">
                    {this.displaySettings()}
                </div>
            </div>
        )
    }
}

export default Settings;