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
                <Row type="flex">
                <Col span={16} >
                    <Meta  className='ground-detail' title={title}
                    description={description}
                    />
                </Col>
                <Col span={8} >
                    <div className="ground-price">
                        {price} 
                    </div>
                </Col>
                </Row>
                </div>
                
            </Card>  </Link>
             
    );
}