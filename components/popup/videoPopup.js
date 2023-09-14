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



function VideoPopup() {

    const handlerClose = (e) => {
        e.preventDefault()
        const tl = gsap.timeline()
        const codePopup = document.getElementById("videoPopup")
        tl.to(codePopup, {opacity: 0})
        tl.to(codePopup, {display:'none'})
    }
    
    return (
        <div className={styles.pagePopup} id="videoPopup">
            <div className={styles.contentCenter}>
                <div className={styles.contentMessageVideo}>
                    <a href="#" className={styles.closePopup} onClick={handlerClose}>
                        <Image src='/assets/close3.png' width="24" height="24" alt='Cerrar PopUp' />
                    </a>
                    <div className={styles.containerInfo}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aKY7rdCN8dc?si=jnSslSJtjbPe7Mim" title="YouTube video player" ></iframe>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default VideoPopup
