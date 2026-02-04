function changeBGColor() {
    document.body.style.backgroundColor = 
        '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    // random 0x000000 to 0xFFFFFF 
    // then convert to hex by toString(16)
    // add '#' to valid to backgroundColor
}