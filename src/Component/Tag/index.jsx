import React, { Component } from 'react'
import './index.scss'
import bg from '../Images/tagBkg.jpg'
import { Outlet } from 'react-router';




export default class Tags extends Component {
    getBgImg = () => {
        return `url(${bg})`;
    }
    componentDidMount() {
        window.tagcloud({
            selector: '.cloud',
            fontSize: 16,
            radius: 100,
            mspeed: "normal",
            ispeed: "normal",
            direction: 135,
            keep: false,
        })
    }
    render() {

        return (
            <div className="tag" style={{ backgroundImage: this.getBgImg() }}>
                <Outlet />
            </div>
        )
    }
}