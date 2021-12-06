import React from 'react'
import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';

export default function MenuItem(props) {
    const navigate = useNavigate();
    function handleClick() {
        return (e) => {
            e.domEvent.nativeEvent.preventDefault();
            e.domEvent.nativeEvent.stopPropagation();
            const page = e.domEvent.target.textContent.toLowerCase();
            if (page === 'home') {
                navigate('/')
            } else
                navigate(`/${page}`);
        }

    }
    return (
        <Menu.Item onClick={handleClick()} {...props} />
    )
}
