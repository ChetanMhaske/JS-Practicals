import React from 'react'

const Hello = () => {
  const name = "Ghost"
  const age = 22

  const isAdult = (age > 18 ? true : false)
  // function checkAge(){
  //   if(age > 18){
  //     return "Adult"
  //   }
  //   else{
  //     return "Not adult"
  //   }
  // }
  return (
    <>
      <h1>Hello {name}, Your age is {age}</h1> 
      <h3>This person is: {age > 18 ? "Adult" : "Not adult"}</h3>

      {isAdult ? <div>This content is for adults</div> : ""}
      {isAdult && <div>This content is for adults</div>}
    </>
  )
}

export default Hello