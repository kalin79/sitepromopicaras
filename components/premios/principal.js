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
                    <div className={styles.boxViewPremio}>
                        <Image src='/assets/premio1.png' className={styles.bgPremio} width="3600" height="2730" alt='Argentina' />
                        <div className={styles.contentPremio}>
                            <div className={styles.boxSubtitlePremio}>
                                <Image src='/assets/franjaSubtitle.png' width="207" height="35" alt='3 DÍAS DE FULL AVENTURA EN LA NIEVE' />
                                <h3 style={fontMonserratBold.style}>3 DÍAS DE FULL AVENTURA <br />EN LA NIEVE</h3>
                            </div>
                            <div className={styles.boxTitlePremio}>
                                <Image src='/assets/franjaTitle.png' className={styles.bgTitle} width="448" height="140" alt='snowboarding' />
                                <div className={styles.imgTitle}>
                                    <Image src='/assets/ptitle1.png' width="299" height="24" alt='snowboarding' />
                                </div>
                                <div className={styles.boxLugar}>
                                    <Image src='/assets/p_argentina.png' className={styles.bandera} width="60" height="43" alt='Argentina' />
                                    <h4>
                                    <Image src='/assets/premioargentina.png' width="139" height="30" alt='snowboarding' />
                                    </h4>
                                </div>
                                <div className={styles.boxDescriptionpremio}>
                                    <p className={fontMonserratSemiBold.style}>
                                    Si eres amante de la aventura y lo extremo, este premio es ideal para ti. Uno de los lugares por excelencia, para practicar este deporte y disfrutar la nieve, en Latinoamérica. Además, podrás observar paisajes increíbles, pendientes, bosques, y hermosos lugares que ofrece este destino.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxViewPremio}>
                        <Image src='/assets/premio21.png' className={styles.bgPremio} width="3600" height="2730" alt='Argentina' />
                        <div className={styles.contentPremio}>
                            <div className={styles.boxSubtitlePremio}>
                                <Image src='/assets/franjaSubtitle.png' width="207" height="35" alt='3 DÍAS DE FULL AVENTURA EN LA NIEVE' />
                                <h3 style={fontMonserratBold.style}>LA MEJOR CONVENCIÓN <br /> DE LATINOAMERICA</h3>
                            </div>
                            <div className={styles.boxTitlePremio}>
                                <Image src='/assets/franjaTitle2.png' className={`${styles.bgTitle}`} width="448" height="140" alt='snowboarding' />
                                <div className={`${styles.imgTitle} ${styles.big}`}>
                                    <Image src='/assets/ptitle2.png' width="299" height="24" alt='snowboarding' />
                                </div>
                                <div className={styles.boxLugar}>
                                    <Image src='/assets/p_brazil.png' className={styles.bandera} width="45" height="32" alt='Argentina' />
                                    <h4>
                                    <Image src='/assets/premiosubtitle2.png' width="139" height="30" alt='snowboarding' />
                                    </h4>
                                </div>
                                <div className={styles.boxDescriptionpremio}>
                                    <p className={fontMonserratSemiBold.style}>
                                    Sol, playa y arena, es lo primero que se nos viene a la mente cuando pensamos en este destino. Ahora imagínate también poder vivir el evento de comic más grande del continente. Si eres fan seguro este premio te encantará. Alista el traje de baño y también ese traje de super héroe que este destino te espera.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxViewPremio}>
                        <Image src='/assets/premio31.png' className={styles.bgPremio} width="3600" height="2730" alt='Argentina' />
                        <div className={styles.contentPremio}>
                            <div className={styles.boxSubtitlePremio}>
                                <Image src='/assets/franjaSubtitle.png' width="207" height="35" alt='3 DÍAS DE FULL AVENTURA EN LA NIEVE' />
                                <h3 style={fontMonserratBold.style}>3 DÍAS DE FULL AVENTURA <br />EN LA NIEVE</h3>
                            </div>
                            <div className={styles.boxTitlePremio}>
                                <Image src='/assets/franjaTitle.png' className={styles.bgTitle} width="448" height="140" alt='snowboarding' />
                                <div className={styles.imgTitle}>
                                    <Image src='/assets/ptitle1.png' width="299" height="24" alt='snowboarding' />
                                </div>
                                <div className={styles.boxLugar}>
                                    <Image src='/assets/p_argentina.png' className={styles.bandera} width="60" height="43" alt='Argentina' />
                                    <h4>
                                    <Image src='/assets/ptitle1.png' width="299" height="24" alt='snowboarding' />
                                    </h4>
                                </div>
                                <div className={styles.boxDescriptionpremio}>
                                    <p className={fontMonserratSemiBold.style}>
                                    Sol, playa y arena, es lo primero que se nos viene a la mente cuando pensamos en este destino. Ahora imagínate también poder vivir el evento de comic más grande del continente. Si eres fan seguro este premio te encantará. Alista el traje de baño y también ese traje de super héroe que este destino te espera.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxViewPremio}>
                        {/* <Image src='/assets/premio41.png' className={styles.bgPremio2} width="3600" height="2730" alt='Argentina' /> */}
                        <Image src='/assets/premio41.png' className={styles.bgPremio} width="3600" height="2730" alt='Argentina' />
                        <div className={styles.contentPremio}>
                            <div className={styles.boxSubtitlePremio}>
                                <Image src='/assets/franjaSubtitle.png' width="207" height="35" alt='3 DÍAS DE FULL AVENTURA EN LA NIEVE' />
                                <h3 style={fontMonserratBold.style}>3 DÍAS DE FULL AVENTURA <br />EN LA NIEVE</h3>
                            </div>
                            <div className={styles.boxTitlePremio}>
                                <Image src='/assets/franjaTitle.png' className={styles.bgTitle} width="448" height="140" alt='snowboarding' />
                                <div className={styles.imgTitle}>
                                    <Image src='/assets/ptitle1.png' width="299" height="24" alt='snowboarding' />
                                </div>
                                <div className={styles.boxLugar}>
                                    <Image src='/assets/p_argentina.png' className={styles.bandera} width="60" height="43" alt='Argentina' />
                                    <h4>
                                    <Image src='/assets/ptitle1.png' width="299" height="24" alt='snowboarding' />
                                    </h4>
                                </div>
                                <div className={styles.boxDescriptionpremio}>
                                    <p className={fontMonserratSemiBold.style}>
                                    Sol, playa y arena, es lo primero que se nos viene a la mente cuando pensamos en este destino. Ahora imagínate también poder vivir el evento de comic más grande del continente. Si eres fan seguro este premio te encantará. Alista el traje de baño y también ese traje de super héroe que este destino te espera.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           </div>
        </>
    )
}

export default Principal
