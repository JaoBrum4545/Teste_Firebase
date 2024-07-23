//const { default: firebase } = require("firebase/compat/app")

function meunome(){
    alert("Botão clicado com sucesso!")
    console.log("Okay!")
}

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result =>{
            const user = result.user;
            document.write(user.displayName);
            console.log(user)
        })
        .catch(console.log)
}