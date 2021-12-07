import React from 'react'
import { useParams } from 'react-router'
import cover from '../../Images/artItem.png'
import cover2 from '../../Images/artItem2.png'
import '../index.scss'
import { MessageOutlined, LikeOutlined, StarOutlined, TagTwoTone, AppstoreTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Space, } from 'antd';


const data = [
    {
        id: 1,
        title: 'React',
        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
        date: '06/12/2021',
        views: 100,
        liked: 100,
        comments: 100,
        category: 'Technology',
        tag: 'React',
        cover: cover
    },
    {
        id: 2,
        title: 'React',
        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
        date: '06/12/2021',
        views: 100,
        liked: 100,
        comments: 100,
        category: 'Technology',
        tag: 'React',
        cover: cover2,
    },
    {
        id: 3,
        title: 'React',
        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
        date: '06/12/2021',
        views: 100,
        liked: 100,
        comments: 100,
        category: 'Technology',
        tag: 'React',
        cover: cover,
    },
    {
        id: 4,
        title: 'React',
        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
        date: '06/12/2021',
        views: 100,
        liked: 100,
        comments: 100,
        category: 'Technology',
        tag: 'React',
        cover: cover2,
    },
    {
        id: 5,
        title: 'React',
        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
        date: '06/12/2021',
        views: 100,
        liked: 100,
        comments: 100,
        category: 'Technology',
        tag: 'React',
        cover: cover,
    },
    {
        id: 6,
        title: 'React',
        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
        date: '06/12/2021',
        views: 100,
        liked: 100,
        comments: 100,
        category: 'Technology',
        tag: 'React',
        cover: cover2,
    },
    {
        id: 7,
        title: 'React',
        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
        date: '06/12/2021',
        views: 100,
        liked: 100,
        comments: 100,
        category: 'Technology',
        tag: 'React',
        cover: cover,
    },
    {
        id: 8,
        title: 'React',
        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
        date: '06/12/2021',
        views: 100,
        liked: 100,
        comments: 100,
        category: 'Technology',
        tag: 'React',
        cover: cover2,
    },
    {
        id: 9,
        title: 'React',
        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
        date: '06/12/2021',
        views: 100,
        liked: 100,
        comments: 100,
        category: 'technology',
        tag: 'React',
        cover: cover,
    },
    {
        id: 10,
        title: 'React',
        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
        date: '06/12/2021',
        views: 100,
        liked: 100,
        comments: 100,
        category: 'technology',
        tag: 'React',
        cover: cover2,
    },
    {
        id: 11,
        title: 'React',
        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
        date: '06/12/2021',
        views: 100,
        liked: 100,
        comments: 100,
        category: 'technology',
        tag: 'React',
        cover: cover,
    },

]
const IconText = ({ icon, text }) => (
    <Space style={{ color: '#fff' }}>
        {React.createElement(icon)}
        {text}
    </Space>
);
export default function Detail() {
    const { id } = useParams();
    console.log(id);
    const item = data.find(item => item.id === Number(id));

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
                        <IconText icon={StarOutlined} text={item.views} key="list-vertical-star-o" /> &nbsp;
                        <IconText icon={LikeOutlined} text={item.liked} key="list-vertical-like-o" />&nbsp;
                        <IconText icon={MessageOutlined} text={item.comments} key="list-vertical-message" />&nbsp;
                    </div>
                    <div>{item.date}</div>

                </div>

            </div>
        </div>
    )
}
