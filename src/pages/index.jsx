import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import routes from './routes'

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Redirect />} />

        {routes.map(({ path, Component, Super, auth }) => (
          <Route
            key={path}
            path={path}
            element={
              auth ? (
                <Auth>
                  <Super>
                    <Component />
                  </Super>
                </Auth>
              ) : Super ? (
                <Super>
                  <Component />
                </Super>
              ) : (
                <Component />
              )
            }
          />
        ))}

        <Route path='*' element={<Redirect />} />
      </Routes>
    </Router>
  )
}

const Redirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home', { replace: true })
  }, [navigate])
  return null
}

const Auth = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const processing = useRef()

  const authTest = useCallback(async () => {
    if (processing.current) return
    processing.current = true
    setLoading(false)
    processing.current = false
  }, [])

  useEffect(() => {
    authTest()
  }, [authTest])

  return loading ? <div>Loading...</div> : <div style={{ overflow: 'hidden' }}>{children}</div>
}
