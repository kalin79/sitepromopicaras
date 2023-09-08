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
const fontMonserratRegular = localFont({ 
    src: "../../fonts/Montserrat-Regular.ttf"
})

const fontPeckham = localFont({ 
    src: "../../fonts/PeckhamPress.otf"
})



const DatosPersonales = ({agregarDato, updatePage, datos}) => {

    const VALORES_INICIALES = {
        nombre: '',
        apellido: '',
        email: '',
        movil: '',
        lugar: '',
        instagram: '',
        politicaDatos: '',
        tyc: '',
        edad: '',
    }
    
    const [valores, setValores] = useState(VALORES_INICIALES)
    const [errores, setErrores] = useState({})
    const [submitForm, setSubmitForm] = useState(false)

    const { nombre, apellido, email, movil, dni, lugar, instagram, politicaDatos, tyc, edad } = valores
    const { documento, tipoDoc } = datos

    const submitFormIsValidate = () => {
        const pageID = 'pageCodigo'
        const itemPage = 3
        let height = -1 * window.innerHeight * (itemPage - 1)
        let containerParallax = document.getElementById('viewOverflow')
        if (Object.keys(errores).length === 0){
            console.log('pasamos al siguiente')
            updatePage(3)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const erroresValidacion =  validarRegistro(valores)
        await setErrores(erroresValidacion)
        submitFormIsValidate()
        
    }

    const handleChange = (e) => {
        setValores({
            ...valores,
            [e.target.name] : e.target.value
        })
        agregarDato(e.target.name,e.target.value)
    }
    const handleChangeCheckBox =  (e) => {
        console.log(e.target.name)
        console.log(document.getElementById(e.target.name).checked)
        if (document.getElementById(e.target.name).checked){
            setValores({
                ...valores,
                [e.target.name] : true
            })
        }else{
            setValores({
                ...valores,
                [e.target.name] : false
            })
        }
        
    }

    const handleBlur = () => {
        const erroresValidacion = validarRegistro(valores)
        setErrores(erroresValidacion)
    }

    useEffect(() => {
        setErrores({nombre: ''})
    },[])


    return (
        <>
            <div className={`${styles.bgRegistro}  heightView`} id='pageRegister'>
                <div className='container'>
                    <div className={`${styles.gridMain} separationTopMain2`}>
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
                                            onBlur={handleBlur}
                                        />
                                        {errores.nombre && <label className='labelError' style={fontMonserratRegular.style}>{errores.nombre}</label>}
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="apellido" 
                                            placeholder='Apellidos: *' 
                                            value={apellido}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errores.apellido && <label className='labelError' style={fontMonserratRegular.style}>{errores.apellido}</label>}
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="email" 
                                            placeholder='Correo electrónico: *' 
                                            value={email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errores.email && <label className='labelError' style={fontMonserratRegular.style}>{errores.email}</label>}

                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="movil" 
                                            placeholder='Celular: *' 
                                            value={movil}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errores.movil && <label className='labelError' style={fontMonserratRegular.style}>{errores.movil}</label>}

                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="" 
                                            placeholder='Nro. de documento *' 
                                            disabled 
                                            value={`${tipoDoc} ${documento}`}
                                        />

                                    </div>
                                    <div>
                                        <select 
                                            name='lugar' 
                                            syle={fontMonserratSemiBold.style}
                                            value={lugar}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            <option value=''>¿A donde quieres viajar?: *</option>
                                            <option value='Argentina'>Argentina.</option>
                                            <option value='Colombia'>Colombia.</option>
                                            <option value='Chile'>Chile</option>
                                            <option value='Brasil'>Brasil</option>
                                        </select>
                                        {errores.lugar && <label className='labelError' style={fontMonserratRegular.style}>{errores.lugar}</label>}

                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="instagram" 
                                            placeholder='Cuenta de instagram: *' 
                                            value={instagram}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errores.instagram && <label className='labelError' style={fontMonserratRegular.style}>{errores.instagram}</label>}

                                    </div>
                                </div>

                                <div className={styles.contentLegal}>
                                    <div className={styles.boxCheckbox}>
                                        <div className={styles.contentCheckbox} style={fontMonserratSemiBold.style}>
                                            <input type="checkbox" id='politicaDatos' name="politicaDatos"  onChange={handleChangeCheckBox} onBlur={handleBlur} value={politicaDatos}/>
                                            <label htmlFor="politicaDatos">Acepto la <a href='#' target='_blank'>política de privacidad de datos</a> y la <a href='#' target='_blank'>política de tratamiento de datos</a>.</label>
                                        </div>
                                        {errores.politicaDatos && <label className='labelError' style={fontMonserratRegular.style}>{errores.politicaDatos}</label>}
                                    </div>
                                    <div className={styles.boxCheckbox}>
                                        <div className={styles.contentCheckbox} style={fontMonserratSemiBold.style}>
                                            <input type="checkbox" id='tyc' name="tyc" onChange={handleChangeCheckBox} onBlur={handleBlur} value={tyc}/>
                                            <label htmlFor="tyc">Acepto <a href='#' target='_blank'>Términos y Condiciones</a>.</label>
                                        </div>
                                        {errores.tyc && <label className='labelError' style={fontMonserratRegular.style}>{errores.tyc}</label>}
                                    </div>
                                    <div className={styles.boxCheckbox}>
                                        <div className={styles.contentCheckbox} style={fontMonserratSemiBold.style}>
                                            <input type="checkbox" id='edad' name="edad"  onChange={handleChangeCheckBox} onBlur={handleBlur} value={edad}/>
                                            <label htmlFor="edad">Soy mayor de edad.</label>
                                        </div>  
                                        {errores.edad && <label className='labelError' style={fontMonserratRegular.style}>{errores.edad}</label>}
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
