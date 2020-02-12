import React from 'react'
import { Card} from 'antd';
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';
const { Meta } = Card;

export default function Stradium ({ stradium}) {
    const {id,title,imageURL,description, price} = stradium;
    return (
        <Link to={`/stradium/${id}`}>
        <Card className='Card'
                hoverable
                style={{ width: 
                350}}
                cover={<img alt="stradium" src={imageURL} />}
                >
                <div className="card-detail">
                    <div className="round-title">
                            <h2>
                                {title}
                            </h2>
                        </div>
                <Row type="flex">
                <Col span={20} >
                    <Meta  
                    description={description}
                    />
                </Col>
                <Col span={4} >
                    <div className="price-top">
                    <h6>${price}.00</h6>
                    <p>/hour</p>
                    </div>
                </Col>
                </Row>
                </div>
                
            </Card>  </Link>
             
    );
}