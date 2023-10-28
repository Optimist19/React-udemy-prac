// import React from 'react'

function Button({backgroundColor, color, handle, children}) {
	// console.log(backgroundColor, color, handle)
  return (
	<div>
		<button style={{backgroundColor: backgroundColor, color: color}}onClick={handle}>
			{children}
		</button>
	</div>
  )
}

export default Button

// The purpose ot the children props here, allow the text or whatever we put in between the opening ad the closing tags of this button component in the parent's component to get displayed on the screen. It's just like slot in vue js.