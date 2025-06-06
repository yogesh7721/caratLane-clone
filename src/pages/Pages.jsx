import React from 'react'
import ViewFull_Collection from './ViewFull_Collection'
import CaratLaneCollection from './CaratLaneCollection'
import Home from './Home'
import Videodesign from './Videodesign'
import Footer from './Footer'
import Filter_Home from '../Filter_page/Filter_Home'

const Pages = () => {
    return (
        <div>
            <div className='h-full'>
                <Home />
            </div>

            <ViewFull_Collection />
            <CaratLaneCollection />
            <Videodesign />
            <Footer />
        </div>
    )
}

export default Pages
