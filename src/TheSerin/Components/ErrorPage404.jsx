import React from 'react'
import { Link } from 'react-router-dom'


function ErrorPage404() {
  return (
      <div className='pageNotFound'>
          <h1> 😢404😯</h1>
          <h2>Page Not Found</h2>
          <h3>This URL is not correct</h3>
          <Link id='link' to="/">👈 Home page</Link>
      </div>
  )
}

export default ErrorPage404