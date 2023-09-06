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



const Codigo = () => {

    const VALORES_INICIALES = {
        codigo: '',
    }
    
    const [valores, setValores] = useState(VALORES_INICIALES)
    const [errores, setErrores] = useState({})
    const [submitForm, setSubmitForm] = useState(false)

    const { codigo } = valores

    const handleSubmit = (e) => {
        e.preventDefault()
        const pageID = 'pageRegister'
        const itemPage = 4
        let height = -1 * window.innerHeight * (itemPage - 1)
        let containerParallax = document.getElementById('viewOverflow')
        const erroresValidacion = validarRegistro(valores)
        setErrores(erroresValidacion)
        console.log(Object.keys(errores).length)
        if (Object.keys(errores).length === 0){
            if (!submitForm){
                console.log('Error')
                setSubmitForm(true)
                gsap.to(containerParallax,  { top: height, ease: "Power1.easeInOut" })
            }else{
                console.log('pasamos al siguiente')
            }
            
        }
    }

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)

        setValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }
    

    const handleBlur = () => {
        // const erroresValidacion = validarRegistro(valores)
        // setErrores(erroresValidacion)
    }

    


    return (
        <>
            <div className={`${styles.bgRegistro} ${ styles.pageCodigo }  heightView`} id='pageCodigo'>
                <div className='container'>
                <div className={`${styles.gridMain} separationTopMain2`}>
                        <div className={styles.itemWorld}>
                            <div className={styles.contentWorld}>
                                <Image src='/assets/mundo.png' width="288" height="288" className={styles.containerImg} alt='Comente el Mundo viajando' />
                            </div>
                        </div>
                        <div className={`${styles.itemForm} ${styles.itemFrom3}`}>
                            <div className={styles.containerImgCodigo}>
                                <Image src='/assets/codigo.png' width="340" height="183" alt='Comente el Mundo viajando' />
                            </div>
                            <div className={styles.imgTitle}>
                                <Image src='/assets/txtregistra.svg' width="371" height="42" alt='Registra los codigos de tus empaques' />
                            </div>
                            <form>
                                <h2 style={fontMonserratSemiBold.style}>
                                Puedes registrar todos los códigos <br />que tengas.
                                </h2>
                                <div className={styles.containerCode}>
                                    <input name="code" placeholder='Ingresa tu código...'/>
                                    <button type='button'>AÑADIR CÓDIGO</button>
                                </div>
                                <div className={styles.viewCode}>

                                </div>
                                <div>
                                    <button type='submit'>ENVIAR CÓDIGOS</button>
                                </div>
                            </form>
                            <div className={styles.recordatorioUser}>
                                <Image src='/assets/recordarUsuario.png' alt='Mira el video de la promo' width="470" height="119" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Codigo
