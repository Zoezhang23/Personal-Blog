import React from 'react'
import Animation from './CanvasAnimation/index'
import Slogen from './Slogen/index'
import FloatBar from './FloatBar/index'
import { Outlet } from 'react-router-dom'

export default function Main() {
    return (
        <React.Fragment>
            <Animation />
            <Slogen />
            <FloatBar />
            <Outlet />
        </React.Fragment>
    )
}
