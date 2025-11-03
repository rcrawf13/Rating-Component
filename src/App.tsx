import { use, useState } from 'react'
import './App.css'
import Stars from './components/Stars';

function App({heading = 'How Was Your Experience?'}) {
  const rating = Array.from({length:5},(_,index)=>index+1)
  const [hover, setHover] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0)
  const [isVisible, setIsVisible] = useState(false);
  const feedbackMessage = ['Terrible', 'Bad', 'Okay', 'Good', 'Excellent']

  const showModal = () => {
    setIsVisible(true)

}
  

  const closeModal = ():void => {
    setSelectedRating(0);
    setIsVisible(false)
  }

if (isVisible) {
      
  return(
    <div className="focus">
        <div className="modal">
          <h2>You Rated Your Experience as:</h2>
          <p className='response'>{feedbackMessage[selectedRating-1]}</p>
        <button className='subButton' onClick={closeModal}>Close</button>
        </div>

      </div>
  )
}
else {

   return (
    <>
      <div className='rating-box'>
        <h1>{heading}</h1>
        <Stars rating = {rating} setHover={setHover} setSelectedRating={setSelectedRating} selectedRating={selectedRating} hover={hover} />
            <p 
            style={selectedRating===1?({'color':'red'}):(selectedRating===5?({'color':'green'}):({'color':''}))}
            >{feedbackMessage[selectedRating-1]}
            </p>

            <button className='subButton' onClick={showModal}>Submit</button>
      </div>

    </>

  )

}


 
}

export default App
