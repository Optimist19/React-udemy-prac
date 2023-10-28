// import React from 'react'

import { useState } from "react"

function DateComp() {

	const [step, setStep] = useState(0)
	const [count, setCount] = useState(0)
	

	// function inStepFtn(){
	// 	setStep(step + 1)
	// }
	
	// function deStepFtn(){
	// 	setStep(step - 1)
	// }

	// function inCountFtn(){
	// 	setCount(count + 1)
	// }

	function inCountFtn(e){
		setCount(Number(e.target.value))
	}
	
	function deCountFtn(){
		setCount(count - 1)
	}

	function rangeInput(e){
		e.preventDefault()
		setStep(Number(e.target.value))
	}

	function reset(){
		setStep(1)
		setCount(0)
	}

	let date = new Date(2023, 10, 19)
	// console.log(date.toDateString())
	date.setDate(date.getDate() + count)

  return (
	<div>

		<input type="range" min="0" max="10" value={step} onChange={rangeInput} />

		{/* <button onClick={inStepFtn}>+</button>Step: {step}
		<button onClick={deStepFtn}>-</button>
		<br /> */}
		Step: {step}

		<button onClick={inCountFtn}>+</button>
		{/* Count: {count * step} */}
		<input type="text" value={count} onChange={inCountFtn} />
		<button onClick={deCountFtn}>-</button>

		<p>{count === 0 ? "Today is" : count > 0 ? `${count} days from today is` : `${Math.abs(count)} days ago was`}</p>
		<p>{date.toDateString()}</p>

		<br />
		{count !== 0 || step !== 1 ?<div>
			<button onClick={reset}>Reset</button>
		</div> : null}
	</div>
  )
}

export default DateComp