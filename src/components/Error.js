import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError()
  return (
    <div>
      <h2>Oops something went wrong</h2>
      <h2>{err.status + ":"+ err.statusText}</h2>
    </div>
  )
}

export default Error;
