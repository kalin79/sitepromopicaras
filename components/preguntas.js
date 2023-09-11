import { useState, useEffect } from 'react'
 
import Image from 'next/image'
import localFont from "next/font/local"
import styles from  '../styles/sass/preguntas.module.sass'

import { gsap } from 'gsap/dist/gsap.js'

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



const Preguntas = () => {
    const [activeQuestions, setActiveQuestions] = useState([]);
  
    const handleQuestionClick = (index) => {
      if (activeQuestions.includes(index)) {
        // Si la pregunta ya está activa, la desactivamos
        setActiveQuestions(activeQuestions.filter((item) => item !== index));
      } else {
        // Si la pregunta no está activa, la activamos
        setActiveQuestions([...activeQuestions, index]);
      }
    };
  
    return (
      <>
        <div className='' id='preguntasFrecuentes'>
          <div className='container'>
            <div className={styles.boxFaq}>
              <div className={styles.boxTitle}>
                <h2>
                  <Image src='/assets/faq.svg' width='420' height='80' alt='Titulo' />
                  <Image src='/assets/plane1.png' className={styles.avion1} width='452' height='242' alt='Avion' />
                  <Image src='/assets/plane2.png' className={styles.avion2} width='339' height='278' alt='Avion' />
                </h2>
              </div>
              <div className={styles.faq}>
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.question} ${activeQuestions.includes(index) ? styles.active : ''}`}
                    onClick={() => handleQuestionClick(index)}
                  >
                    <h2>{item.question}</h2>
                    <div className={styles.answer}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Preguntas;
  
  const faqData = [
    {
      question: 'Pregunta 1',
      answer: 'Respuesta a la Pregunta 1.',
    },
    {
      question: 'Pregunta 2',
      answer: 'Respuesta a la Pregunta 2.',
    },
    // Agrega más preguntas y respuestas aquí
  ];