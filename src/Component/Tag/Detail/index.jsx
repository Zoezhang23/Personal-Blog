import React from 'react'
import { List } from 'antd';
import { ARTICLE_DATA } from '../../data'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'


const getData = (name) => {
    return ARTICLE_DATA.filter(item => item.tag === name)
}

// for (let i = 1; i < 15; i++) {
//     listData.push({
//         title: `${i}`,
//         date: '01 / 12 / 2021',
//         description:
//             'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//         content:
//             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     });
// }

export default function Detail() {
    const { name } = useParams();
    const listData = getData(name)
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
                    <List.Item key={item.id}>
                        <Link to={`/article/detail/${item.id}`} style={{ color: '#fff' }}>
                            {item.description}
                            <span> ---{item.date}</span></Link>
                    </List.Item>
                )}
            />
        </div>
    )
}
