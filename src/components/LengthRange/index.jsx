import React, { Component } from 'react'
import { funcLengthRange } from '../../utils/functLengthRange'

class LengthRange extends Component {

    componentDidMount() {
        //func tambahan untuk style bar
        funcLengthRange()
    }
    handleChange = (e) => {
        this.props.LENGTH_ACTION(e.target.value)
    }
    render() {
        const { ui: { length } } = this.props
        return (
            <div className="length range__slider" data-min="4" data-max="32">
                <div className="length__title field-title" data-length={length}>length:</div>
                <input onChange={this.handleChange} id="slider" type="range" min="4" max="32" defaultValue={length} />
            </div>
        )
    }
}
export default LengthRange
