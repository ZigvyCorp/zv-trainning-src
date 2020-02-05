import React, { Component } from 'react';
import Stradium from './Stradium';
import {connect} from 'react-redux';
import {GetGrounds} from '../../actions/index';

 class Stradiums extends Component {

    render() {
        const {grounds} =this.props;
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

const mapStateToProps = state =>{
    console.log(state);
    return {
        grounds: state.grounds? state.grounds :[]
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        onGetGrounds: ()=>{
            dispatch(GetGrounds());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Stradiums);
