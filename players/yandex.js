class Yandex {
    hostname = "music.yandex.ru"

    nextTrack = () => {
        document.getElementsByClassName("player-controls__btn_next")[0].click();
    }

    prevTrack = () => {
        document.getElementsByClassName("player-controls__btn_prev")[0].click();
    }

    playPause = () => {
        document.getElementsByClassName("player-controls__btn_play")[0].click();
    }
}

const yandex = new Yandex()

export { yandex }
