import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import styles from  '@/styles/sass/intro.module.sass'
export default function Intraga() {
    let boolInit =  useRef(false)
    
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
            datetarget.current = new Date("2023-08-16")
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
                            <Image src='/assets/empaque.png' width='596' height='63' alt="Junta tus Empaques" />
                        </div>
                        <div className={styles.boxPronto}>
                            <Image src='/assets/pronto.png' className={styles.boxImgPronto} width='755' height='240' alt="Muy pronto vas a comerte el mundo" />
                            <div className={`${styles.boxPlaner} ${styles.pos1}`}>
                                <Image src='/assets/plane1.png' width='452' height='242' alt="Avion 1" />
                            </div>
                            <div className={`${styles.boxPlaner} ${styles.pos2}`}>
                                <Image src='/assets/plane2.png' width='339' height='278' alt="Avion 2" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxContador}>
                        <div className={styles.contadorContainer}>
                            <Image src='/assets/contador.png' className={styles.boxCinta} width='484' height='170' alt="Contador" />
                            <div className={styles.boxInfoContador}>
                                <div className={styles.boxTime}>
                                    <p>Días</p>
                                    <h2>{days}</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <h2>:</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <p>Horas</p>
                                    <h2>{hour}</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <h2>:</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <p>Minutos</p>
                                    <h2>{minutes}</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <h2>:</h2>
                                </div>
                                <div className={styles.boxTime}>
                                    <p>Segundos</p>
                                    <h2>{seconds}</h2>
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
                            <Image src='/assets/logo.svg' width='160' height='72' alt='Octogonos' />
                        </div>
                    </div>
                    <div className={styles.boxCNCH}>
                        <h3>CNCH de Perú S.A. 20514584789</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
