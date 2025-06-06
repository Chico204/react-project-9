import React, {useState} from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App (){
  
 

  const [color, setColor] = useState('')
   const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#f15025').all(10))

    const handleSubmit = (e) => {
      e.preventDefault()
      try {
        let colors = new Values(color).all(10)
        setList(colors)
      }catch(error){
        setError(true)

      }
    }

   return(
     <>
     <section className='container text-center flex items-center pl-2 h-[100px]'>
      <h3 className='mb-0 mr-2'>Color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color}
        onChange={(e) => setColor(e.target.value)} 
        placeholder='#f15025' className={`${error ? 'error' :  null}`}/>
        <button type='submit' className='btn'>Submit</button>
      </form>
     </section>
     <section className='colors'>
       {list.map((color, index) => {
        return(
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
        )
       })}
     </section>
     </>
   )
}

export default App