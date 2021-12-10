import React from 'react'
import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import { LoginContext } from '../../App';
import { useContext } from 'react';

export default function MenuItem(props) {
    const navigate = useNavigate();
    const { setIsLogin } = useContext(LoginContext)
    function handleClick() {
        return (e) => {
            e.domEvent.nativeEvent.preventDefault();
            e.domEvent.nativeEvent.stopPropagation();
            const page = e.domEvent.target.textContent.toLowerCase().replace(/\s+/g, "");;
            if (page === 'home') {
                navigate('/')
            } else if (page === 'me') {
                navigate('/personalInfo')
            } else if (page === 'logout') {
                setIsLogin(false)
                navigate('/home')
            } else
                navigate(`/${page}`);
        }

    }
    return (
        <Menu.Item onClick={handleClick()} {...props} />
    )
}
