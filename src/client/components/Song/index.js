import React, { Fragment } from "react"

import { componentClassNames } from "../../../helpers"
import { propTypes, defaultProps } from "./props"

import "./index.scss"

const bem = componentClassNames("Song")

const Song = ({ onClick, title, duration }) => (
  <button
    className={bem("")}
    onClick={onClick}
    children={<Fragment>
      {title} - {duration}
    </Fragment>}
  />
)

Song.propTypes = propTypes
Song.defaultProps = defaultProps

export default Song
