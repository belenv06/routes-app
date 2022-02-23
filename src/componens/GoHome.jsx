import React from 'react'
import {useNavigate} from 'react-router'
import {Outlet} from 'react-router'

export const GoHome = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate("/")
  }
  return (
    <div>
      <section> <Outlet/> </section>
      <button onClick={handleGoHome}> Go Home</button>
    </div>
  )
}
