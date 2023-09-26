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

const fontPeckham = localFont({ 
    src: "../../fonts/PeckhamPress.otf"
})



function CodigoUtilizado() {

    const handlerClose = (e) => {
        e.preventDefault()
        const tl = gsap.timeline()
        const codePopup = document.getElementById("codePopupUti")
        tl.to(codePopup, {opacity: 0})
        tl.to(codePopup, {display:'none'})
    }
    
    return (
        <div className={styles.pagePopup} id="codePopupUti">
            <div className={styles.contentCenter}>
                <div className={styles.contentMessage}>
                    <a href="#" className={styles.closePopup} onClick={handlerClose}>
                        <Image src='/assets/close3.png' width="24" height="24" alt='Cerrar PopUp' />
                    </a>
                    <div className={styles.containerInfo}>
                        <h3 style={fontPeckham.style}>
                            <span><Image src='/assets/tilde.png' width="12" height="8" alt='' />CODIGO <br /></span> USADO
                        </h3>
                        <p style={fontMonserratSemiBold.style}>
                        Lo sentimos, el código que has ingresado ya ha sido registrado anteriormente. 
                        Te sugerimos corregir o ingresar un nuevo código. Si sigue teniendo inconvenientes, 
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

export default CodigoUtilizado
