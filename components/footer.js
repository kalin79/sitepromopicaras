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
                                   <Link href="" >TÉRMINOS Y CONDICIONES</Link>
                                   <Link href="" >PREGUNTAS FRECUENTES</Link>
                              </nav>
                              <div className={styles.containerSocial}>
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
               </footer>
          </>
     )
}