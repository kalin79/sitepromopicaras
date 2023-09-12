import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'


import localFont from "next/font/local"
import Image from 'next/image'
import Link from 'next/link'

import styles from  '../styles/sass/header.module.sass'

import { gsap } from "gsap"

// import { gsap } from 'gsap/dist/gsap.js'

// import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin.js'

// gsap.registerPlugin(CSSRulePlugin)

const fontSharp = localFont({ 
     src: "../fonts/SharpGroteskBold11-Regular.ttf"
 })

 const fontMont = localFont({ 
     src: "../fonts/Montserrat-Bold.ttf"
 })

export default function Header() {
     const router = useRouter()
     const handleMenu = () => {
          const contentNav = document.getElementById("wrapperNavMovil")
          const _Nav = document.getElementById("navMain")
          const opcioNavMovil = document.getElementById("opcioNavMovil")
          const tl = gsap.timeline()

          if (contentNav.getAttribute("menu")){
               tl.to(_Nav, {"display": "none"})
               tl.to(opcioNavMovil, {"display": "none"},'-=.5')
               tl.to(contentNav, {y: "-100%"})
               contentNav.removeAttribute("menu")
          }else{
               
               contentNav.setAttribute("menu","activo")
               tl.to(contentNav, {y: "0%"})
               tl.to(_Nav, {"display": "block"})
               tl.to(opcioNavMovil, {"display": "block"},'-=.5')
          }

     }
     return (
          <>
               <div className={styles.navbar} onClick={handleMenu}>
                    <Image src='/assets/navopen.svg' width="29" height="17" alt='abrir menu' />
               </div>
               <div className={styles.wrapperNavMovil} id="wrapperNavMovil" ></div>
               <header className={styles.headerMain}>
                    <div className={styles.headerTopBar}>
                         <Image src='/assets/topbar.png' className={styles.fondoHeader} width="1200" height="300" alt='Menu Princial' />
                    </div>
                    <div className='container'>
                         <div className={styles.gridMain}>
                              <Link href='/' className={styles.itemLeft}>
                                   <Image src='/assets/logo2.svg' className={styles.logo} width="140" height="65" alt='El gusto de comerme el mundo' />
                              </Link>
                              <div className={`${styles.contentNav} ${styles.itemCenter}`}>
                                   <nav className={`${styles.navMain} `} id="navMain">
                                        <Link href='/inicio' className={router.pathname == "/inicio" ? `${styles.active}` : ""}>
                                             <p style={fontMont.style}>INICIO</p>
                                        </Link>
                                        <Link href='/como-participar' className={router.pathname == "/como-participar" ? `${styles.active}` : ""}>
                                             <p style={fontMont.style}>¿COMO PARTICIPAR?</p>
                                        </Link>
                                        <Link href='/premios' className={router.pathname == "/premios" ? `${styles.active}` : ""}>
                                             <p style={fontMont.style}>PREMIOS</p>
                                        </Link>
                                        <Link href='/ganadores' className={router.pathname == "/ganadores" ? `${styles.active}` : ""}>
                                             <p style={fontMont.style}>GANADORES</p>
                                        </Link>
                                        <Link href='/encuentra-tus-picaras' className={router.pathname == "/comprar" ? `${styles.active}` : ""}>
                                             <p style={fontMont.style}>COMPRAR</p>
                                        </Link>
                                   </nav>
                              </div>
                              <div className={`${styles.octaganosNav} ${styles.itemRight}`}>
                                   <Image src='/assets/octagonosP.png' className={styles.logo} width="480" height="292" alt='Alto en grasas saturadas | Alto en azucar' />
                              </div>
                              <div className={styles.opcioNavMovil} id="opcioNavMovil">
                                   <Image src='/assets/lineanav.png' className={styles.boxLinea} width="382" height="13" alt='El gusto de comerme el mundo' />
                                   <div className={styles.contentLink}>
                                        <Link href='/preguntas-frecuentes' className={router.pathname == "/preguntas-frecuentes" ? `${styles.active}` : ""}>
                                             <p style={fontMont.style}>PREGUNTAS FRECUENTES</p>
                                        </Link>
                                        <Link href='/terminos-condiciones' className={router.pathname == "/terminos-condiciones"  ? `${styles.active}` : ""}>
                                             <p style={fontMont.style}>TÉRMINOS Y CONDICIONES</p>
                                        </Link>
                                   </div>
                                   <div className={styles.boxRedes}>
                                        <a href="" target='_blank'>
                                             <Image src="/assets/facebook.svg" width="26" height="26" alt="Picaras :: Facebook" />
                                        </a>
                                        <a href="" target='_blank'>
                                             <Image src="/assets/instagram.svg" width="26" height="26" alt="Picaras :: Instagram" />
                                        </a>
                                        <a href="" target='_blank'>
                                             <Image src="/assets/youtube.svg" width="26" height="26" alt="Picaras :: YouTube" />
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </header>
          </>
     )
}
