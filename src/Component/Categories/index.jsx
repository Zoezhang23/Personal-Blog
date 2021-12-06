import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import './index.scss'
import bg from '../Images/cateBkg.png'

export default class Category extends Component {
    getBgImg = () => {
        return `url(${bg})`;
    }
    render() {
        return (
            <div className='category' style={{ backgroundImage: this.getBgImg() }}>
                <Outlet />
            </div >

        )
    }
}
