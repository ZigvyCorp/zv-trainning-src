import React, { Component } from 'react';
import Stradium from './Stradium';

 class Stradiums extends Component {
    
    constructor(props) {
        super(props);
      }
    
    componentDidMount(){
        this.props.onGetGrounds();
    }

    renderStradiums(stradium){
        return <Stradium key={stradium.id} stradium={stradium}/>
     }

    render() {
        console.log(this.props);
        const {currentGrounds} =this.props;

        return (
            <section className="stradiumlist">
                <div className="list-center">
                    {currentGrounds.map(stradium => {
                    return this.renderStradiums(stradium)}
                    )}
                </div>
          </section> 
        );
    }
}

export default Stradiums;

