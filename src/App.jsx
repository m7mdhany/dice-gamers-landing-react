import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Collection from './components/Collection/Collection'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Home from './components/Home/Home'
import Details from './components/Details/Details'
import { GamesProvider } from './components/GamesContext/GamesContext'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='md:mx-10 mx-2 min-h-fit h-screen'>
      <BrowserRouter>
      <Header />
        <GamesProvider>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/details' element={<Details />}></Route>
          </Routes>
        </GamesProvider>
      </BrowserRouter>
      <Footer />
    </div >
  )
}

export default App
