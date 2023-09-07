import { useEffect, useRef, useState } from 'react'
import Slider from "react-slick"
import localFont from "next/font/local"
import Image from 'next/image'
import styles from  '@/styles/sass/intro.module.sass'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const fontAkira = localFont({ 
    src: "../../fonts/AkiraExpanded-SuperBold.ttf"
})

const fontMonserratBold = localFont({ 
    src: "../../fonts/Montserrat-Bold.ttf"
})

const fontPoppins = localFont({ 
    src: "../../fonts/Poppins-Regular.ttf"
})



export default function Intraga() {
    let boolInit =  useRef(false)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,    
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        fade: true
    }
    
    const [days, setDays] = useState()
    const [hour, setHour] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
  
    let datetarget = useRef(null)
    let asecond = useRef(1000)
    let aminute = useRef(0)
    let ahour = useRef(0)
    let aday = useRef(0)
    useEffect( () => {
        if (!boolInit.current){
            boolInit.current = true
            datetarget.current = new Date("2023-09-16")
            // Milliseconds for the calculations
            aminute.current = asecond.current * 60
            ahour.current = aminute.current * 60
            aday.current = ahour.current * 24

            updateCountdown()
            setInterval(updateCountdown, asecond.current);
        }
    },[]) 
    const updateCountdown = () => {
        // Calcs
        const NOW = new Date()
        const DURATION = datetarget.current - NOW
        const REMAINING_DAYS = Math.floor(DURATION / aday.current);
        const REMAINING_HOURS = Math.floor((DURATION % aday.current) / ahour.current);
        const REMAINING_MINUTES = Math.floor((DURATION % ahour.current) / aminute.current);
        const REMAINING_SECONDS = Math.floor((DURATION % aminute.current) / asecond.current);
        // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)
        // console.log(DURATION)
        // console.log(REMAINING_DAYS)
        // console.log(REMAINING_HOURS)
        // console.log(REMAINING_MINUTES)
        // console.log(REMAINING_SECONDS)

        // Render
        setDays(REMAINING_DAYS)
        setHour(REMAINING_HOURS)
        setMinutes(REMAINING_MINUTES)
        setSeconds(REMAINING_SECONDS)
        
    }


    return (
        <div className={styles.pageIntro}>
            <div className='container'>
                <div className={styles.gridContainer}>
                    <div className={styles.boxOctogonos}>
                        <Image src='/assets/octogonos.svg' width='160' height='97' alt='Octogonos' />
                    </div>
                    <div className={styles.boxInfo}>
                        <div className={styles.boxTitle}>
                            <Image src='/assets/promo.svg' width='218' height='77' alt='Promo Picaras'/>
                        </div>
                        <div className={styles.boxSubTitle}>
                            <Image src='/assets/empaquePC.png' width='596' height='63' alt="Junta tus Empaques" />
                        </div>
                        <div className={styles.boxSubTitleMovil}>
                            <Image src='/assets/empaqueMovil4.png' width='271' height='81' alt="Junta tus Empaques" />
                        </div>

                        <div className={styles.containerCarrusel}>
                            <div className={styles.boxComente}>
                                <Image src='/assets/comete.png' width='303' height='80' alt="Muy pronto vas a comerte el mundo"  />
                            </div>
                            <div className={styles.centerCarrusel}>
                                <Slider {...settings}>
                                    <div className={styles.pasosPromo}>
                                        <Image src='/assets/extrema.png' width='331' height='190' alt="La Extrema"/>
                                    </div>
                                    <div className={styles.pasosPromo}>
                                        <Image src='/assets/clasica.png' width='331' height='190' alt="La Clasica"/>
                                    </div>
                                    <div className={styles.pasosPromo}>
                                        <Image src='/assets/menta.png' width='331' height='190' alt="La Menta"/>
                                    </div>
                                    <div className={styles.pasosPromo}>
                                        <Image src='/assets/fresa.png' width='331' height='190' alt="La Fresa"/>
                                    </div>
                                    <div className={styles.pasosPromo}>
                                        <Image src='/assets/xl.png' width='331' height='190' alt="La XL"/>
                                    </div>
                                    <div className={styles.pasosPromo}>
                                        <Image src='/assets/chips.png' width='331' height='190' alt="La Chips"/>
                                    </div>
                                </Slider>
                            </div>
                        </div>


                        {/* <div className={styles.boxPronto}>
                            <Image src='/assets/pronto2.png' className={styles.boxImgPronto} width='755' height='240' alt="Muy pronto vas a comerte el mundo" />
                            <div className={`${styles.boxPlaner} ${styles.pos1}`}>
                                <Image src='/assets/plane1.png' width='452' height='242' alt="Avion 1" />
                            </div>
                            <div className={`${styles.boxPlaner} ${styles.pos2}`}>
                                <Image src='/assets/plane2.png' width='339' height='278' alt="Avion 2" />
                            </div>
                        </div>
                        <div className={styles.boxProntoMovil}>
                            <Image src='/assets/prontomovil.png' className={styles.boxImgPronto} width='236' height='64' alt="Muy pronto vas a comerte el mundo" />
                            <div className={`${styles.boxPlaner} ${styles.pos1}`}>
                                <Image src='/assets/plane1.png' width='452' height='242' alt="Avion 1" />
                            </div>
                            <div className={`${styles.boxPlaner} ${styles.pos2}`}>
                                <Image src='/assets/plane2.png' width='339' height='278' alt="Avion 2" />
                            </div>
                        </div> */}
                    </div>
                    <div className={styles.boxContador}>
                        <div className={styles.contadorContainer}>
                            <Image src='/assets/contador.png' className={styles.boxCinta} width='484' height='170' alt="Contador" />
                            <div className={styles.boxInfoContador}>
                                <div className={styles.boxTime}>
                                    <p style={fontMonserratBold.style}>Días</p>
                                    <h2 style={fontAkira.style}>{days}</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <h2 style={fontAkira.style}>:</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <p style={fontMonserratBold.style}>Horas</p>
                                    <h2 style={fontAkira.style}>{hour}</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <h2 style={fontAkira.style}>:</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <p style={fontMonserratBold.style}>Minutos</p>
                                    <h2 style={fontAkira.style}>{minutes}</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <h2 style={fontAkira.style}>:</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <p style={fontMonserratBold.style}>Segundos</p>
                                    <h2 style={fontAkira.style}>{seconds}</h2>
                                </div>
                            </div>
                            <div className={`${styles.boxPaper} ${styles.pos1}`}>
                                <Image src='/assets/paper2.png' width='96' height='108' alt="Paper1" />
                            </div>
                            <div className={`${styles.boxPaper} ${styles.pos2}`}>
                                <Image src='/assets/paper1.png' width='132' height='138' alt="Paper2" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxCierre}>
                        <div className={styles.cierreGrid}>
                            <Image src='/assets/logo2.svg' width='160' height='72' alt='Octogonos Picaras' />
                        </div>
                    </div>
                    <div className={styles.boxCNCH}>
                        <h3 style={fontPoppins.style}>CNCH de Perú S.A. 20514584789</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
