import * as React from 'react'

function activityIndicator() {
  return (
    <i className="activityIndicator" aria-hidden={true}>
      <span className="spinner">
        <span className="double-bounce1" />
        <span className="double-bounce2" />
      </span>
    </i>
  )
}

export default activityIndicator
