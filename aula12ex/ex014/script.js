function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data. getSeconds()
    var mil = data.getMilliseconds()
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        msg.innerHTML = `Agora são ${hora}:${min}<br>` + 'Bom dia!'
        document.body.style.background = '#e7ce9d'
        img.src = 'manha.png'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        msg.innerHTML = `Agora são ${hora}:${min}<br>` + 'Boa Tarde!'
        document.body.style.background = '#ee9d48'
        img.src = 'tarde.png'
    } else {
        //Boa Noite
        msg.innerHTML = `Agora são ${hora}:${min}<br>` + 'Boa Noite!'
        document.body.style.background = '#453554'
        img.src = 'noite.png'
    }
}
