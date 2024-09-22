import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200 bg-green-300' style={{backgroundColor: color}}>
      <div className='flex flex-wrap fixed bottom-12 justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white bg-green-600' onClick={() => setColor('green')}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-600' onClick={() => setColor('red')}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-yellow-300' onClick={() => setColor('yellow')}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App  
