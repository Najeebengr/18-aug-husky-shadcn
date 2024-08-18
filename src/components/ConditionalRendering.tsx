import React from 'react'

function ConditionalRendering() {
    function Admin(){
        return <h1>
            Admin
        </h1>
    }
    function Login(){
        return <h1>
            Login
        </h1>
    }
  let content;
  let isLoggin = true
//   if(isLoggin){
//     content = <Admin />
//   }
//   else {
//     content = <Login/>
//   }
    return (
    <div className='p-5'>
      Conditional Rendering
      <div>
        {isLoggin ? <Admin/> : <Login/>}
      </div>
    </div>
  )
}

export default ConditionalRendering
