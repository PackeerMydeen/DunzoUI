import React from 'react'
import Title from '../Title'
import './index.scss'
const brands = ['dunzo', 'swiggy', 'zomato', 'dunzo', 'swiggy', 'zomato', 'dunzo', 'swiggy', 'zomato']
export default function Brands() {
    return (
        <div className='brands-wrapper'>
            <Title title='You can also use Simpl on' />
            <div className='brands'>
                {brands.map(item => {
                    return (<div className='brand'>
                        {item}
                    </div>)
                })}

            </div>
        </div>
    )
}
