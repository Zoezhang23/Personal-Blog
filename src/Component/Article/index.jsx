import React, { Component } from 'react'
import { Outlet } from 'react-router'
import bg from '../Images/artBkg.jpg'
import './index.scss'
import LeftSide from './LeftSide'

export default class Articles extends Component {
    getBgImg = () => {
        return `url(${bg})`;
    }
    render() {
        return (
            <div className="article" style={{ backgroundImage: this.getBgImg() }}>
                <LeftSide />
                <Outlet />
            </div>
        )
    }
}
