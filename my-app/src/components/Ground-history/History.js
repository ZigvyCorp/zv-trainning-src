import React from 'react'
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
                        <div className="history-block">
                            <a className='team-history' href="#">{teams }
                                </a>
                            <p>Team</p>
                       </div>
                       <div className="history-block">
                            <a className='team-history' href="#">{players}
                                </a>
                            <p>players</p>
                       </div>
                       
                    </div>
                </Col>
            </Row>
        </div>
    );
}