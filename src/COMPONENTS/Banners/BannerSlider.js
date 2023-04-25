import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
import Slider1 from '../../ASSETS/freshmilk.png'
import Slider2 from '../../ASSETS/cowmilk.jpeg'
const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavHpTQmxzb6GytUf_-L52BQonGKjsOVPfKQ&usqp=CAU',
            title: 'Fresh Milk & Milk Products at your doorstep',
            description: 'Begin your day with a cup of Milk',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8EYkjsmvEnZtiENnmf8Fi8L9RmInQ_Y6Iw&usqp=CAU',
            title: 'Fresh Milk & Milk Products at your doorstep',
            description: 'Cherish yourself with a bite of milk',
            button: 'htttps://www.google.com'
        }
    ]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button>Shop More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider