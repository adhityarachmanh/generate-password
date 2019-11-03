import React, { Component } from 'react'
import { funcButton } from '../../utils/funcButton'

export default class ButtonGenerate extends Component {
    componentDidMount() {
        funcButton(this.props.random)
    }
    render() {
        return (
            <button className="btn generate" id="generate">Generate Password</button>
        )
    }
}
