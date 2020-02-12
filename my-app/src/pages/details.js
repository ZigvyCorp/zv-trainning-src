
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Comments from '../components/Comments/Comments';
import Histories from '../components/Ground-history/Histories';
import { PageHeader} from 'antd';
import { Radio} from 'antd';
import { Comment, Avatar } from 'antd';
import { Rate } from 'antd';

export default class details extends Component {
    
    componentDidMount(){
        let groundId=this.props.match.params.id;
        this.props.onGetSingleGrounds(groundId);
    }
    render() {
        console.log('detail props '+this.props);
        let g=this.props.grounds.ground;
        console.log(g)
        const {ground:{
            id, imageURL, description, price,owner,title}
        }= this.props.grounds;

        return (
            <div className='container'>
                <Row>
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Ground Info"
                    >
                </PageHeader>
                </Row>
                <Row type="flex" className='main-details'>
                <Col span={18}  >
                   <div className="ground-main">
                   <section className="stradium-image">
                    <img   width='100%'
                            alt=""
                            src={imageURL}
                                />  
                    </section>
                    <section className="commnent">
                            <Comments />
                    </section>
                   </div>
                </Col>
                <Col span={6} >
                    <section className="ground-title">
                        <div className='tradium-name'>
                           <p >{title}</p>
                        </div>
                        <div className="tradium-address">
                        <p>{description}</p>
                        </div>
                        <Rate allowHalf defaultValue={4.5}/>
                        <br/>
                    </section>
                    <br/>
                    <section className="onwer">
                    <Comment
                        author={<div className='user-info'>
                             <a>{owner}</a>
                             <p>Owner</p>
                           </div>
                         }
                            avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                            } 
                            content={
                                <p className='onwer-content'>
                                    We supply a series of design principles, practical patterns and high quality design
                                   
                                </p>
                                }
                        />
                        <div className="price-ground">
                            <h6>${price}.00&nbsp;/hour</h6>
                        </div>

                    </section>
                    <section className="featured-rooms">
                                 <Radio.Group  >
                                    <Radio.Button value="large">BOOK NOW</Radio.Button>
                                    <Radio.Button value="default">Favorite</Radio.Button>
                                    <Radio.Button value="small">Share</Radio.Button>
                                </Radio.Group>
                    </section>
                    <section className="history">
                        <Histories />
                    </section>
                </Col>
                </Row>
            </div>
        )
    }
}

