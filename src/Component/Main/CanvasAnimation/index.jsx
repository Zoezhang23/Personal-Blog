import React, { Component } from 'react'
import { index_fullScreenAnimation } from '../../utilis/index'
import "./index.scss"
export default class Animation extends Component {

    ref = React.createRef();
    componentDidMount() {
        index_fullScreenAnimation(this.ref.current);
    }
    render() {
        return (
            <canvas ref={this.ref} className="canvas">
            </canvas>
        )
    }
}
