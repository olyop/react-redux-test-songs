import React from "react"

import Song from "../Song"

import { componentClassNames } from "../../../helpers"
import { selectSong } from "../../actions"
import { connect } from "react-redux"

import "./index.scss"

const bem = componentClassNames("SongsList")

const SongsList = ({ selectSong, songs }) => (
  <div className={bem("")}>
    {songs.map(song => (
      <Song
        onClick={() => selectSong(song)}
        {...song}
      />
    ))}
  </div>
)

const mapStateToProps = ({ songs }) => ({ songs })
const mapDispatchToProps = { selectSong }

export default connect(mapStateToProps, mapDispatchToProps)(SongsList)
