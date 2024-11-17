import React from 'react'
import './style.css'


const DealCards = () => {
    const cards = [
        {
            img: "https://tse1.mm.bing.net/th?id=OIP.vk7bfnYt2DeAxSyi8bnQuAHaFT&pid=Api&P=0&h=220",
            heading: "Mens Collection",
            description: "Learn more about",
            price: 170
        },
        {
            img: "https://www.uniqlo.com/uniqlo-u/20fw/common/imgs/women/hero-women.webp?1614909358041",
            heading: "Women Collection",
            description: "Learn more about",
            price: 170
        },
        {
            img: "https://i.pinimg.com/originals/f5/63/90/f563909f1d3f026dbbc56303ce5eee80.jpg",
            heading: "Kids Collection",
            description: "Learn more about",
            price: 170
        },
    ]

    return (
        <div className='container py-4'>
            <div className='row'>
                {cards.map((v, i) => {
                    return <div className='col-md-4' key={i}>
                        <div className='deal__card'>
                            <div className='image'>
                                <img src={v.img} />
                            </div>
                            <div className='content'>
                                <h3>
                                    {v.heading}
                                </h3>
                                <p>
                                    {v.description}
                                </p>
                                <h5>
                                    Starting From: ${v.price}
                                </h5>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default DealCards