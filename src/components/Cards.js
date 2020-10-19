import React from 'react'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="cards">
            <h1>Check these Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                      <CardItem src="images/img-9.jpg" text="Explore some real world here now" label="adventure" path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
