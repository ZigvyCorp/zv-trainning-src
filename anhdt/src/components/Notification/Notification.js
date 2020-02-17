import React from 'react'
import { Statistic, notification } from 'antd'

const { Countdown } = Statistic

const deadline = Date.now() + 1000 * 6
// * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

export const CustomCountdown = ({ secs }) => {

	const deadline = Date.now() + 1000 * secs

	return (
		<Countdown
			title="Retrying to load data in..."
			value={deadline}
			format="ss:SS"
			onFinish={() => {
				console.log(`time at ${secs} is: ${deadline}`)
			}}
		/>
	)
}

export const openNotification = (secs) => {
	console.log(typeof secs)
	const duration = Date.now() + 1000 * secs
	
	notification.open({
		message: 'Loading Data Failed',
		description: <CustomCountdown secs={secs}/>,
		style: {
			width: 300,
			marginLeft: 335 - 600,
		},
		duration: `${duration}`,
	})
}