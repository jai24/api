import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Notfound() {
    const navigate = useNavigate()
  return (
    <div style={{textAlign: 'center'}}>
      <h1>404 Page</h1>
      <h2>Page not found</h2>
      <button onClick={()=>navigate('/')}>Back to Home</button>
    </div>
  )
}


