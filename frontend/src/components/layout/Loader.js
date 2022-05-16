import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        height: '70px',
        width: '70px',
        margin: 'auto',
        display: 'block'
      }}
    >
    </Spinner>
  )
}

export { Loader }