import React from 'react'
import { Link } from 'react-router-dom'
import { randomColor } from '../utilis/index'

const data = [{
    id: 1,
    name: "react",
    articleNum: 10,
    color: randomColor()
}, {
    id: 2,
    name: "react",
    articleNum: 10,
    color: randomColor()
}, {
    id: 3,
    name: "react",
    articleNum: 10,
    color: randomColor()
}, {
    id: 4,
    name: "react",
    articleNum: 10,
    color: randomColor()
}, {
    id: 5,
    name: "react",
    articleNum: 10,
    color: randomColor()
}]
export default function TagCloud() {
    return (
        <div style={{ marginTop: '15%' }}>
            <div className='cloud'>
                {
                    data.map((item) => {
                        return (<Link key={item.id} style={{ color: '#fff' }} to={`detail/${item.name}`}>
                            <span style={{ borderRadius: 6 }} key={item.id} ref={(el) => {
                                if (el) {
                                    el.style.setProperty('background-color', item.color, 'important');
                                }
                            }}>{item.name}{item.articleNum}</span>
                        </Link>)
                    })
                }
            </div>
        </div>
    )
}
