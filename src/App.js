import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/portfolio-react/" index element={<Home />} />
          <Route path="/portfolio-react/about" index element={<About />} />
          <Route path="/portfolio-react/contact" index element={<Contact />} />
          <Route
            path="/portfolio-react/portfolio"
            index
            element={<Portfolio />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
