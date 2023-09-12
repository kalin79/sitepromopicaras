import { useState, useEffect } from 'react'
 
import Image from 'next/image'
import localFont from "next/font/local"
import styles from  '../styles/sass/ganadores.module.sass'

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



const Ganadores = () => {

    return (
        <>
            <div className='' id='ganadores'>
                <div className='container'>

                    <div className={styles.boxFind}>

                        <div className={styles.boxTitle}>
                            <h2>
                                <Image src='/assets/ganadores.png' width="545" height="62" alt='Titulo' />
                                <Image src='/assets/plane1.png' className={styles.avion1} width="452" height="242" alt='Avion' />
                                <Image src='/assets/plane2.png' className={styles.avion2} width="339" height="278" alt='Avion' />
                            </h2>
                        </div>

                        <div className={styles.subTitle}>
                            <p style={fontMonserratBold.style}>
                                SORTEO 1: 09/10/2023
                            </p>
                        </div>

                        

                        <div className={styles.scrollGanadores}>
                            <div className={styles.viewScrolll}>
                                <div className={styles.boxSubTitle}>                             
                                    <svg xmlns="http://www.w3.org/2000/svg" width="703" height="80" viewBox="0 0 703 80" fill="none">
                                        <path d="M1 11L7.33672 71L694.079 79L702 1L1 11Z" stroke="#FFB800" />
                                    </svg>
                                    <div className={styles.boxSubTitleT1}>
                                        <div className={styles.boxSubTitleT}>
                                            <p style={fontPeckham.style}>GANADOR(A)</p>
                                            <p style={fontPeckham.style}>PREMIO</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.boxGanadores}>

                                    <div className={styles.boxGanador}>
                                            <div className={styles.rowGanadores}>
                                                <p style={fontMonserratBold.style}>
                                                Carlos Augusto Espinoza
                                                </p>
                                                <div className={styles.contenedorPremios}>
                                                    <Image src='/assets/argentina.svg' width="60" height="43" alt='Titulo' />
                                                    <div className={styles.descripcionPremios}>
                                                        <h2 style={fontPeckham.style}>SNOWBOARDING</h2>
                                                        <p style={fontMonserratSemiBold.style}>Bariloche, Argentina</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.boxGanador}>
                                        <div className={styles.rowGanadores}>
                                            <p style={fontMonserratBold.style}>
                                            Victor Corzo Remundo                                    
                                            </p>
                                            <div className={styles.contenedorPremios}>
                                                <Image src='/assets/brasil.svg' width="50" height="38" alt='Titulo' />
                                                <div className={styles.descripcionPremios}>
                                                    <h2 style={fontPeckham.style}>EVENTO COMIC</h2>
                                                    <p style={fontMonserratSemiBold.style}>Sao Paulo, Brasil</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.boxGanador}>
                                        <div className={styles.rowGanadores}>
                                            <p style={fontMonserratBold.style}>
                                            Yoshiro Geofrey Olivera                                    
                                            </p>
                                            <div className={styles.contenedorPremios}>
                                                <Image src='/assets/alexa.svg' width="130" height="46" alt='Titulo' />
                                                <div className={styles.descripcionPremios}>
                                                    <h2 style={fontPeckham.style}>PARLANTE <br></br>ALEXA</h2>
                                                    {/* <p style={fontMonserratSemiBold.style}>Bariloche, Argentina</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.boxGanador}>
                                        <div className={styles.rowGanadores}>
                                            <p style={fontMonserratBold.style}>
                                                Mery Andia Quiroga
                                            </p>
                                            <div className={styles.contenedorPremios}>
                                                <Image src='/assets/gopro.svg' width="90" height="56" alt='Titulo' />
                                                <div className={styles.descripcionPremios}>
                                                    <h2 style={fontPeckham.style}>GO PRO</h2>
                                                    {/* <p style={fontMonserratSemiBold.style}>Texto a la derecha de la imagen</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>


                                    
                                    
                                
                                </div>       
                            </div>
                        </div>                 

                    </div>
                </div>
            </div>
        </>
    )
}

export default Ganadores
