import React from 'react'
import { Link } from 'react-router-dom'
import { randomColor } from '../utilis/index'
import { ARTICLE_DATA } from '../data'

const getData = () => {
    const cate = [];
    let id = 0
    ARTICLE_DATA.forEach(item => {
        const index = cate.findIndex(c => c.name === item.tag);
        if (index > -1) {
            cate[index].articleNum++;
            // c.number++;
        } else {
            id++;
            cate.push({
                id,
                name: item.tag,
                articleNum: 1,
                color: randomColor()
            });
        }
    })
    return cate;
}
export default function TagCloud() {
    return (
        <div style={{ marginTop: '15%' }}>
            <div className='cloud'>
                {
                    getData().map((item) => {
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
