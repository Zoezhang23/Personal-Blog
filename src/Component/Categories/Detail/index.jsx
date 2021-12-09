import React from 'react'
import { useParams } from 'react-router'
import { List } from 'antd';
import { ARTICLE_DATA } from '../../data'
import { Link } from 'react-router-dom'




const getData = (name) => {
    return ARTICLE_DATA.filter(item => item.category === name)
}

export default function Detail() {
    const { name } = useParams()
    const listData = getData(name);
    return (
        <div className='detail'>
            <div style={{ fontSize: 16 }}>{name}--({listData.length})</div>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 6,
                }}
                dataSource={listData}
                renderItem={item => (
                    <List.Item key={item.title}>
                        <Link to={`/article/detail/${item.id}`} style={{ color: '#fff' }}>  {item.description} </Link>
                        <span> ---{item.date}</span>
                    </List.Item>

                )}
            />
        </div>
    )
}
