import React, { useEffect } from 'react';
import { useSpring, config, animated as a } from 'react-spring';

import classes from './SelectLanguage.module.css'

import CO from '../../assets/flags/CO.png'
import FR from '../../assets/flags/FR.png'
import UK from '../../assets/flags/UK.png'

const SelectLanguage = (props) => {

	const animations = {
		desktop: { opacity: 1, transform: 'rotateZ(0turn)', width: '150%', height: '150%', background: 'white' },
		mobile: { opacity: 1, transform: 'rotateZ(0turn)', width: '50rem', height: '50rem', background: 'black' }
	}
	const currentAnimation = window.isMobile ? animations.mobile : animations.desktop
	const letterColour = window.isMobile ? 'white' : 'black'

	const backgroundSpring = useSpring({
		config: config.slow,
		from: { opacity: 0, transform: 'rotateZ(-1turn)', width: '1rem', height: '1rem', background: 'white', color: 'white' },
		to: currentAnimation,
		delay: 6000
	})

	const wrapper = useSpring({
		config: config.gentle,
		from: { opacity: 0, height: 0, color: 'white' },
		to: { opacity: 1, height: 50 , color: letterColour},
		delay: 6300
	})


	return (
		<div className={classes.SelectLanguage}>
			<a.span style={backgroundSpring} className={classes.Back}></a.span>
			<a.div style={wrapper} className={classes.Wrapper}>
				<span onClick={e => props.selected('ES')} className={classes.Item}><img src={CO} alt="language" />Español</span>
				<span onClick={e => props.selected('EN')} className={classes.Item}><img src={UK} alt="language" />English</span>
				<span onClick={e => props.selected('FR')} className={classes.Item}><img src={FR} alt="language" />Français</span>
			</a.div>
		</div>
	)
}

export default SelectLanguage
