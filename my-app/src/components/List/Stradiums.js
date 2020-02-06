import React, { Component } from 'react';
import Stradium from './Stradium';
import {connect} from 'react-redux';
import {GetGrounds} from '../../actions/index';

 class Stradiums extends Component {
    
    componentDidMount(){
        this.props.onGetGrounds();
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
            </div>
          </section> 
        );
    }
}


function getVisibleStradiums(price,search,nameSorting,priceSorting, grounds) {
    return grounds
      .filter(g => {
        if (price=="all"){
            return g
        }
        let milestones =price.split('_');
        let floor =Number(milestones[0]);
        let ceil =Number(milestones[1]);
        return g.price >= floor && g.price <=ceil;
      })
        .filter(g=>{
            return(g.title.toLowerCase().includes(search.toLowerCase()))
        })
      .sort((a, b) => {
        if (priceSorting == 0) {
          return b.price- a.price;
        }
        if (priceSorting == 1) {
          return a.price-b.price;
        }
        if (nameSorting == 1) {
          return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
        }
        if (nameSorting == 0) {
          return a.title < b.title ? 1 : a.title > b.title ? -1 : 0;
        }
      });
  }
  

  const mapStateToProps = state =>{
    const { price,search,nameSorting,priceSorting, grounds } = state.grounds;
    return {
      currentGrounds: getVisibleStradiums(price,search,nameSorting,priceSorting, grounds),
    };
  }

  const mapDispatchToProps = dispatch =>{
    return {
        onGetGrounds: () =>{
            dispatch(GetGrounds());
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Stradiums);

