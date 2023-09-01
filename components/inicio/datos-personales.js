import { useState, useEffect } from 'react'
 
import Image from 'next/image'
import localFont from "next/font/local"
import styles from  '../../styles/sass/home.module.sass'

import { gsap } from 'gsap/dist/gsap.js'

const fontAkira = localFont({ 
    src: "../../fonts/AkiraExpanded-SuperBold.ttf"
})

const fontMonserratBold = localFont({ 
    src: "../../fonts/Montserrat-Bold.ttf"
})

const fontMonserratSemiBold = localFont({ 
    src: "../../fonts/Montserrat-SemiBold.ttf"
})

const fontPeckham = localFont({ 
    src: "../../fonts/PeckhamPress.otf"
})


const DatosPersonales = () => {
    return (
        <>
            <div className={` heightView`} id='pageRegister'>
                <div className='container'>
                    <div className={`${styles.gridMain} separationTopMain`}>
                        <div className={styles.itemWorld}>
                            <div className={styles.contentWorld}>
                                <Image src='/assets/mundo.png' width="288" height="288" className={styles.containerImg} alt='Comente el Mundo viajando' />
                                <button type='button'>
                                    <Image src='/assets/play.png' alt='Mira el video de la promo' width="47" height="32" />
                                    <span style={fontPeckham.style}>
                                        mira el <br />
                                        video de <br />
                                        la promo
                                    </span>
                                </button>
                            </div>
                        </div>
                        <form 
                            className={`${styles.itemForm} ${styles.itemFrom2}`}
                            // onSubmit={handleSubmitDoc}
                        >
                            <div className={styles.Form02} style={fontMonserratBold.style}>
                                <Image src='/assets/titRegistro.svg' alt='' width="287" height="24" />
                                <h2 style={fontMonserratBold.style}>Regístrate en el siguiente formulario:</h2>
                                
                                <div className={styles.grupoFormulario}>
                                    <div>
                                        <input type="text" name="nombres" placeholder='Nombres: *' />
                                    </div>
                                    <div>
                                        <input type="text" name="apellidos" placeholder='Apellidos: *' />
                                    </div>
                                    <div>
                                        <input type="text" name="email" placeholder='Correo electrónico: *' />
                                    </div>
                                    <div>
                                        <input type="text" name="movil" placeholder='Celular: *' />
                                    </div>
                                    <div>
                                        <input type="text" name="" placeholder='Nro. de documento *' disabled />
                                    </div>
                                    <div>
                                        <select 
                                            id='tipo_doc'
                                            name='tipo_doc' 
                                            syle={fontMonserratSemiBold.style}
                                        >
                                            <option value=''>¿A donde quieres viajar?: *</option>
                                            <option value='Argentina'>Argentina.</option>
                                            <option value='Colombia'>Colombia.</option>
                                            <option value='Chile'>Chile</option>
                                            <option value='Brasil'>Brasil</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="text" name="insagran" placeholder='Cuenta de instagram: *' />
                                    </div>
                                </div>

                                <div className={styles.boxBtn}>
                                    <button 
                                        type='submit'
                                    >
                                        PARTICIPAR
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DatosPersonales
