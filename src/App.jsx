import { useState } from 'react'
import {slides} from './slides.js'
import './App.css'

function App() {
  const [slide, setSlide] = useState(0)

  const handelNext = () => {
      setSlide(slide + 1)
  }

  const handelPrevious = () => {
    if (slide > 0){
      setSlide(slide - 1)
    }
  }

  const handelReset = () => {
    setSlide(0);
  }
``
  return (
    <div>
      <div class="button">
        <button onClick={handelReset} disabled={slide === 0}>Reset</button>,
        <button onClick={handelPrevious} disabled={slide === 0}>Previous</button>,
        <button onClick={handelNext} disabled={slide === slides.length - 1 }>Next</button>,
      </div>
      {
        slides.length > 0 &&
        <div class="slide">
        
        <h1>
        {slides[slide].title}
        </h1>
        <p>
        {slides[slide].text}
        </p>
        </div>
      }
    </div>
  )
}

export default App
