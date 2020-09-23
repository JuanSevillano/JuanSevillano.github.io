import React, { useState, useEffect } from 'react'
import classes from './Construction.module.css'
import { useTrail, animated, useSpring } from 'react-spring'

import whatsapp from '../../assets/construction/whatsapp.svg'
import persona from '../../assets/construction/persona.svg'
import taladro from '../../assets/construction/taladro.svg'
import Sevi from '../Sevi/Sevi'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <a className={classes.Link} href="https://wa.me/34632802552" alt="contact me">
            <animated.div
                class={classes.card}
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            />

        </a>
    )
}



const items = ['Lo siento', 'esta página', 'está en', 'construcción']
const config = { mass: 5, tension: 2000, friction: 200 }

const Construction = () => {


    const [toggle, set] = useState(true)
    const [over, setOver] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    const trail = useTrail(items.length, {
        delay: 4000,
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    useEffect(() => {
        document.querySelector(`.${classes.Wrapper}`).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }, [])

    return (
        <div className={classes.trailsMain} onClick={() => set(state => !state)} >
            <div className={classes.Logo}>
                <Sevi fixed reverse />
            </div>
            <div className={classes.Wrapper} onClick={() => set(state => !state)}>

                <Card />
                <div className={classes.Message}>
                    {trail.map(({ x, height, ...rest }, index) => {
                        const _opacity = (index / trail.length) + 0.25;
                        return (
                            <animated.div
                                key={items[index]}
                                className={classes.trailsText}
                                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                <animated.div className={classes.Items} style={{ height, opacity: _opacity, letterSpacing: '2px' }}>{items[index]}</animated.div>
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



