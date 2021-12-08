import React from 'react'
import { useParams } from 'react-router'
import '../index.scss'
import { TagTwoTone, AppstoreTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Space, } from 'antd';
import { Comments } from './Comments/index'
import { ARTICLE_DATA } from '../../data'
import CommentsEditor from './Comments/index'



const IconText = ({ icon, text }) => (
    <Space style={{ color: '#fff' }}>
        {React.createElement(icon)}
        {text}
    </Space>
);
export default function Detail() {
    const { id } = useParams();
    const item = ARTICLE_DATA.find(item => item.id === id);

    return (
        <div className='article-detail'>
            <div style={{ display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                <div className='cover' style={{ backgroundImage: `url(${item.cover})` }}></div>
                <div className='title'>{item.title}</div>
                <div className='content'>{item.content}</div>
                <div className='extra'>
                    <div>
                        <TagTwoTone twoToneColor='purple' />
                        <Link to={`/tag/detail/${item.tag}`} style={{ color: '#fff' }}>{item.tag}</Link>
                        <AppstoreTwoTone twoToneColor='green' />
                        <Link to={`/categories/detail/${item.category}`} style={{ color: '#fff' }}>{item.category}</Link>
                    </div>
                    <div className='icons'>
                        {Comments(item.id)}

                    </div>
                    <div>{item.date}</div>
                </div>
                <div >
                    {<CommentsEditor />}
                </div>

            </div>
        </div>
    )
}
