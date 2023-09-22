export default function validarRegistro(valores) {
    let errores = {}
    
    if (!valores.nombre){
        errores.nombre = "El nombre es obligatorio"
        // return errores
    }
    if (!valores.apellido){
        errores.apellido = "El nombre es obligatorio"
        // return errores
    }
    
    if(!/^([0-9])*$/.test(valores.movil)){
        errores.movil = "Debe contener solo numeros"
        // return errores
    }else {
        if (!valores.movil){
            errores.movil = "El movil es obligatorio"
            // return errores
        }
    }
    if (!valores.lugar){
        errores.lugar = "El nombre es obligatorio"
        // return errores
    }
    // if (!valores.instagram){
    //     errores.instagram = "El nombre es obligatorio"
    // }
    if (!valores.email){
        errores.email = "El email es obligatorio"
        // return errores
    }else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ){
        errores.email = "Email no valido"
        // return errores
    }
    if ((!valores.politicaDatos) || (valores.politicaDatos === '')){
        errores.politicaDatos = "Política de privacidad es obligatorio"
        // return errores
    }
    if ((!valores.tyc) || (valores.tyc === '')){
        errores.tyc = "Términos y Condiciones es obligatorio"
        // return errores
    }
    if ((!valores.edad) || (valores.edad === '')){
        errores.edad = "Mayor de edad es obligatorio"
        // return errores
    }

    return errores
}