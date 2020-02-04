
import React, { Component } from 'react';
import GroundComment from './Comment';



export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commnents:[
                {
                    "id":1,
                    "userImage":"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    "username":"Abc",
                    "team":'Manrid',
                    "content":"Nicknamed The Theatre of Dreams by Bobby Charlton,[3] Old Trafford has been United's home ground since 1910"
                },
                {
                    "id":2,
                    "userImage":"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    "username":"Abc",
                    "team":'Manrid',
                    "content":"Nicknamed The Theatre of Dreams by Bobby Charlton,[3] Old Trafford has been United's home ground since 1910"
                }
            ]
        };
      }
    render() {
        let {commnents}=this.state;
        let markup = commnents.map(commnent=> {
            if(commnent!=null){
                return <GroundComment key={commnent.id} CommentData={commnent}/>
            }
        })

        return (
            <section className="comment">
                <div className="comment-header">
                    <p>{`Comments & Review(${commnents.length})`}</p>
                </div>
                <br/>
                <div className="comment-detail">
                    {markup}
                </div>
            </section>
        );
    }
}

