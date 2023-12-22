import { useState } from 'react'
import SearchComponent from './component/SearchComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 flex items-center justify-center w-screen h-screen p-6'>
      <div className='bg-white rounded-md max-w-md p-6 shadow-sm'>
        <SearchComponent />
      </div>
    </div>
  )
}

export default App
