import { useState, useEffect,useRef } from 'react'
 
import Image from 'next/image'
import styles from  '../../styles/sass/home.module.sass'
import localFont from "next/font/local"



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



const Gracias = ({updateUser,updatePage,eliminarDatos}) => {

    const handleAddCode = (e) => {
        e.preventDefault()
        updatePage(3)
    }
    const handleHome = (e) => {
        e.preventDefault()
        updatePage(1)
        updateUser(false)
        eliminarDatos()
    }

    return (
        <>
            <div className={`${styles.pageThankYou}`}>
                <div className='container'>
                    <div className={styles.boxTitle}>
                        <h2>
                            <Image src='/assets/participa.svg' width="378" height="60" alt='Ya estas participando !' />
                            <Image src='/assets/plane1.png' className={styles.avion1} width="452" height="242" alt='Avion' />
                            <Image src='/assets/plane2.png' className={styles.avion2} width="339" height="278" alt='Avion' />
                        </h2>
                        <h3 style={fontMonserratBold.style}>Códigos registrados correctamente</h3>
                    </div>
                    <div className={styles.boxButtons}>
                        <button type="button" onClick={handleAddCode} style={fontMonserratBold.style}>INGRESAR MÁS CÓDIGOS</button>
                        <button className={styles.butttonTransparent} onClick={handleHome} type="button" style={fontMonserratBold.style}>VOLVER AL INICIO</button>
                    </div>
                    <div className={styles.recordatorioUser}>
                        <Image src='/assets/recordarUsuario.png' alt='Mira el video de la promo' width="470" height="119" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gracias
