// import React from 'react'

function Button({backgroundColor, color, handle, text}) {
	// console.log(backgroundColor, color, handle, text)
  return (
	<div>
		<button style={{backgroundColor: backgroundColor, color: color}}onClick={handle}>{text}</button>
	</div>
  )
}

export default Button