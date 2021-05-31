import React from 'react'
import Routes from './components/routes'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
  <BrowserRouter>
  <ScrollToTop>
    <Routes />
  </ScrollToTop>
</BrowserRouter>)
}

export default App
