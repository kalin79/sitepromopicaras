import { useEffect, useRef, useState } from 'react'

import localFont from "next/font/local"
import Image from 'next/image'

import Slider from "react-slick"

import styles from  '@/styles/sass/popup.module.sass'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


import { gsap } from "gsap/dist/gsap"
import { Draggable } from "gsap/dist/Draggable"

gsap.registerPlugin(Draggable)

const fontAkira = localFont({ 
    src: "../../fonts/AkiraExpanded-SuperBold.ttf"
})

const fontMonserratBold = localFont({ 
    src: "../../fonts/Montserrat-Bold.ttf"
})

const fontPoppins = localFont({ 
    src: "../../fonts/Poppins-Regular.ttf"
})



function Promo() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,    }


    let boolInit =  useRef(false)
    useEffect( () => {
        if (!boolInit.current){
            boolInit.current = true
            
            setTimeout(() => {
                verPopup()
            }, 1000)
        }
    },[]) 

    const verPopup = () => {
        const contentPopup = document.getElementById('promoPopup')
        gsap.to(contentPopup,{autoAlpha: 1, display:'block', duration: .5})
    }

    const handleClickClose = () => {
        const contentPopup = document.getElementById('promoPopup')
        gsap.to(contentPopup,{autoAlpha: 0, display:'none', duration: .5})
    }
  return (
    <div className={styles.pagePopup} id="promoPopup">
        <div className={styles.pageCenter}>
            <div className={styles.popupContent}>
                <button onClick={handleClickClose} className={styles.closePopup}>
                    <Image src='/assets/closeP.svg' width='24' height='24' alt="Close PopUp"/>
                </button>
                <div className={styles.viewPC}>
                    <Image src='/assets/tambo2.png' width='680' height='383' alt="Close PopUp"/>
                </div>
                <div className={styles.viewMovil}>
                    <div className={styles.centerCarrusel}>
                        <Slider {...settings}>
                            <div className={styles.pasosPromo}>
                                <Image src='/assets/f13.png' width='351' height='212' alt="Close PopUp"/>
                            </div>
                            <div className={styles.pasosPromo}>
                                <Image src='/assets/f23.png' width='351' height='212' alt="Close PopUp"/>
                            </div>
                            <div className={styles.pasosPromo}>
                                <Image src='/assets/f32.png' width='351' height='212' alt="Close PopUp"/>
                            </div>
                            <div className={styles.pasosPromo}>
                                <Image src='/assets/f42.png' width='351' height='212' alt="Close PopUp"/>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className={styles.boxLegal}>
                    <p style={fontPoppins.style}> 
                    Promociones válidas a nivel nacional del 01 de agosto del 2023 al 31 de agosto del 2023 y/o hasta agotar stock. Válido en tienda, app y en www.tambo.pe  No acumulable con otras promociones y/o autoliquidadles. Fotos referenciales. Premios: 10 canastas de productos Pícaras a 10 personas.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promo
