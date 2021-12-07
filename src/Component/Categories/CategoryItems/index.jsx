import React from 'react'
import { useNavigate } from "react-router-dom";
import pic from '../../Images/cateItem.jpg'
import pic2 from '../../Images/cateItem2.jpg'
import pic3 from '../../Images/cateItem3.jpg'
import pic4 from '../../Images/cateItem4.jpg'

import '../index.scss'
const categories = [{
    name: 'technology',
    img: pic,
    number: 1
},
{
    name: 'art',
    img: pic2,
    number: 1
},
{
    name: 'life',
    img: pic3,
    number: 1
},
{
    name: 'fashion',
    img: pic4,
    number: 1
}
]

function CategoryItem(props) {
    const navigate = useNavigate();
    const { detailName } = props
    const item = categories.find(item => item.name === detailName)
    function handleClick() {
        return () => {
            navigate(`detail/${detailName}`)
        }
    }
    return (

        <div className="cols-item" onClick={handleClick()}>
            <div className="container">
                <div
                    className="front"
                    style={{
                        backgroundImage: `url(${item.img})`,
                    }}
                >
                    <div className="inner">
                        <p>{item.name}</p>
                        <span>{item.number}</span>
                    </div>
                </div>
                <div
                    className="back"
                    style={{
                        backgroundImage: `url(${item.img})`,
                    }}
                >
                    <div className="inner">
                        <p>{item.name}</p>
                        <span>{item.number}</span>
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
                {categories.map(item => {
                    return <CategoryItem detailName={item.name} />
                })}
            </div>
        </div>
    )
}
