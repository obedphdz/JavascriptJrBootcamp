//Sentencias y usos

//Sentencia if

let childs = 2;

if (childs != 0){
    document.write("Tienes hijos");
}else if (childs == 0){
    document.write("No tienes hijos");
}else{
    document.write("No se sabe");
}

//Sentencia while
let saluda = true;
let count = 0;
while(saluda){
    count++;
    document.write("Hola");
    if(count == 10){
        saluda = false;
    }
};

//Sentencia do while

do{
    let nombre = prompt("¿Cual es tu nombre?");
    document.write(`Hola ${nombre}`);
}while(nombre != "salir");

// Sentencia for

let nombres = ["Juan", "Pedro", "Maria", "Luisa"];
for(let i; i<nombres.length;i++){
    document.write(`Hola ${nombres[i]}`);
};

//Sentencia for in
for (let i in nombres){
    document.write(`Hola ${nombres[i]}`);
};

//Sentencia for of
for (let i of nombres){
    document.write(`Hola ${i}`);
};