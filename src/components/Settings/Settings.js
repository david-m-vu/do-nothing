import React from "react";
import "./Settings.css";
import settingsIcon from "./gear.png";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggledOn: false
        }

        this.displaySettings = this.displaySettings.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
    }

    toggleSettings() {
        this.setState({
            toggledOn: !(this.state.toggledOn)
        });
        console.log(this.state.toggledOn);
    }

    displaySettings() {
        if (this.state.toggledOn) {
            return (
                <div className="open">
                    <div className="dropdown">
                        <img src={settingsIcon} alt="Settings Gear"></img>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="closed">
                    <div className="label-container" onClick={this.toggleSettings}>
                        <p>Settings</p>
                        <img src={settingsIcon} alt="Settings Gear"></img>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="Settings">                
                {this.displaySettings()}
            </div>
        )
    }
}

export default Settings;