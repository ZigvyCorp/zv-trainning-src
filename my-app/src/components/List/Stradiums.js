
import React, { Component } from 'react';
import Stradium from './Stradium';



export default class Stradiums extends Component {
    render() {
        let stradiums=[
            {
                "id":1,
                "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
                "title":"Old trafford",
                "description":"Nicknamed The Theatre of Dreams by Bobby Charlton,[3] Old Trafford has been United's home ground since 1910",
                "price":25 
            },
            {
                "id":2,
                "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
                "title":"Old trafford",
                "description":"Nicknamed The Theatre of Dreams by Bobby Charlton,[3] Old Trafford has been United's home ground since 1910",
                "price":25 
            },
            {
                "id":3,
                "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
                "title":"Old trafford",
                "description":"Nicknamed The Theatre of Dreams by Bobby Charlton,[3] Old Trafford has been United's home ground since 1910",
                "price":25 
            }
        ]
        let markup = stradiums.map(stradium => {
            return <Stradium key={stradium.id} stradium={stradium}/>
        })
        
        return (
            <section className="stradum-list">
                <div className="stradum-list">
                    {markup}
                </div>
            </section>
        );
    }
}