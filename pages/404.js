import Layout from '../components/layout'
import localFont from "next/font/local"
import styles from  '../styles/sass/custom404.module.sass'

const fontAkira = localFont({ 
    src: "../fonts/AkiraExpanded-SuperBold.ttf"
})

const fontMonserratBold = localFont({ 
    src: "../fonts/Montserrat-Bold.ttf"
})

const fontMonserratSemiBold = localFont({ 
    src: "../fonts/Montserrat-SemiBold.ttf"
})
const fontMonserratRegular = localFont({ 
    src: "../fonts/Montserrat-Regular.ttf"
})

const fontPeckham = localFont({ 
    src: "../fonts/PeckhamPress.otf"
})

export default function Custom404() {
    return (
        <>
            <Layout
                title={'Promo Picaras'}
                description={'Promo Picaras :: ¡Junta tus empaques!'}
            >
                <div className={styles.errorPage}>
                    <div className='container'>
                        <h1 style={fontMonserratBold.style}>P&aacute;gina no Encontrada!</h1>
                    </div>
                </div>
            </Layout>
        </>
    )
}
