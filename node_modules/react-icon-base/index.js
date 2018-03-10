import React from 'react'
import PropTypes from 'prop-types'

const IconBase = ({ children, color, size, style, width, height, ...props }, { reactIconBase = {} }) => {
  const computedSize = size || reactIconBase.size || '1em'
  return (
    <svg
      children={children}
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      height={height || computedSize}
      width={width || computedSize}
      {...reactIconBase}
      {...props}
      style={{
        verticalAlign: 'middle',
        color: color || reactIconBase.color,
        ...(reactIconBase.style || {}),
        ...style
      }}
    />
  )
}

IconBase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  style: PropTypes.object
}

IconBase.contextTypes = {
  reactIconBase: PropTypes.shape(IconBase.propTypes)
}

export default IconBase
