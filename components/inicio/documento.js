import { useState, useEffect } from 'react'
 
import Image from 'next/image'
import localFont from "next/font/local"
import styles from  '../../styles/sass/home.module.sass'

import { gsap } from 'gsap/dist/gsap.js'
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

const fontPeckham = localFont({ 
    src: "../../fonts/PeckhamPress.otf"
})


const Documento = (agregarDato) => {

    const [tipoDoc , setTipoDoc] = useState('')
    const [doc , setDoc] = useState('')

    
    const handleChange = () => {

    }

    const handleSubmitDoc = (e) => {
        e.preventDefault()
        const pageID = 'pageRegister'
        const itemPage = 2
        let height = -1 * window.innerHeight * (itemPage - 1)
        let containerParallax = document.getElementById('viewOverflow')
        console.log(containerParallax)
        gsap.to(containerParallax,  { top: height, ease: "Power1.easeInOut" })

    }

    const handlekeyDown = (e) => {
        console.log(e.keyCode)
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105 || e.keyCode > 188 )) {
            if (e.keyCode === 8){
                console.log(1)
                return false
            }else{
                console.log(2)

                e.preventDefault()
            }
        }else{
            console.log(3)

            return false
        }
    }

    // Cambios UseEffects

    useEffect(() => {
        console.log(tipoDoc)
        const Input = document.getElementById('documento')
        if (tipoDoc === 'DNI'){
            Input.maxLength='8'
        }
        if (tipoDoc === 'CE'){
            Input.maxLength='9'
        }
    },[tipoDoc])

    return (
        <>
            <div className={`${styles.bgDocumento} heightView`} id='pageDNI'>
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
                            className={styles.itemForm}
                            onSubmit={handleSubmitDoc}
                        >
                            <div className={styles.Form01} style={fontMonserratBold.style}>
                                <h1>
                                Participa ingresando <br />
                                tu documento de identidad:
                                </h1>
                                <div className={styles.containerDoc}>
                                    <select 
                                        id='tipo_doc'
                                        name='tipo_doc' 
                                        syle={fontMonserratSemiBold.style}
                                        onChange={ e => setTipoDoc(e.target.value)}

                                    
                                    >
                                        <option value=''>Documento</option>
                                        <option value='DNI'>D.N.I.</option>
                                        <option value='CE'>C.E</option>
                                    </select>
                                    <input type="text" name="documento" id="documento" maxLength="9" value={doc} onChange={handleChange} syle={fontMonserratSemiBold.style} onKeyDown={handlekeyDown} placeholder='Nro. de documento' />
                                </div>
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
