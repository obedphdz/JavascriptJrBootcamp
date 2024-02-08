let free = true;
const validarInvitado = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if(edad>=18){
        if(time>=2 && time<7 && free){
            free = false;
            document.write(`Puedes pasar gratis porque eres la primer persona despues de las 2:00 am`);
        }else{
            document.write(`Son las ${time}:00 hrs,Puedes pasar pero tienes que pagar la entrada`);
        }
    }else{
        document.write("No puedes pasar");
    }
}

validarInvitado(23);
validarInvitado(24);
validarInvitado(5);
validarInvitado(21);
validarInvitado(2);
validarInvitado(3);
validarInvitado(2);