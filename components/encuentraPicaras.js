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

                    <div className={styles.boxFind}>

                        <div className={styles.boxTitle}>
                            <h2>
                                <Image src='/assets/title3.svg' width="430" height="69" alt='Titulo' />
                                <Image src='/assets/plane1.png' className={styles.avion1} width="452" height="242" alt='Avion' />
                                <Image src='/assets/plane2.png' className={styles.avion2} width="339" height="278" alt='Avion' />
                            </h2>
                            <h3 style={fontMonserratBold.style}>
                                <Image src='/assets/franjaYellow.png' className={styles.franjaYellow} width="561" height="65" alt='FranjaAmarilla' />
                                <p>En tiendas y supermercados a nivel nacional.</p>
                            </h3>
                        </div>

                        <div className={styles.boxSquares}>
                            <div className={styles.boxSquare}>
                                <Image src='/assets/metro.svg' width="155" height="154" alt='Logo' />
                            </div>
                            <div className={styles.boxSquare}>
                                <Image src='/assets/plazavea.svg' width="154" height="54" alt='Logo' />
                            </div>
                            <div className={styles.boxSquare}>
                                <Image src='/assets/wong.svg' width="155" height="156" alt='Logo' />
                            </div>
                            <div className={styles.boxSquare}>
                                <Image src='/assets/rappi.svg' width="200" height="200" alt='Logo' />
                            </div>
                            <div className={styles.boxSquare}>
                                <Image src='/assets/pedidosya.svg' width="171" height="106" alt='Logo' />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EncuentraPicaras
