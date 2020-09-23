import React, { useState, useEffect } from 'react'
import classes from './Construction.module.css'
import { useTrail, animated, useSpring } from 'react-spring'

import persona from '../../assets/construction/persona.svg'
import taladro from '../../assets/construction/taladro.svg'
import Sevi from '../Sevi/Sevi'



const items = ['Lo siento', 'esta pagina', 'esta en', 'construccion']
const config = { mass: 5, tension: 2000, friction: 200 }


const Construction = () => {


    const [toggle, set] = useState(true)

    const trail = useTrail(items.length, {
        delay: 6000,
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })


    return (
        <div className={classes.trailsMain} onClick={() => set(state => !state)} >
            <div className={classes.Logo}>
                <Sevi />
            </div>
            <div className={classes.Wrapper} onClick={() => set(state => !state)}>
                <div className={classes.Message}>
                    {trail.map(({ x, height, ...rest }, index) => {
                        const _opacity = (index / trail.length) + 0.25;
                        return (
                            <animated.div
                                key={items[index]}
                                className={classes.trailsText}
                                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                <animated.div style={{ height, color: `rgba(0,0,0,${_opacity})` }}>{items[index]}</animated.div>
                            </animated.div>
                        )
                    })}
                </div>
                <div className={classes.Constructor}>
                    <img src={persona} alt="persona" />
                    <img src={taladro} alt="taladro" />
                </div>
            </div>
        </div>
    )
}

export default Construction;
