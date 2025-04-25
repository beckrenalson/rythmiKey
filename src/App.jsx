import { useState } from 'react'
import './App.css'
import AudioHandler from './components/AudioHandler'
import ThemeToggler from './components/ThemeSwitch'
import MediaLinks from './components/MediaLinks'

function App() {

  return (
    <>
   <MediaLinks />
    <ThemeToggler />
     <h1>rythmiKey</h1>
     <h2>powered by Tonalyser technology</h2>
     <AudioHandler />
     
    </>
  )
}

export default App
