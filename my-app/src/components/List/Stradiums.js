import React, { Component } from 'react';
import Stradium from './Stradium';

 class Stradiums extends Component {
    
    componentDidMount(){
        this.props.onGetGrounds();
    }

    renderStradiums(stradium){
        return <Stradium key={stradium.id} stradium={stradium}/>
     }

    render() {
        console.log(this.props);
        const {currentGrounds} =this.props;
        let grounds=currentGrounds;
        let markup = grounds.map(stradium => {
            return <Stradium key={stradium.id} stradium={stradium}/>
        })
        return (
            <section className="stradiumlist">
            <div className="list-center">
                 {markup}
                 {/* {grounds.map(stradium => {
                  return <Stradium key={stradium.id} stradium={stradium}/>}
                 )} */}
            </div>
          </section> 
        );
    }
}

export default Stradiums;

