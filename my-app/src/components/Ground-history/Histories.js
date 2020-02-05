
import React, { Component } from 'react';
import History from './History';

export default class Histories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            histories:[
                {
                    "league":"Champain League",
                    "images":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRH4BxnsOFhhL3OUeCTgUa8r1jR5Mhge8250ZDLgeqnOTc95rII",
                    "teams":12,
                    "players": 202
    
                }
            ]
        };
      }
    render() {
        let { histories }=this.state;
        let markup = histories.map(history=> {
            return <History key={history.id} history={history}/>
        })
        
        return (
            <section  className="comment">
                <div className="comment-header">
                    <p>{`History (${histories.length})`}</p>
                </div>
                <br/>
                <div className="comment-detail">
                    {markup}
                </div>
            </section>
        );
    }
}

