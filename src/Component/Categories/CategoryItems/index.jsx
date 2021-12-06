import React from 'react'
import { useNavigate } from "react-router-dom";
import pic from '../../Images/cateItem.png'
import '../index.scss'

function CategoryItem(props) {
    const navigate = useNavigate();
    const { detailID } = props
    function handleClick() {
        return () => {
            navigate(`detail/${detailID}`)
        }
    }
    return (

        <div className="cols-item" onClick={handleClick()}>
            <div className="container">
                <div
                    className="front"
                    style={{
                        backgroundImage: `url(${pic})`,
                    }}
                >
                    <div className="inner">
                        <p>Technology</p>
                        <span>100</span>
                    </div>
                </div>
                <div
                    className="back"
                    style={{
                        backgroundImage: `url(${pic})`,
                    }}
                >
                    <div className="inner">
                        <p>Technology</p>
                        <span>100</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default function CategoryItems() {
    return (
        <div className="content">
            <div className="cols">
                <CategoryItem detailID='1' />
                <CategoryItem detailID='2' />
                <CategoryItem detailID='3' />
                <CategoryItem detailID='4' />
            </div>
        </div>
    )
}
