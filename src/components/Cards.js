import React from 'react'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="cards">
            <h1>Check these Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                      <CardItem src="images/img-9.jpg" 
                      text="Explore some real world here now" 
                      label="Adventure" 
                      path='/services'/>
                       <CardItem src="images/img-8.jpg" 
                      text="Deserts here now" 
                      label="Explore" 
                      path='/services'/>
                       <CardItem src="images/img-7.jpg" 
                      text="Explore the Real You" 
                      label="Reality" 
                      path='/services'/>
                       <CardItem src="images/img-6.jpg" 
                      text="See how time controls the whole World" 
                      label="Travel" 
                      path='/services'/>
                       <CardItem src="images/img-5.jpg" 
                      text="Grand Luxuries are waiting for you" 
                      label="Luxury" 
                      path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
