class Vk {
    hostname = "vk.com"

    nextTrack = () => {
        document.getElementsByClassName("top_audio_player_next")[0].click();
    }

    prevTrack = () => {
        document.getElementsByClassName("top_audio_player_prev")[0].click();
    }

    playPause = () => {
        document.getElementsByClassName("top_audio_player_play")[0].click();
    }
}

const vk = new Vk()

export { vk }
