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

    const { nombre, apellido, email, movil, lugar, instagram, politicaDatos, tyc, edad } = valores
    const { documento, tipoDoc } = datos

    const submitFormIsValidate = async () => {

        const data = {
            nombres: nombre,
            apellidos: apellido,
            email: email,
            movil: movil,
            donde_viajar: lugar,
            numero_documento: documento,
            instagram: instagram,
            mayor_edad: edad === true ? 1 : 0,
            tyc: tyc === true ? 1 : 0,      
            politica_privacidad: politicaDatos === true ? 1 : 0,  
        }

        const btn = document.getElementsByClassName("boxBtnSubmit")
        const btnload = document.getElementsByClassName("btnload")
        const tl = gsap.timeline()
        tl.to(btn,{"display": "none"})
        tl.to(btnload,{"display": "block"})
        console.log(Object.keys(errores).length)
        if (Object.keys(errores).length === 0){
            try {
                const respuesta = await fetch (`${process.env.NEXT_PUBLIC_URL}register-participant`, {
                    method: 'POST',
                    headers: {
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify(data),
                })

                const resultado = await respuesta.json()

                // console.log(resultado)
                // console.log(resultado.participante)
                // console.log(resultado.participante.id)

                if (resultado.status === 200) {
                    // console.log('pasamos al siguiente')
                    agregarDato('id',resultado.participante.id)
                    updatePage(3)
                }
            } catch (e) {
                console.log(e)
            } finally {
                tl.to(btnload,{"display": "none"})
                tl.to(btn,{"display": "block"})
            }
        }else{
            tl.to(btnload,{"display": "none"})
            tl.to(btn,{"display": "block"})
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
                                            maxLength="12"
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
                                            <option value='Bariloche, Argentina '>Bariloche, Argentina </option>
                                            <option value='Guatapé, Colombia'>Guatapé, Colombia</option>
                                            <option value='Atacama, Chile'>Atacama, Chile</option>
                                            <option value='São Paulo, Brasil'>São Paulo, Brasil</option>
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

                                <div className={`${styles.boxBtn} boxBtnSubmit`}>
                                    <button 
                                        type='submit'
                                    >
                                        PARTICIPAR
                                    </button>
                                </div>
                                <div className='btnload'>
                                    <span className="loader"></span>
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
