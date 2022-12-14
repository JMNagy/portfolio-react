import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import Lottie from 'lottie-react'
import Pcsetup from '../../assets/images/pcsetup.json'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'J',
    'o',
    'h',
    'n',
    '-',
    'M',
    'i',
    'c',
    'h',
    'a',
    'e',
    'l',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="pc-animation-container">
        <Lottie className="pc-animation" animationData={Pcsetup} />
      </div>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={30}
            />
          </h1>
          <h2>Frontend Developer / Javascript</h2>
          <Link to="/portfolio-react/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Home
