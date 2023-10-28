// import React from 'react'

import { useState } from "react"

function Challenge() {

	const [firstInput, setInput] = useState('')
	const [secondInput, setSecondInput] = useState(0)
	const [thirdInput, setThirdInput] = useState(0)
	

	const second = [
		"Dissatisfied (0%)",
		"It was okay (5%)",
		"It was good (10%)",
		"Absolutely amazing! (20%)"
	]

	const third = [
		"Dissatisfied (0%)",
		"It was okay (5%)",
		"It was good (10%)",
		"Absolutely amazing! (20%)"
	]

	let secondInputPlusThirdInput = secondInput + thirdInput
	let secondInputThirdInputTotal = secondInputPlusThirdInput / 2
	let total = Number(firstInput) + secondInputThirdInputTotal

	function firstInputFtn(e){
		setInput(e.target.value)
		// setSecondInput(e.target.value)
		// setThirdInput(e.target.value)
	}

	function secondInputFtn(e){
		// setInput(e.target.value)
		setSecondInput(e.target.value)
		// setThirdInput(e.target.value)
		if(e.target.value === "Dissatisfied (0%)"){
			setSecondInput(0)
		}else if(e.target.value === "It was okay (5%)"){
			setSecondInput(5)
		}else if(e.target.value === "It was good (10%)"){
			setSecondInput(10)
		}else if(e.target.value === "Absolutely amazing! (20%)"){
			setSecondInput(20)

		}
	}

	function thirdInputFtn(e){
		// setInput(e.target.value)
		// setSecondInput(e.target.value)
		if(e.target.value === "Dissatisfied (0%)"){
			setThirdInput(0)
		}else if(e.target.value === "It was okay (5%)"){
			setThirdInput(5)
		}else if(e.target.value === "It was good (10%)"){
			setThirdInput(10)
		}else if(e.target.value === "Absolutely amazing! (20%)"){
			setThirdInput(20)

		}
	}

	



	function reset(){
		setInput(0)
		setSecondInput(0)
		setThirdInput(0)
	}



  return (
	<div>
		<form>
			<label>How much was the bill?
				<input type="number" name="firstInput" value={firstInput} onChange={firstInputFtn} placeholder="Bill"/>
			</label>
			<br />
			<label>How did you like the service?
				<select onChange={secondInputFtn}>
					{second.map(list =>{
						return <option key={list}>{list}</option>

					})}
				</select>
			</label>
			<br />
			<label>How did your friend like the service?
				<select onChange={thirdInputFtn}>
					{third.map(list =>{
						return <option key={list}>{list}</option>

					})}
				</select>
			</label>

		</form>
			
		{firstInput >= 0 &&	<div>
			<h2>You pay ${total}(${firstInput} + ${secondInputThirdInputTotal}tips)</h2>
			<button onClick={reset}>Reset</button>
		</div>
		}
	</div>
  )
}

export default Challenge