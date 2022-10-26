import React from 'react'
import './index.scss'
import Loader from 'react-loaders'

const Portfolio = () => {
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">Portfolio</h1>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Portfolio
