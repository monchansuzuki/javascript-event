document.addEventListener("resize",function (e) {
    console.log("Event : "+e.type+" Vous avez appuyer sur la touche : "+String.fromCharCode(e.charCode)+" Evenement clavier")
})