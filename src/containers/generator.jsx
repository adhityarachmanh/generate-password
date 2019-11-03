import React from 'react'
import * as Components from '../components'
import { connect } from 'react-redux'
import { LENGTH_ACTION } from '../store/actions/lengthAction'


class Generator extends React.Component {

    render() {
        return (
            <div className="container">
                <h2 className="title">Generate Password</h2>
                <Components.Result {...this.props} />
                <Components.LengthRange {...this.props} />
                <Components.Settings  />
                <Components.ButtonGenerate {...this.props} />
            </div>
        )
    }
}
const mapStateToProps = ({ ui, random }) => {
    return {
        ui,
        random
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        LENGTH_ACTION: (NEW_LENGTH) => dispatch(LENGTH_ACTION(NEW_LENGTH))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Generator)