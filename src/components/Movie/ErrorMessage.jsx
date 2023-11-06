// import React from 'react'

function ErrorMessage({error}){

	console.log(error,"message")
	//error showing undefined and it shouldn't be so, that is why it is not displaying
  return (
	<h4 className="error">{error}</h4>
  )
}

export default ErrorMessage