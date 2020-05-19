import React, { useRef, useState, useEffect, useCallback } from 'react'

import { a as a, useTransition, config } from 'react-spring'
import classes from './Sevi.module.css'

const Sevi = (props) => {

	const [message, setMessage] = useState([])
	const ref = useRef([])
	const transitions = useTransition(message, null, {
		from: { opacity: 1, width: 0 },
		enter: { opacity: 1, width: 45 },
		leave: { opacity: 0, width: 0 },
		config: config.default,
	}).map(({ item, props, key }, index) => (
		<a.div
			className={item === 'i' ? classes.I : classes.SEV}
			key={key}
			style={{ ...props }}>
			{item}
		</a.div>
	))

	const reset = useCallback(() => {
		ref.current.map(clearTimeout)
		ref.current = []
		setMessage([])
		ref.current.push(setTimeout(() => setMessage(['s']), 500))
		ref.current.push(setTimeout(() => setMessage(['s', 'e']), 1300))
		ref.current.push(setTimeout(() => setMessage(['s', 'e', 'v']), 2100))
		ref.current.push(setTimeout(() => setMessage(['s', 'e', 'v', 'i']), 2900))
	}, [])

	useEffect(() => void reset(), [])

	return (
		<div className={classes.Sevi}>
			{transitions}
		</div>
	)
}

export default Sevi
