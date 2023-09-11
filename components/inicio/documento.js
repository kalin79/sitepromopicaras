import { useState, useEffect } from 'react'
 
import Image from 'next/image'
import PopupVideo from '../popup/videoPopup'
import localFont from "next/font/local"
import styles from  '../../styles/sass/home.module.sass'

import { gsap } from 'gsap/dist/gsap.js'

// Validaciones

import validarDNI from '../../hooks/validarDNI'


// import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin.js'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
// import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'

// gsap.registerPlugin(CSSRulePlugin)
// gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(ScrollToPlugin)


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


const Documento = ({agregarDato,updateUser,updatePage}) => {

    const VALORES_INICIALES = {
        tipoDoc: '',
        documento: '',
    }

    const [valores, setValores] = useState(VALORES_INICIALES)
    const { documento, tipoDoc } = valores
    const [errores, setErrores] = useState({})
    
    const handleChange = (e) => {
        setValores({
            ...valores,
            [e.target.name] : e.target.value
        })

        agregarDato(e.target.name, e.target.value)
    }


    const submitFormIsValidate = async () => {
        const pageID = 'pageRegister'
        const itemPage = 2
        let height = -1 * window.innerHeight * (itemPage - 1)
        let containerParallax = document.getElementById('viewOverflow')
        console.log(Object.keys(errores).length)
        if (Object.keys(errores).length === 0){
            updateUser(true)
            updatePage(2)
            
            // gsap.to(containerParallax,  { top: height, ease: "Power1.easeInOut" })
        }
    }

    const handleSubmitDoc = (e) => {
        e.preventDefault()
        const erroresValidacion = validarDNI(valores)
        setErrores(erroresValidacion)
        submitFormIsValidate()
    }

    const handleBlur = () => {
        const erroresValidacion = validarDNI(valores)
        setErrores(erroresValidacion)
    }

    const handlekeyDown = (e) => {
        console.log(e.keyCode)
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105 || e.keyCode > 188 )) {
            if (e.keyCode === 8){
                console.log(1)
                return false
            }else{
                e.preventDefault()
            }
        }else{
            return false
        }
    }


    const handleVideo = () => {
        const tl = gsap.timeline()
        const codePopup = document.getElementById("videoPopup")
        tl.to(codePopup, {display:'block'})
        tl.to(codePopup, {opacity: 1})
    }

    // Cambios UseEffects

    useEffect(() => {
        const Input = document.getElementById('documento')
        if (tipoDoc === 'DNI'){
            Input.maxLength='8'
        }
        if (tipoDoc === 'CE'){
            Input.maxLength='9'
        }
    },[tipoDoc])

    useEffect(() => {
        setErrores({documento: ''})
    },[])

    return (
        <>
            <PopupVideo />
            <div className={`${styles.bgDocumento} heightView`} id='pageDNI'>
                <div className='container'>
                    <div className={`${styles.gridMain} separationTopMain`}>
                        <div className={styles.itemWorld}>
                            <div className={styles.contentWorld}>
                                <Image src='/assets/mundo.png' width="288" height="288" className={styles.containerImg} alt='Comente el Mundo viajando' />
                                <button type='button' onClick={handleVideo}>
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
                            className={styles.itemForm}
                            onSubmit={handleSubmitDoc}
                            noValidate
                        >
                            <div className={styles.Form01} style={fontMonserratBold.style}>
                                <h1>
                                Participa ingresando <br />
                                tu documento de identidad:
                                </h1>
                                <div className={styles.containerDoc}>
                                    <select
                                        name='tipoDoc'
                                        id='tipoDoc'
                                        syle={fontMonserratSemiBold.style}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    
                                    >
                                        <option value=''>Documento</option>
                                        <option value='DNI'>D.N.I.</option>
                                        <option value='CE'>C.E</option>
                                    </select>
                                    <input 
                                        type="text" 
                                        name="documento"
                                        id="documento"
                                        maxLength="9" 
                                        value={documento} 
                                        onChange={handleChange} syle={fontMonserratSemiBold.style} 
                                        onKeyDown={handlekeyDown} placeholder='Nro. de documento' 
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {errores.documento && 
                                    <div className='contentError'>
                                        <label style={fontMonserratRegular.style}>{errores.documento}</label>
                                    </div>
                                }
                                <div className={styles.boxBtn}>
                                    <button 
                                        type='submit'
                                    >
                                        PARTICIPAR
                                    </button>
                                </div>
                                <div className={styles.recordatorioUser}>
                                    <Image src='/assets/recordarUsuario.png' alt='Mira el video de la promo' width="470" height="119" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Documento
