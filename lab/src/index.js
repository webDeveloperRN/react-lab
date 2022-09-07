 

const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log("2 segundos despues");
    }, 2000);
});

promesa.then( () => {
    console.log("Then de la promesa");
});