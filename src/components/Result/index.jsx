import React, { Component } from 'react'
import { funcResult } from '../../utils/functResult'

export default class Result extends Component {
    componentDidMount() {
        funcResult()
    }
    render() {
        return (
            <div className="result">
                <div className="result__title field-title">Generated Password</div>
                <div className="result__info right">click to copy</div>
                <div className="result__info left">copied</div>
                <div className="result__viewbox" id="result">CLICK GENERATE</div>
                <button id="copy-btn" style={{ '--x': 0, '--y': 0 }}><i className="far fa-copy"></i></button>
            </div>
        )
    }
}
