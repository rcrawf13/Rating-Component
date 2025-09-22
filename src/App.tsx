import { useState } from 'react'
import './App.css'
import Stars from './components/Stars';

function App({heading = 'How Was Your Experience?'}) {
  const rating = Array.from({length:5},(_,index)=>index+1)
  const [hover, setHover] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0)
  const feedbackMessage = ['Terrible', 'Bad', 'Okay', 'Good', 'Excellent']
  return (
    <>
      <div className='rating-box'>
        <h1>{heading}</h1>
        <Stars rating = {rating} setHover={setHover} setSelectedRating={setSelectedRating} selectedRating={selectedRating} hover={hover} />
            <p 
            style={selectedRating===1?({'color':'red'}):(selectedRating===5?({'color':'green'}):({'color':''}))}
            >{feedbackMessage[selectedRating-1]}
            </p>
      </div>


    </>

  )
}

export default App
