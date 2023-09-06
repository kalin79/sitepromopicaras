import { useState, useEffect } from 'react'
 
import Image from 'next/image'
import localFont from "next/font/local"
import styles from  '../styles/sass/encuentrapicaras.module.sass'

import { gsap } from 'gsap/dist/gsap.js'

const fontAkira = localFont({ 
    src: "../fonts/AkiraExpanded-SuperBold.ttf"
})

const fontMonserratBold = localFont({ 
    src: "../fonts/Montserrat-Bold.ttf"
})

const fontMonserratSemiBold = localFont({ 
    src: "../fonts/Montserrat-SemiBold.ttf"
})
const fontMonserratRegular = localFont({ 
    src: "../fonts/Montserrat-Regular.ttf"
})

const fontPeckham = localFont({ 
    src: "../fonts/PeckhamPress.otf"
})



const EncuentraPicaras = () => {

    return (
        <>
            <div className='' id='encuentraPicaras'>
                <div className='container'>

                    <div className={styles.boxFind} style={fontMonserratRegular.style}>
                        <div>

                            <div className={styles.boxTitle}>
                                <h2>
                                    <Image src='/assets/title2.svg' width="430" height="69" alt='Titulo' />
                                    <Image src='/assets/plane1.png' className={styles.avion1} width="452" height="242" alt='Avion' />
                                    <Image src='/assets/plane2.png' className={styles.avion2} width="339" height="278" alt='Avion' />
                                </h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EncuentraPicaras
