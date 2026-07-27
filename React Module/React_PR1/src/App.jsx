import React from 'react'

// const App = () => {
//   const name = "Ghost"
//   return (
//     <div>
//       <h1>Hello World {name}</h1>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   const element = <h1>Hello World</h1>
//   return element
// }   
// export default App


// const App = () => {
//   return (
//     <>
//       <h1 className='h1-1'>Hello1</h1> 
//       <h1>Hello2</h1> 
//       <img src="" alt="" /> {/* self closing tags must have a slash at the end */}
//     </>
//   )
// }

import Hello from './components/Hello'
import Test from './components/Test'
const App = () => {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <Test />
    </div>
  )
}

export default App
