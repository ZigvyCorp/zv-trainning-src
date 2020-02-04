

import React from 'react'
import {Link} from 'react-router-dom';
import { Card, Icon, Avatar } from 'antd';
import { Row, Col } from 'antd';


export default function History({ history}) {
    const {league,images,teams,players} = history;
    return (
        <div className='history'>
            <Row>
                <Col span={6} >
                    <div className="league-image">
                        <img src={images} alt="#"/>
                    </div>
                </Col>
                <Col span={18} >
                    <div className="leaque-info">
                        <div className="league">
                            <p>{league}</p>
                        </div>
                        <a href="#">{teams }
                            <p>Team</p>
                        </a>
                        <a href="#">{players}
                            <p>players</p>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    );
}