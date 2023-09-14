import Image from 'next/image'
import Link from 'next/link'

import localFont from "next/font/local"

import styles from  '../styles/sass/footer.module.sass'

const fontMonserratSemiBold = localFont({ 
     src: "../fonts/Montserrat-SemiBold.ttf"
 })

 const fontMonserratBold = localFont({ 
     src: "../fonts/Montserrat-Bold.ttf"
 })

export default function Footer() {
     return (
          <>
               <footer className={`${styles.footerMain} ${styles.footerFixed}`}>
                    <div className={`${styles.containerFooter} container`}>
                         <div>
                              <h3 styles={fontMonserratSemiBold.style}>Promoción válida únicamente para mayores de edad.</h3>
                         </div>
                         <div>
                              <nav style={fontMonserratBold.style}>
                                   <Link href="/terminos-condiciones" >TÉRMINOS Y CONDICIONES</Link>
                                   <Link href="/preguntas-frecuentes" >PREGUNTAS FRECUENTES</Link>
                              </nav>
                              <div className={styles.containerSocial}>
                                   <a href="https://www.facebook.com/galletaspicaras?mibextid=ZbWKwL" target='_blank'>
                                        <Image src="/assets/facebook.svg" width="26" height="26" alt="Picaras :: Facebook" />
                                   </a>
                                   <a href="https://www.instagram.com/galletaspicaras/" target='_blank'>
                                        <Image src="/assets/instagram.svg" width="26" height="26" alt="Picaras :: Instagram" />
                                   </a>
                                   <a href="https://www.youtube.com/channel/UC3pfCnNPojflo_rP8oWmt-Q" target='_blank'>
                                        <Image src="/assets/youtube.svg" width="26" height="26" alt="Picaras :: YouTube" />
                                   </a>
                              </div>
                         </div>
                    </div>
               </footer>
          </>
     )
}
