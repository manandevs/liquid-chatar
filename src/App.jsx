import React from 'react'
import Header from './components/layouts/header'
import { Hero } from './components/home/hero'

const App = () => {
  return (
    <div className='bg-[linear-gradient(to_bottom,#020617,#064E3B_35%,#047857_65%,#10B981_100%)] text-white'>
      <Header />
      <Hero />
    </div>
  )
}

export default App