import React from 'react'
import { Col } from 'antd'

import { Wrapper } from './DetailPage.style'

const DetailRow = ({ leftComponent = 1, rightComponent = 2 }) => {
	return (
		<Wrapper>
	    <Col span={18} push={6}>
	      {leftComponent}
	    </Col>
	    <Col span={18} push={6}>
	      {rightComponent}
	    </Col>
	  </Wrapper>
	)
}

export default DetailRow