import React from "react"

import Song from "../Song"

import { componentClassNames } from "../../../helpers"
import { connect } from "react-redux"

import "./index.scss"

const bem = componentClassNames("SelectedSong")

const SelectedSong = ({ selectedSong }) => {
  if (selectedSong === null) {
    return null
  } else {
    return (
      <div className={bem("")}>
        <Song {...selectedSong} />
      </div>
    )
  }
}

const mapStateToProps = ({ selectedSong }) => ({ selectedSong })

export default connect(mapStateToProps)(SelectedSong)
