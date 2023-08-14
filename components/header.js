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

export default function Header() {

     return (
          <>
               <div className='container'>
                    <header className={styles.headerMain}>
                         <Image src='/assets/menutop2.png' className={styles.fondoHeader} width="1200" height="300" alt='Menu Princial' />
                         <div className={styles.gridMain}>
                              <Link href='/' className={styles.itemLeft}>
                                   <Image src='/assets/logo2.svg' className={styles.logo} width="140" height="65" alt='El gusto de comerme el mundo' />
                              </Link>
                              <nav className={`${styles.navMain} ${styles.itemCenter}`}>
                                   <Link href='/'>
                                        <p style={fontSharp.style}>INICIO</p>
                                   </Link>
                                   <Link href='/'>
                                        <p style={fontSharp.style}>¿COMO PARTICIPAR?</p>
                                   </Link>
                                   <Link href='/'>
                                        <p style={fontSharp.style}>PREMIOS</p>
                                   </Link>
                                   <Link href='/'>
                                        <p style={fontSharp.style}>GANADORES</p>
                                   </Link>
                              </nav>
                              <div className={`${styles.octaganosNav} ${styles.itemRight}`}>
                                   <Image src='/assets/octagonosP.png' className={styles.logo} width="480" height="292" alt='Alto en grasas saturadas | Alto en azucar' />
                              </div>
                         </div>
                    </header>
               </div>
          </>
     )
}
