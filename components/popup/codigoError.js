import localFont from "next/font/local"
import Image from 'next/image'
import Link from 'next/link'

import { gsap } from 'gsap/dist/gsap.js'


import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'

import styles from  '@/styles/sass/popup.module.sass'



const fontAkira = localFont({ 
    src: "../../fonts/AkiraExpanded-SuperBold.ttf"
})

const fontMonserratBold = localFont({ 
    src: "../../fonts/Montserrat-Bold.ttf"
})
const fontMonserratSemiBold = localFont({ 
    src: "../../fonts/Montserrat-SemiBold.ttf"
})
const fontPoppins = localFont({ 
    src: "../../fonts/Poppins-Regular.ttf"
})



function CodigoError() {

    const handlerClose = (e) => {
        e.preventDefault()
        const tl = gsap.timeline()
        const codePopup = document.getElementById("codePopup")
        tl.to(codePopup, {opacity: 0})
        tl.to(codePopup, {display:'none'})
    }
    
    return (
        <div className={styles.pagePopup} id="codePopup">
            <div className={styles.contentCenter}>
                <div className={styles.contentMessage}>
                    <a href="#" className={styles.closePopup} onClick={handlerClose}>
                        <Image src='/assets/close3.png' width="24" height="24" alt='Cerrar PopUp' />
                    </a>
                    <div className={styles.containerInfo}>
                        <h2>
                            <Image src='/assets/titlePopUp.svg' width="200" height="44" alt='Codigo Incorrecto' />
                        </h2>
                        <p style={fontMonserratSemiBold.style}>
                            Lo sentimos, pero el código del empaque que has ingresado no es válido. 
                            Por favor, verifica cuidadosamente el código e inténtalo nuevamente.
                            Si sigue teniendo inconvenientes, 
                            puedes revisar nuestras <Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
                        </p>
                        <div className={styles.containerButton}>
                            <button type="button" style={fontMonserratBold.style} onClick={handlerClose}>REGRESAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default CodigoError
