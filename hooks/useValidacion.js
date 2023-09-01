import React, { useEffect, useState } from 'react'

const UseValidacion = (stateInicial, validar, fn) => {
    const [datos, setDatos] = useState(stateInicial)
    const [errores, setErrores] = useState({})
    const [submitForm, setSubmitForm] = useState(false)

    useEffect( () => {
        if (submitForm) {
            const noErrores = Object.keys(errores).length === 0
            if (noErrores){
                fn(); //funcion que se ejecuta en el componente
            }
            setSubmitForm(false)
        }
    },[])

    // funcion que se ejecuta cuando el usuario escribe algo

    const handleChange = (e) => {
        setSubmitForm({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    // funcion que se ejecuta cuando el usuario hace submit

    const handleSubmit = (e) => {  
        e.preventDefault()
    }

    return {
        datos,
        errores,
        submitForm,
        handleChange,
        handleSubmit
    }
}

export default UseValidacion
