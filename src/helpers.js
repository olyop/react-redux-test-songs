import { join, isString, isObject, isUndefined } from "lodash"

export const pipe = x => (...fns) => fns.reduce((v, f) => f(v), x)

export const classNames = (...classNames) => ({
  className: join(
    [ ...classNames ].filter(x => x !== undefined),
    " "
  )
})

export const componentClassNames = componentName => (...args) => (
  [ ...args ]
    .map(className => {
      const def = className => ({ ignore: false, className })
      if (isString(className)) {
        return def(className)
      } else if (isUndefined(className) || isUndefined(className.className)) {
        return def(undefined)
      } else if (isObject(className)) {
        return {
          ...def(""),
          ...className
        }
      } else {
        return def("")
      }
    })
    .filter(className => (
      isUndefined(className.className) === false
    ))
    .reduce(
      (classes, { ignore, className }) => {
        if (ignore) {
          classes += className
        } else if (className === "") {
          classes += componentName
        } else {
          classes += `${componentName}__${className}`
        }
        return classes += " "
      },
      ""
    )
    .trim()
)
