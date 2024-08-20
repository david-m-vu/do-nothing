import React from "react";
import "./Settings.css";
import SettingsIcon from '@mui/icons-material/Settings';

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
        this.props.onTimeChange(event.target.value * 1000);
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
                    <div className="icon" onClick={this.toggleSettings}>
                        <SettingsIcon  sx={{ fontSize: 40 }}></SettingsIcon>
                    </div>
                    <div className="adjustments">
                        <div className="timer-length">
                            <p>Timer length:</p>
                            <input defaultValue={(this.props.start / 1000)} onChange={this.handleTimeChange}/>
                            <p>seconds</p>
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
                    <div className="icon">
                        <SettingsIcon sx={{ fontSize: 40 }}></SettingsIcon>
                    </div>
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