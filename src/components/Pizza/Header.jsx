// import React from 'react'

export default function Header() {

	const style = {
		fontSize: "48px",
		color: 'red',
		textTransform: "upperCase"
	}

  return (
	<>
		<header className="header">

			<h1 style={style}>Fast React Pizza Co,</h1>
		</header>

	</>
  )
}
