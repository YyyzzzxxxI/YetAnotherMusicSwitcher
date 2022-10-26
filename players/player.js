import { yandex } from "./yandex.js"
import { vk } from "./vk.js"


class Player {
    nextTrack = (hostname) => {
        switch (hostname) {
            case yandex.hostname:
                return yandex.nextTrack
            case vk.hostname:
                return vk.nextTrack
        }
    }

    prevTrack = (hostname) => {
        switch (hostname) {
            case yandex.hostname:
                return yandex.prevTrack
            case vk.hostname:
                return vk.prevTrack
        }
    }

    playPause = (hostname) => {
        switch (hostname) {
            case yandex.hostname:
                return yandex.playPause
            case vk.hostname:
                return vk.playPause
        }
    }
}

const player = new Player()

export { player }
