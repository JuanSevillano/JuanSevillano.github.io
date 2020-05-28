import React, { useRef, useState, useEffect, useCallback } from 'react'

import { animated as a, useTransition, config, useSpring } from 'react-spring'
import classes from './Sevi.module.css'

const Sevi = (props) => {

	const [message, setMessage] = useState([])
	const messageRef = useRef([])
	const transitions = useTransition(message, null, {
		delay: 500,
		from: { opacity: 1, width: 0 },
		enter: { opacity: 1, width: 45 },
		leave: { opacity: 0, width: 45 },
		config: config.default
	}).map(({ item, props, key }, index) => (
		<a.div
			className={item === 'i' ? classes.I : classes.SEV}
			key={key}
			style={{ ...props }}>{item}</a.div>
	))

	const sprFade = useSpring({
		config: config.default,
		to: { opacity: 0, height: 0 },
		from: { opacity: 1, height: 60 },
		delay: 2500
	})

	const reset = useCallback(() => {
		messageRef.current.map(clearTimeout)
		messageRef.current = []
		setMessage([])
		messageRef.current.push(setTimeout(() => setMessage(['s']), 500))
		messageRef.current.push(setTimeout(() => setMessage(['s', 'e']), 1300))
		messageRef.current.push(setTimeout(() => setMessage(['s', 'e', 'v']), 2100))
		messageRef.current.push(setTimeout(() => setMessage(['s', 'e', 'v', 'i']), 2900))
	}, [])

	useEffect(() => {
		void reset()
		return () => clearTimeout()
	}, [])

	return <a.div style={props.fixed ? null : sprFade} className={classes.Sevi}>{transitions}</a.div>

}

export default Sevi
