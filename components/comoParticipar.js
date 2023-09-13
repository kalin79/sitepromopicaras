import { useState, useEffect } from 'react'
 
import Image from 'next/image'
import localFont from "next/font/local"
import styles from  '../styles/sass/comoparticipar.module.sass'

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



const ComoParticipar = () => {

    return (
        <>
            <div className='' id='comoParticipar'>
                <div className='container'>

                    <div className={styles.boxFind}>

                        <div className={styles.boxTitle}>
                            <h2>
                                <Image src='/assets/title4.png' width="420" height="81" alt='Titulo' />
                                <Image src='/assets/plane1.png' className={styles.avion1} width="452" height="242" alt='Avion' />
                                <Image src='/assets/plane2.png' className={styles.avion2} width="339" height="278" alt='Avion' />
                            </h2>
                            <h3 style={fontMonserratBold.style}>
                                <Image src='/assets/franjaYellow2.png' className={styles.franjaYellow} width="387" height="41" alt='FranjaAmarilla' />
                                <p>Es simple, sigue estos pasos...</p>
                            </h3>
                        </div>

                        <div className={styles.boxPremiosDesktop}>
                            <h2>
                                <Image src='/assets/chicapremio.svg' width="720" height="1021" alt='Chica' />
                            </h2>
                            <div className={styles.boxPasos}>
                                <div className={styles.boxPaso1}>
                                    <Image src='/assets/pasos/grupo1.svg' width="329" height="102" alt='Paso1' />  
                                    <Image src='/assets/pasos/paso1.svg' width="265" height="72" alt='Paso1' />
                                </div>
                                <div className={styles.boxPaso2}>
                                    <Image src='/assets/pasos/grupo2.svg' width="210" height="43" alt='Paso1' />  
                                    <Image src='/assets/pasos/paso2.svg' width="325" height="94" alt='Paso1' />
                                </div>
                                <div className={styles.boxPaso3}>
                                    <Image src='/assets/pasos/grupo3.svg' width="340" height="184" alt='Paso1' />  
                                    <Image src='/assets/pasos/paso3.svg' width="353" height="78" alt='Paso1' />
                                </div>
                                <div className={styles.boxPaso4}>
                                    <Image src='/assets/pasos/paso4.svg' width="347" height="124" alt='Paso1' />
                                </div>
                            </div>

                        </div>

                        <div className={styles.boxPremiosMobile}>
                            <div className={styles.boxPasos}>
                                <div className={styles.boxPaso1}>
                                    <Image src='/assets/pasos/grupo1.svg' width="329" height="102" alt='Paso1' />  
                                    <Image src='/assets/pasos/paso1.svg' width="265" height="72" alt='Paso1' />
                                </div>
                                <div className={styles.boxPaso2}>
                                    <Image src='/assets/pasos/grupo2.svg' width="210" height="43" alt='Paso1' />  
                                    <Image src='/assets/pasos/paso2.svg' width="325" height="94" alt='Paso1' />
                                </div>
                                <div className={styles.boxPaso3}>
                                    <Image src='/assets/pasos/grupo3.svg' width="340" height="184" alt='Paso1' />  
                                    <Image src='/assets/pasos/paso3.svg' width="353" height="78" alt='Paso1' />
                                </div>
                                <div className={styles.boxPaso4}>
                                    <Image src='/assets/pasos/paso4.svg' width="347" height="124" alt='Paso1' />
                                </div>

                            </div>

                        </div>

                        
                        <div className={styles.boxParticipantes}>
                            <div className={styles.fondo2}>
                                <Image src='/assets/bg-2.png' width="1440" height="1003" alt='Titulo' />
                            </div>

                            <div className={styles.boxTitle2}>
                                <h2>
                                    <Image src='/assets/title5.png' width="420" height="81" alt='Titulo' />
                                </h2>
                            </div>
                            
                            <div className={styles.boxSquares}>
                                <div className={styles.boxSquare}>
                                    <div className={styles.boxContenedor}>
                                        <Image src='/assets/galletas/extrema.svg' width="340" height="188" alt='Logo' />
                                        <p style={fontPeckham.style}>LA EXTREMA</p>
                                    </div>
                                </div>
                                <div className={styles.boxSquare}>
                                    <div className={styles.boxContenedor}>
                                        <Image src='/assets/galletas/clasica.svg' width="340" height="188" alt='Logo' />
                                        <p style={fontPeckham.style}>la clasica</p>
                                    </div>                            
                                </div>
                                <div className={styles.boxSquare}>
                                    <div className={styles.boxContenedor}>
                                        <Image src='/assets/galletas/menta.svg' width="340" height="188" alt='Logo' />
                                        <p style={fontPeckham.style}>la menta</p>
                                    </div>
                                </div>
                                <div className={styles.boxSquare}>
                                    <div className={styles.boxContenedor}>
                                        <Image src='/assets/galletas/fresa.svg' width="340" height="188" alt='Logo' />
                                        <p style={fontPeckham.style}>la fresa</p>
                                    </div>
                                </div>
                                <div className={styles.boxSquare}>
                                    <div className={styles.boxContenedor}>
                                        <Image src='/assets/galletas/xl.svg' className={styles.xl} width="390" height="189" alt='Logo' />
                                        <p style={fontPeckham.style}>la XL</p>
                                    </div>
                                </div>
                                <div className={styles.boxSquare}>
                                    <div className={styles.boxContenedor}>
                                        <Image src='/assets/galletas/chips.svg' width="340" height="188" alt='Logo' />
                                        <p style={fontPeckham.style}>la chips</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ComoParticipar
