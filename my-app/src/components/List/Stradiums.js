import React, { Component } from 'react';
import Stradium from './Stradium';



export default class Stradiums extends Component {
    render() {
        let stradiums=[
            {
                "id":1,
                "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
                "title":"Old trafford",
                "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
                "price":25 
            },
            {
                "id":2,
                "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
                "title":"Old trafford",
                "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
                "price":25 
            },
            {
                "id":3,
                "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
                "title":"Old trafford",
                "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
                "price":25.00
            },
            {
                "id":1,
                "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
                "title":"Old trafford",
                "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
                "price":25.00 
            },
            {
                "id":2,
                "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
                "title":"Old trafford",
                "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
                "price":25.00
            },
            {
                "id":3,
                "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
                "title":"Old trafford",
                "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
                "price":25.00
            }
        ]
        let markup = stradiums.map(stradium => {
            return <Stradium key={stradium.id} stradium={stradium}/>
        })
        
        return (


            <section className="stradiumlist">
            <div className="list-center">
                 {markup}
            </div>
          </section> 
        );
    }
}