import { useState, useEffect,useRef } from 'react'
 
import Image from 'next/image'
import styles from  '../../styles/sass/premios.module.sass'
import localFont from "next/font/local"



import { gsap } from 'gsap/dist/gsap.js'


import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'

gsap.registerPlugin(CSSRulePlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

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



const Principal = () => {

    

    return (
        <>
           <div className={styles.pagePremios}>
                <div className={styles.boxTitle}>
                    <h2>
                        <Image src='/assets/premio.svg' width="270" height="31" alt='Premio' />
                        <Image src='/assets/plane1.png' className={` ${styles.avion1} ${styles.avion} `} width="452" height="242" alt='Avion' />
                        <Image src='/assets/plane2.png' className={`${styles.avion2} ${styles.avion}`} width="339" height="278" alt='Avion' />
                    </h2>
                </div>

                <div className={styles.subTitle}>
                    <div className={styles.boxMarco}>
                        <div className={styles.ContainerImg}>
                            <Image src='/assets/franja2.png' width="561" height="65" alt='Franja' />
                        </div>
                        <p style={fontMonserratBold.style}>
                        Estas son las increíbles experiencias que podrás <br />
                        elegir, para vivirlas con un acompañante.
                        </p>
                    </div> 
                </div>

                <div className={styles.listPremios}>
                    <div className='boxViewPremio'>
                        <Image src='/assets/premio1.png' width="3600" height="2730" alt='Argentina' />
                    </div>
                </div>

           </div>
        </>
    )
}

export default Principal
