$(() => {
    $('#btn').click(() => {
        let randomHex = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
        $("body").css('background-color', randomHex);
    })
})
