import React from 'react'

const Test = () => {

    const name = ['abc','xyz','pqr']
    
    // For and ForEach way
    let items = []
    // for(let i =0; i < name.length; i++){
    //     items.push(<li>{name[i]}</li>)
    // }

    name.forEach(item => {
        items.push(<li>{item}</li>)
    })

    // const dogImg = "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div>
        <ul>
            {items}


            {/* Two ways of it with map */}
            {name.map(item => {return <li>{item}</li>})}
            {name.map(item => (<li>{item}</li>))}


        </ul>

        {/* <img src={dogImg} /> */}

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <div style={{
                height: "200px",
                width: "500px",
                backgroundColor: "purple"
            }}>
            </div>

        </div>

        <br />
        <br />
        <br />
    </div>
  )
}

export default Test