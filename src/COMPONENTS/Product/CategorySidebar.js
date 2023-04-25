import React from 'react'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img2,
            categoryname: 'Full cream milk 2000ml'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Full cream milk 1000ml'
        },
        {
            id: 3,
            categoryimage: img2,
            categoryname: 'Full cream milk 500ml'
        },
        {
            id: 4,
            categoryimage: img2,
            categoryname: 'Toned milk 1000ml'
        },
        {
            id: 5,
            categoryimage: img2,
            categoryname: 'Toned milk 500ml'
        },
        {
            id: 6,
            categoryimage: img2,
            categoryname: 'Toned milk 250ml'
        },
        {
            id: 7,
            categoryimage: img2,
            categoryname: 'Standardized milk 1000ml'
        },
        {
            id: 8,
            categoryimage: img2,
            categoryname: 'Standardized milk 500ml'
        }
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar