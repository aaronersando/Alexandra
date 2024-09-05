$(document).ready(function () {
    
    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            effect: 'bounceIn',
        },
        out:{
            effect: 'bounceOut',
        },
    })

    // Siri wave output
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 900,
        height: 300,
        style: "ios",
        amplitude: "1",
        speed: "0.20",
        autostart: true,
      });
});