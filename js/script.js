// RECUPERO L'ELEMENTO DEL DOM DOVE VADO A MOSTRARE LE MAIL GENERATE
const emailList = document.getElementById("email-list");

// GENERO 10 MAIL INIZIALI INSERENDO UN CICLO FOR
for (let i=0; i<10; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
        console.log(resp.data.response); // ESEGUO UN CONTROLLO IN CONSOLE

        // CREO IL NUOVO ELEMENTO 
        const emailItem = document.createElement("ul");
        emailItem.textContent = resp.data.response;
        emailList.appendChild(emailItem);
    });
}

