import { useState, useEffect,useRef } from 'react'
 
import Image from 'next/image'
import styles from  '../../styles/sass/premios.module.sass'
import localFont from "next/font/local"
import Link from 'next/link'



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
                            <Image src='/assets/franjamovil.png' width="561" height="65" alt='Franja' />
                        </div>
                        {/* <div className={styles.ContainerImg}>
                            <Image src='/assets/franjamovil.png' width="561" height="65" alt='Franja' />
                        </div> */}
                        <p style={fontMonserratBold.style}>
                        Estas son las increíbles experiencias que podrás <br />
                        elegir, para vivirlas con un acompañante.
                        </p>
                    </div> 
                </div>

                <div className={styles.listPremios}>
                    <div className={styles.boxViewPremio}>
                        <Image src='/assets/premio1.png' className={styles.bgPremio} width="3600" height="2730" alt='Argentina' />
                        <div className={`${styles.contentPremio} ${styles.pos1}`}>
                            <div className={styles.boxSubtitlePremio}>
                                <Image src='/assets/franjaSubtitle.png' width="207" height="35" alt='3 DÍAS DE FULL AVENTURA EN LA NIEVE' />
                                <h3 style={fontMonserratBold.style}>3 DÍAS DE FULL AVENTURA <br />EN LA NIEVE</h3>
                            </div>
                            <div className={styles.boxTitlePremio}>
                                <Image src='/assets/franjaTitle.png' className={styles.bgTitle} width="448" height="140" alt='snowboarding' />
                                <div className={styles.imgTitle}>
                                    <Image src='/assets/ptitle1.png' width="299" height="24" alt='snowboarding' />
                                </div>
                                <div className={`${styles.boxLugar} ${styles.pos1}`}>
                                    <Image src='/assets/p_argentina.png' className={styles.bandera} width="60" height="43" alt='Argentina' />
                                    <h4>
                                    <Image src='/assets/premioargentina.png' width="139" height="30" alt='snowboarding' />
                                    </h4>
                                </div>
                                <div className={`${styles.boxDescriptionpremio} ${styles.distancia}`}>
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
                        <div className={`${styles.contentPremio}  ${styles.pos3}`}>
                            <div className={styles.boxSubtitlePremio}>
                                <Image src='/assets/franjaSubtitle.png' width="207" height="35" alt='3 DÍAS DE FULL AVENTURA EN LA NIEVE' />
                                <h3 style={fontMonserratBold.style}>EL UNIVERSO COMO <br /> JAMÁS LO VISTE</h3>
                            </div>
                            <div className={`${styles.boxTitlePremio} ${styles.pos1}`}>
                                <Image src='/assets/franjaTitle4.png' className={styles.bgTitle} width="464" height="145" alt='snowboarding' />
                                <div className={`${styles.imgTitle} ${styles.title3}`}>
                                    <Image src='/assets/ptitle3.png' width="293" height="24" alt='snowboarding' />
                                </div>
                                <div className={styles.boxLugar}>
                                    <Image src='/assets/p_chile.png' className={styles.bandera} width="45" height="32" alt='Argentina' />
                                    <h4>
                                    <Image src='/assets/premiochile.png' width="121" height="30" alt='snowboarding' />
                                    </h4>
                                </div>
                                <div className={styles.boxDescriptionpremio}>
                                    <p className={fontMonserratSemiBold.style}>
                                    Ver las estrellas es sin suda algo fascinante, ahora imagínate hacerlo en el lugar del planeta con la mejor vista y la tecnología para poder hacerlo. ¡Exacto! Para amantes del universo y de la astronomía, esta experiencia original y única sin duda será la ideal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxViewPremio}>
                        {/* <Image src='/assets/premio41.png' className={styles.bgPremio2} width="3600" height="2730" alt='Argentina' /> */}
                        <Image src='/assets/premio41.png' className={styles.bgPremio} width="3600" height="2730" alt='Argentina' />
                        <div className={`${styles.contentPremio} ${styles.pos4}`}>
                            <div className={styles.boxSubtitlePremio}>
                                <Image src='/assets/franjaSubtitle.png' width="207" height="35" alt='3 DÍAS DE FULL AVENTURA EN LA NIEVE' />
                                <h3 style={fontMonserratBold.style}>UNA EXPERIENCIA ÚNICA <br />CON LA NATURALEZA</h3>
                            </div>
                            <div className={styles.boxTitlePremio}>
                                <Image src='/assets/franjaTitle3.png' className={styles.bgTitle} width="400" height="145" alt='snowboarding' />
                                <div className={`${styles.imgTitle} ${styles.title4}`}>
                                    <Image src='/assets/ptitle4.png' width="191" height="24" alt='snowboarding' />
                                </div>
                                <div className={`${styles.boxLugar}  ${styles.pos4}`}>
                                    <Image src='/assets/p_colombia.png' className={styles.bandera} width="60" height="43" alt='Argentina' />
                                    <h4>
                                    <Image src='/assets/premiocolombia.png' width="118" height="30" alt='snowboarding' />
                                    </h4>
                                </div>
                                <div className={styles.boxDescriptionpremio}>
                                    <p className={fontMonserratSemiBold.style}>
                                    Despertar en medio de un paraíso, no es algo que suceda todos los días.Si lo que buscas es relajarte y tener una experiencia en medio de la naturaleza, este premio tiene que ser tuyo. Obviamente, sin perder el estilo y coolness desde la comodidad de un Glamping.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.boxButton}>
                    <Link href='/' style={fontMonserratBold.style}>
                        QUIERO PARTICIPAR
                    </Link>
                </div>

                <div className={styles.fondoRasgado}>
                    <div className={styles.bgfondo}>
                        <Image src='/assets/bg-3.png' width="5760" height="4012" alt='Franja' />
                    </div>

                    <div className={styles.boxTitleRasgado}>
                        <h2>
                            <Image src='/assets/titleotros.png' width="520" height="76" alt='Premio' />
                            <Image src='/assets/plane1.png' className={` ${styles.avion1} ${styles.avion} `} width="452" height="242" alt='Avion' />
                            <Image src='/assets/plane2.png' className={`${styles.avion2} ${styles.avion}`} width="339" height="278" alt='Avion' />
                        </h2>
                    </div>

                    <div className={styles.subTitleRasgado}>
                        <div className={styles.boxMarco}>
                            <div className={styles.ContainerImg}>
                                <Image src='/assets/franja2.png' width="561" height="65" alt='Franja' />
                            </div>
                            <p style={fontMonserratBold.style}>
                            Además, hay más premios cool para ti.
                            </p>
                        </div> 
                    </div>

                    <div className={`container ${styles.contentInfo}`}>
                        <div className={styles.containerGrid}>
                            <div className={styles.contentProducto}>
                                <Image src='/assets/parlantes.png' width="389" height="171" alt='Parlantes Alexa' />
                            </div>
                            <div className={styles.contentProducto}>
                                <Image src='/assets/scooter.png' width="379" height="424" alt='Scooters electricos' />
                            </div>
                            <div className={styles.contentProducto}>
                                <Image src='/assets/amazon.png' width="180" height="298" alt='Amazon fire tv' />
                            </div>
                            <div className={styles.contentProducto}>
                                <Image src='/assets/go.png' width="320" height="235" alt='Go Pro 9' />
                            </div>
                            <div className={styles.contentProducto}>
                                <Image src='/assets/gif.png' width="303" height="245" alt='Gift Card 200' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.boxButton}>
                    <Link href='/' style={fontMonserratBold.style}>
                        QUIERO PARTICIPAR
                    </Link>
                </div>

                <div className={styles.recordatorioUser}>
                    <Image src='/assets/recordarUsuario.png' alt='Mira el video de la promo' width="470" height="119" />
                </div>

           </div>
        </>
    )
}

export default Principal
