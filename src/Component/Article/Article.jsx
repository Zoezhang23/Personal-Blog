import React, { useState, useEffect } from 'react';
import { List, Skeleton, Divider, Space, } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MessageOutlined, LikeOutlined, StarOutlined, TagTwoTone, AppstoreTwoTone } from '@ant-design/icons';
import { Card } from 'antd';
import artItem from '../Images/artItem.png'

const { Meta } = Card;
export function Article() {
    return (
        <>
            {InfiniteListExample()}
        </>
    )
}
const InfiniteListExample = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const IconText = ({ icon, text }) => (
        <Space style={{ color: '#fff' }}>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then(res => res.json())
            .then(body => {
                // set for test 
                // setData([...data, ...body.results]);
                setData([
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
                        cover: artItem,
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
                        cover: artItem,
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
                        cover: artItem,
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
                        cover: artItem,
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
                        cover: artItem,
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
                        cover: artItem,
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
                        cover: artItem,
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
                        cover: artItem,
                    },
                    {
                        id: 9,
                        title: 'React',
                        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
                        date: '06/12/2021',
                        views: 100,
                        liked: 100,
                        comments: 100,
                        category: 'Technology',
                        tag: 'React',
                        cover: artItem,
                    },
                    {
                        id: 10,
                        title: 'React',
                        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
                        date: '06/12/2021',
                        views: 100,
                        liked: 100,
                        comments: 100,
                        category: 'Fashion',
                        tag: 'React',
                        cover: artItem,
                    },
                    {
                        id: 11,
                        title: 'React',
                        content: "My strengths lie in my ability to learn quickly and have a pleasant disposition, and I can work effectively in dynamic environments. I am able to adapt to challenging work and to commit to project development in a short period of time.",
                        date: '06/12/2021',
                        views: 100,
                        liked: 100,
                        comments: 100,
                        category: 'Life',
                        tag: 'React',
                        cover: artItem,
                    },

                ]);
                setLoading(false);

            })
            .catch(() => {
                // set true for test,change in real API
                setLoading(false)
                // setLoading(false);
            });
        setLoading(false);
    };

    useEffect(() => {
        loadMoreData();
    }, []);

    return (
        <div
            id="scrollableDiv"
            style={{
                height: '100%',
                width: '75%',
                top: 64,
                bottom: 150,
                left: '25%',
                overflow: 'auto',
                padding: '0 16px',
                position: 'absolute'
            }}
        >
            <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < 50}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active={true} />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={
                        item => (
                            <List.Item key={item.id}
                                actions={[
                                    <IconText icon={StarOutlined} text={item.views} key="list-vertical-star-o" style={{ color: '#fff' }} />,
                                    <IconText icon={LikeOutlined} text={item.liked} key="list-vertical-like-o" style={{ color: '#fff' }} />,
                                    <IconText icon={MessageOutlined} text={item.comments} key="list-vertical-message" style={{ color: '#fff' }} />,
                                ]}
                            >
                                <div style={{ display: 'flex' }}>
                                    <Card hoverable style={{ width: '30%', backgroundColor: 'white !important' }} bordered={false} cover={<img alt="avatar" src={item.cover} />}
                                        type='inner'
                                    >

                                    </Card>
                                    <div style={{ marginLeft: 10, width: '60%' }}>
                                        <List.Item.Meta
                                            title={<a href='#' style={{ color: '#fff', fontSize: 18 }}>{item.title}</a>}
                                        />
                                        <div style={{ overflow: 'auto', color: '#fff' }}>
                                            {item.content}
                                            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                                <div>
                                                    <TagTwoTone twoToneColor='purple' style={{ fontSize: 30 }} />
                                                    <span>{item.tag}</span>
                                                    <AppstoreTwoTone twoToneColor='green' style={{ fontSize: 30 }} />
                                                    <span>{item.category}</span>
                                                </div>
                                                <div>{item.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </List.Item>

                        )}
                />
            </InfiniteScroll>
        </div>
    );
};




