import React, { useState, useEffect } from 'react';
import { List, Skeleton, Divider, Space } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MessageOutlined, LikeOutlined, StarOutlined, TagTwoTone, AppstoreTwoTone } from '@ant-design/icons';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { ARTICLE_DATA } from '../data'
export default function Article() {

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
                setData(ARTICLE_DATA);
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
                hasMore={data.length < 5}
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

                                    <Card hoverable style={{ width: '30%' }} bordered={false} cover={<img alt="avatar" src={item.cover} />}
                                        type='inner'
                                    >
                                    </Card>
                                    <div style={{ marginLeft: 10, width: '60%' }}>
                                        <List.Item.Meta
                                            title={<Link to={`detail/${item.id}`} style={{ color: '#fff', fontSize: 18 }}>{item.title}</Link>}
                                        />
                                        <div style={{ overflow: 'auto', color: '#fff' }}>
                                            {item.description}
                                            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                                <div>
                                                    <TagTwoTone twoToneColor='purple' style={{ fontSize: 30 }} />
                                                    <Link to={`/tag/detail/${item.tag}`} style={{ color: '#fff' }}>{item.tag}</Link>
                                                    <AppstoreTwoTone twoToneColor='green' style={{ fontSize: 30 }} />
                                                    <Link to={`/categories/detail/${item.category}`} style={{ color: '#fff' }}>{item.category}</Link>
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




