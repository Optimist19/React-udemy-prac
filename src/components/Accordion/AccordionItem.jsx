// import React from 'react'

import { useState } from "react"

function AccordionItem({text, title, i}) {

	const [isOpen, SetIsOpen] = useState(false)

	function toggle(){
		SetIsOpen(!isOpen)
	}

	// console.log(props)
  return (
	<>
		<div className={`item ${isOpen ? "open" : ""}`} onClick={toggle}>
			<p className="number">{i < 9 ? `0${i + 1}` : i + 1}</p>
			<p className="text">{title}</p>
			<p className="icon">{isOpen ? "-" : "+"}</p>
			{isOpen && <div className="content-box">{text}</div>}
		</div>
	</>
  )
}

export default AccordionItem