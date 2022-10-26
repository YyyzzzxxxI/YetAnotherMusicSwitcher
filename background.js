import { player } from "./players/player.js"

const HOSTS = ["music.yandex.ru", "vk.com"]

const NEXT_TRACK = "next_track"
const PREV_TRACK = "prev_track"
const PLAY_PAUSE = "play_pause"

let audibleTab = null;

chrome.commands.onCommand.addListener((command) => {
    switch (command) {
        case NEXT_TRACK:
            executeScript(player.nextTrack)
            break
        case PREV_TRACK:
            executeScript(player.prevTrack)
            break
        case PLAY_PAUSE:
            executeScript(player.playPause)
            break
    }
})

async function executeScript(func) {
    audibleTab = (await chrome.tabs.query({ audible: true }))[0] || audibleTab

    const hostname = new URL(audibleTab.url).hostname

    if (!HOSTS.includes(hostname)) {
        return
    }

    chrome.scripting.executeScript({
        target: { tabId: audibleTab.id },
        func: func(hostname)
    })
}

chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({
        url: "chrome://extensions/shortcuts"
    })
})