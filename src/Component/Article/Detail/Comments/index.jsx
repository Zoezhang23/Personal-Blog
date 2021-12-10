import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import { LikeFilled, StarFilled, LikeOutlined, StarOutlined, MessageFilled } from '@ant-design/icons';
import { ARTICLE_DATA } from '../../../data';
import { UserLoginContext } from '../../../../App'




// This is for like 
export const Comments = (id) => {
    const item = ARTICLE_DATA.find(item => item.id === id)
    const [likes, setLikes] = useState(item.views);
    const [dislikes, setDislikes] = useState(item.liked);
    const [action, setAction] = useState(null);
    const like = () => {
        setLikes(item.views + 1);
        // setDislikes(item.liked);
        setAction('liked');
    };

    const dislike = () => {
        // setLikes(0);
        setDislikes(item.liked + 1);
        setAction('disliked');
    };
    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? StarFilled : StarOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="list-vertical-message"><MessageFilled />{item.comments}</span>

    ];

    return (<Comment actions={actions} />)

}
//------This is for adding new comments-------------

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);
const user = JSON.parse(localStorage.getItem('user'));

export default class CommentsEditor extends React.Component {
    state = {
        comments: [],
        submitting: false,
        value: '',
    };

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            if (user !== null) {
                this.setState({
                    submitting: false,
                    value: '',
                    comments: [
                        ...this.state.comments,
                        {
                            author: user.username,
                            avatar: user.avatar,
                            content: <p>{this.state.value}</p>,
                            datetime: moment().fromNow(),
                        },
                    ],
                });
            } else {
                this.setState({
                    submitting: false,
                    value: '',
                    comments: [
                        ...this.state.comments,
                        {
                            author: 'Anonymous visitor',
                            avatar: 'https://joeschmoe.io/api/v1/random',
                            content: <p>{this.state.value}</p>,
                            datetime: moment().fromNow(),
                        },
                    ],
                });
            }

        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        const { comments, submitting, value } = this.state;
        { comments.length > 0 && <CommentList comments={comments} /> }
        return (
            <UserLoginContext>{(isLogin) => {
                return (
                    < Comment
                        avatar={isLogin.isLogin ? <Avatar src={user.avatar} /> : <Avatar src="https://joeschmoe.io/api/v1/random" alt="Anonymous" />}
                        content={
                            < Editor
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                submitting={submitting}
                                value={value}
                            />
                        }
                    />
                )
            }}

            </UserLoginContext>
        )
    }
}