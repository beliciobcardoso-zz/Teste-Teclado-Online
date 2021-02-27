document.onkeyup = function (e) {
    let index = 0
    let tecla = e.keyCode

    for (index; index < 255; index++) {
        if (tecla == index) {
            console.log(tecla)
            console.log(e.key)
        }

    }
}