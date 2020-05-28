import React from 'react'

import SelectLanguage from '../../components/SelectLanguage/SelectLanguage'
import Sevi from '../../components/Sevi/Sevi'
import classes from './Home.module.css'

const Home = (props) => {

	

	const languageHandler = lang => {
		
	}

	return (
		<div className={classes.Home}>
			<Sevi />
			<SelectLanguage selected={languageHandler} />
		</div>
	)
}

export default Home
