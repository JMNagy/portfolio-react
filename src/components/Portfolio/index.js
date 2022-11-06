import React from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import portfolioData from '../../data/portfolio.json'
import coverCalc from '../../assets/images/portfolio/Calculator/Calc.PNG'
import coverSketch from '../../assets/images/portfolio/EtchnSketch/EtchnSketch.PNG'
import coverRPS from '../../assets/images/portfolio/RockPaperScissors/rockpaperscissors.PNG'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  console.log(portfolioData)

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {' '}
        {portfolio.map((port, idx) => {
          let coverImg
          switch (port.title) {
            case 'Calculator App':
              coverImg = coverCalc
              break

            case 'Etch A Sketch App':
              coverImg = coverSketch
              break

            case 'Rock Paper Scissors Game':
              coverImg = coverRPS
              break
          }
          return (
            <div className="image-box" key={idx}>
              <img src={coverImg} className="portfolio-image" alt="portfolio" />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Portfolio
