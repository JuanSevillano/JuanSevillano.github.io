import React, { useRef } from 'react';
import { useSpring, config, animated as a } from 'react-spring';

import classes from './SelectLanguage.module.css'

import CO from '../../assets/CO.png'
import FR from '../../assets/FR.png'
import UK from '../../assets/UK.png'

const SelectLanguage = (props) => {

	const backgroundSpring = useSpring({
		config: config.slow,
		from: { opacity: 0, transform: 'rotateZ(-1turn)', width: '1rem', height: '1rem', background: 'white' },
		to: { opacity: 1, transform: 'rotateZ(0turn)', width: '50rem', height: '50rem', background: 'black' },
		delay: 6000
	})

	const wrapper = useSpring({
		config: config.gentle,
		from: { opacity: 0, height: 0 },
		to: { opacity: 1, height: 50 },
		delay: 6300
	})

	return (
		<div className={classes.SelectLanguage}>
			<a.span style={backgroundSpring} className={classes.Back}></a.span>
			<a.div style={wrapper} className={classes.Wrapper}>
				<span className={classes.Item}><img src={CO} alt="language" />Español</span>
				<span className={classes.Item}><img src={UK} alt="language" />English</span>
				<span className={classes.Item}><img src={FR} alt="language" />Français</span>
			</a.div>
		</div>
	)
}

export default SelectLanguage
