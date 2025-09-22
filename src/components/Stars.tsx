const Stars = ({rating,setHover,setSelectedRating,selectedRating, hover}) => {
  return (
    <div className='star-container'>
          {
          rating.map((star)=>(
            <p 
              onMouseEnter={()=> setHover(star)}
              onMouseLeave={()=>setHover(0)}
              onClick={()=> setSelectedRating(star)}
              className={star <= (hover||selectedRating) ?'isActive':''} 
              key={`star-${star}`}>{'\u2605'}
            </p>
            
            ))
        }

    </div>
  )
}

export default Stars