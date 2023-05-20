var audio = {
    musica: null,
    pista1: "audio/bunny-knight_1.wav",
    reproducir: function(rutaPista) {
        if(audio.musica != null) {
            audio.musica.pause();
            audio.musica.src = "";
        }
        audio.musica = new Audio(rutaPista);
        audio.musica.play();
    }
};