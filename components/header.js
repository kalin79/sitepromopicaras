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
     return (
          <>
               <header className={styles.headerMain}>
                    <div className={styles.headerTopBar}>
                         <Image src='/assets/topbar.png' className={styles.fondoHeader} width="1200" height="300" alt='Menu Princial' />
                    </div>
                    <div className='container'>
                         <div className={styles.gridMain}>
                              <Link href='/' className={styles.itemLeft}>
                                   <Image src='/assets/logo2.svg' className={styles.logo} width="140" height="65" alt='El gusto de comerme el mundo' />
                              </Link>
                              <nav className={`${styles.navMain} ${styles.itemCenter}`}>
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
                                   <Link href='/comprar' className={router.pathname == "/comprar" ? `${styles.active}` : ""}>
                                        <p style={fontMont.style}>COMPRAR</p>
                                   </Link>
                              </nav>
                              <div className={`${styles.octaganosNav} ${styles.itemRight}`}>
                                   <Image src='/assets/octagonosP.png' className={styles.logo} width="480" height="292" alt='Alto en grasas saturadas | Alto en azucar' />
                              </div>
                         </div>
                    </div>
               </header>
          </>
     )
}
