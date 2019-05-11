import { combineReducers } from "redux"

const songs = () => [
  { key: "0", title: "The Less I Know The Better", duration: "4:05" },
  { key: "1", title: "Nice For What", duration: "2:38" },
  { key: "2", title: "Walking On A Dream", duration: "3:01" },
  { key: "3", title: "Cry Me A River", duration: "5:10" }
]

const selectedSong = (selectedSong = null, { type, payload }) => {
  if (type === "SELECT_SONG") {
    return payload
  } else {
    return selectedSong
  }
}

export default combineReducers({ songs, selectedSong })
