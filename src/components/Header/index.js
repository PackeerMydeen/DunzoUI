import React from 'react'
import './index.scss'
import ProductCards from '../ProductCards'

export default function Header() {
    return (
        <div className='header-wrapper'>
            <div className='top'></div>
            <div className='middle'></div>

            <div className='products'>
                <div className='card'><ProductCards /></div>
                <div className='card'><ProductCards /></div>
                <div className='card'><ProductCards /></div>
            </div>

        </div>
    )
}
