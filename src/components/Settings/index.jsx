import React, { Component } from 'react'

export default class Settings extends Component {
    render() {
        return (
            <div className="settings">
                <span className="settings__title field-title">settings</span>
                <div className="setting">
                    <input type="checkbox" id="uppercase" defaultChecked />
                    <label htmlFor="uppercase">Include Uppercase</label>
                </div>
                <div className="setting">
                    <input type="checkbox" id="lowercase" defaultChecked />
                    <label htmlFor="lowercase">Include Lowercase</label>
                </div>
                <div className="setting">
                    <input type="checkbox" id="number" defaultChecked />
                    <label htmlFor="number">Include Numbers</label>
                </div>
                <div className="setting">
                    <input type="checkbox" id="symbol" />
                    <label htmlFor="symbol">Include Symbols</label>
                </div>
            </div>
        )
    }
}
