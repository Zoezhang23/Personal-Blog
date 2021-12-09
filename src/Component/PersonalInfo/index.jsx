import React from 'react';
import InfoForm from './infoForm'
import bg from '../Images/infoBkg.jpg'
import './index.scss'
import Empty from './empty'
import { useContext } from 'react';
import { loginContext } from '../../App'
export default function PersonalInfo() {
    const { isLogin } = useContext(loginContext)
    return isLogin ? (
        <div className='info' style={{ backgroundImage: `url(${bg})` }}>
            <InfoForm />
        </div>
    ) : (<div className='info' style={{ backgroundImage: `url(${bg})` }}>
        <Empty />

    </div>)
}
