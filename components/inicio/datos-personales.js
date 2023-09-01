import { useState, useEffect } from 'react'
 
import Image from 'next/image'
import localFont from "next/font/local"
import styles from  '../../styles/sass/home.module.sass'

import { gsap } from 'gsap/dist/gsap.js'

// Validaciones

import validarRegistro from '../../hooks/validarRegistro'

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

    const VALORES_INICIALES = {
        nombre: '',
        apellido: '',
        email: '',
        movil: '',
        dni: '',
        lugar: '',
        instagram: ''
    }
    
    const [valores, setValores] = useState(VALORES_INICIALES)
    const [errores, setErrores] = useState({})

    const { nombre, apellido, email, movil, dni, lugar, instagram } = valores

    const handleSubmit = (e) => {
        e.preventDefault()
        const pageID = 'pageRegister'
        const itemPage = 2
        let height = -1 * window.innerHeight * (itemPage - 1)
        let containerParallax = document.getElementById('viewOverflow')
        gsap.to(containerParallax,  { top: height, ease: "Power1.easeInOut" })
        const erroresValidacion = validarRegistro(valores)
        setErrores(erroresValidacion)
    }

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }


    return (
        <>
            <div className={`${styles.bgRegistro}  heightView`} id='pageRegister'>
                <div className='container'>
                    <div className={`${styles.gridMain} separationTopMain`}>
                        <div className={styles.itemWorld}>
                            <div className={styles.contentWorld}>
                                <Image src='/assets/mundo.png' width="288" height="288" className={styles.containerImg} alt='Comente el Mundo viajando' />
                            </div>
                        </div>
                        <form 
                            className={`${styles.itemForm} ${styles.itemFrom2}`}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.Form02} style={fontMonserratBold.style}>
                                <Image src='/assets/titRegistro.svg' alt='' width="287" height="24" />
                                <h2 style={fontMonserratBold.style}>Regístrate en el siguiente formulario:</h2>
                                
                                <div className={styles.grupoFormulario}>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="nombre" 
                                            placeholder='Nombres: *' 
                                            value={nombre}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="apellido" 
                                            placeholder='Apellidos: *' 
                                            value={apellido}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="email" 
                                            placeholder='Correo electrónico: *' 
                                            value={email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="movil" 
                                            placeholder='Celular: *' 
                                            value={movil}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="" 
                                            placeholder='Nro. de documento *' 
                                            disabled 
                                            value={dni}
                                        />
                                    </div>
                                    <div>
                                        <select 
                                            name='lugar' 
                                            syle={fontMonserratSemiBold.style}
                                            value={lugar}
                                            onChange={handleChange}
                                        >
                                            <option value=''>¿A donde quieres viajar?: *</option>
                                            <option value='Argentina'>Argentina.</option>
                                            <option value='Colombia'>Colombia.</option>
                                            <option value='Chile'>Chile</option>
                                            <option value='Brasil'>Brasil</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="instagram" 
                                            placeholder='Cuenta de instagram: *' 
                                            value={instagram}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className={styles.contentLegal}>
                                    legal
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
