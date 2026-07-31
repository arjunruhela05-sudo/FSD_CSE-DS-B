import React from 'react'
import Book from './Components/Book'
import Physics from './Components/Physics'
import Chemistry from './Components/Chemistry'
import Maths from './Components/Maths'
const App = () => {
  return (
    <div>
      <Book />
      <Physics/>
      <Chemistry/>
      <Maths/>
    </div>
  )
}

export default App