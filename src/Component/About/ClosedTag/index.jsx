import { Tag } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import React from 'react';
import { randomColor } from '../../utilis';

class EditableTagGroup extends React.Component {
    state = {
        tags: ['HTML', 'CSS', 'Sass', 'Javascript', 'React'],
    };

    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    };

    forMap = tag => {
        const tagElem = (
            <Tag
                style={{ borderRadius: 10 }}
                ref={(el) => {
                    if (el) {
                        el.style.setProperty('background-color', randomColor(), 'important');
                    }
                }}
                closable
                onClose={e => {
                    e.preventDefault();
                    this.handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag} style={{ display: 'inline-block' }}>
                {tagElem}
            </span>
        );
    };

    render() {
        const { tags } = this.state;
        const tagChild = tags.map(this.forMap);
        return (
            <>
                <div style={{ position: 'absolute', left: '10%', bottom: '3%' }}>
                    <TweenOneGroup
                        enter={{
                            scale: 0.8,
                            opacity: 0,
                            type: 'from',
                            duration: 100,
                        }}
                        onEnd={e => {
                            if (e.type === 'appear' || e.type === 'enter') {
                                e.target.style = 'display: inline-block';
                            }
                        }}
                        leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                        appear={false}
                    >
                        {tagChild}
                    </TweenOneGroup>
                </div>

            </>
        );
    }
}
export default EditableTagGroup;
