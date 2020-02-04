
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Comments from '../components/Comments/Comments';
import Histories from '../components/Ground-history/Histories';
import { PageHeader, Button, Descriptions } from 'antd';
import { Radio} from 'antd';
import { Card,Comment, Icon, Tooltip, Avatar } from 'antd';

export default class details extends Component {
    
    state = {
        stradium:"Old Trafford",
        description:'We supply a series of design principles',
        onwer:'Han Solo',
        price:25
      }

    render() {
        const {stradium,description,onwer,price}= this.state;
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
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg"
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
                           <p >{stradium}</p>
                        </div>
                        <p>{description}</p>
                    </section>
                    <br/>
                    <section className="onwer">
                    <Comment
                            author={<a>{onwer}</a>}
                            avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                            }
                            content={
                            <p>
                                We supply a series of design principles, practical patterns and high quality design
                                resources (Sketch and Axure), to help people create their product prototypes beautifully
                                and efficiently.
                            </p>
                            }
                        />
                        <div className="price">
                            <a href="">{price}</a>
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

