import React from 'react'
import { useNavigate } from "react-router-dom";
import pic from '../../Images/cateItem.jpg'
import { ARTICLE_DATA } from '../../data'
import '../index.scss'


const getData = () => {
    const cate = [];
    ARTICLE_DATA.forEach(item => {
        const index = cate.findIndex(c => c.name === item.category);
        if (index > -1) {
            cate[index].number++;
            // c.number++;
        } else {
            cate.push({
                name: item.category,
                img: pic,
                number: 1
            });
        }
    })
    return cate;
}


function CategoryItem(props) {
    const cate = getData();
    const navigate = useNavigate();
    const { detailName } = props
    const item = cate.find(item => item.name === detailName);
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
    const cate = getData();
    return (
        <div className="content">
            <div className="cols">
                {cate.map(item => {
                    return <CategoryItem detailName={item.name} />
                })}
            </div>
        </div>
    )
}
