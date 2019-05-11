import { func, string } from "prop-types"
import { noop } from "lodash"

export const propTypes = {
  onClick: func,
  title: string.isRequired,
  duration: string.isRequired
}

export const defaultProps = {
  onClick: noop
}
