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


                        <div className={styles.tabla}>
                            <div className={styles.boxEncabezado}>                             
                                <svg xmlns="http://www.w3.org/2000/svg" width="703" height="80" viewBox="0 0 703 80" fill="none">
                                    <path d="M1 11L7.33672 71L694.079 79L702 1L1 11Z" stroke="#FFB800" />
                                </svg>
                                <div className={styles.Ganadores}>
                                    <p style={fontPeckham.style}>GANADOR(A)</p>
                                </div>
                                <div className={styles.Premios}>
                                    <p style={fontPeckham.style}>PREMIO</p>
                                </div>
                            </div>


                            <div className={styles.boxAnunciando}>

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Oscar Daniel Angulo Cusihualpa</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/brasil.svg' width="70" height="70" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                        <h2 style={fontPeckham.style}>evento comic</h2>
                                            <p style={fontMonserratSemiBold.style}>Sao Paulo, Brasil</p>
                                        </div>
                                    </div>
                                </div>

                                


                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Elizabeth Alexandra Loma Ochoa</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/amazon2.png' width="60" height="81" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>AMAZON FIRE TV</h2>
                                        </div>
                                    </div>
                                </div>


                                

                                

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Valeria Melisa Rosas Vargas</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/scooter2.png' width="100" height="101" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>SCOOTER ELECTRICO</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Yovana Yanet Apaza Condori</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/parlante.png' width="180" height="64" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>ALEXA PARLANTE</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Maribel De la Cuba Loaiza</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/parlante.png' width="180" height="64" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>ALEXA PARLANTE</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Kelly Estefany Delgado Caceres</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/parlante.png' width="180" height="64" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>ALEXA PARLANTE</h2>
                                        </div>
                                    </div>
                                </div>

                                

                                

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Carlos Olarte Tarazona</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/card.png' width="100" height="58" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>GIFT CARD <span style={fontMonserratBold.style}>S/200</span></h2>
                                        </div>
                                    </div>
                                </div>

                                

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Paula Canales Mould</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/card.png' width="100" height="58" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>GIFT CARD <span style={fontMonserratBold.style}>S/200</span></h2>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Syndy Campos angulo</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/card.png' width="100" height="58" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>GIFT CARD <span style={fontMonserratBold.style}>S/200</span></h2>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Ervin Sandro Romero Villegas</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/card.png' width="100" height="58" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>GIFT CARD <span style={fontMonserratBold.style}>S/200</span></h2>
                                        </div>
                                    </div>
                                </div>


                                

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Ariana Lizeth Curay Herrera</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/card.png' width="100" height="58" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>GIFT CARD <span style={fontMonserratBold.style}>S/200</span></h2>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Pamela Belen Espinoza Vargas</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/card.png' width="100" height="58" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>GIFT CARD <span style={fontMonserratBold.style}>S/200</span></h2>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Yomaira Agapito</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/card.png' width="100" height="58" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>GIFT CARD <span style={fontMonserratBold.style}>S/200</span></h2>
                                        </div>
                                    </div>
                                </div>


                                <div className={styles.boxGanador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="690" height="6" viewBox="0 0 690 6" fill="none">
                                        <path d="M1 5.00002C190.667 2.33335 593.8 -1.39998 689 5.00002" stroke="#FFD700" />
                                    </svg>

                                    <div className={styles.contenedorNombre}>
                                        <p style={fontMonserratBold.style}>Fredy Alexander Marocho Calvo</p>
                                    </div>
                                    <div className={styles.contenedorPremios}>
                                        <div className={styles.contenedorImagen}>
                                            <Image src='/assets/premio/card.png' width="100" height="58" alt='Titulo' />
                                        </div>
                                        <div className={styles.descripcionPremios}>
                                            <h2 style={fontPeckham.style}>GIFT CARD <span style={fontMonserratBold.style}>S/200</span></h2>
                                        </div>
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

export default Ganadores
