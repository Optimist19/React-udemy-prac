import { useState } from "react";
import Button from "./Button";


function ButtonReuse1() {

	const [step, setStep] = useState(1)

	const messages = [
		"Learn React ⚛️",
		"Apply for jobs 💼",
		"Invest your new income 🤑",
	];

	

	function next(){
	
		if(step < 3) setStep(step + 1)
	}
	function prev(){

		if(step > 1) setStep(step - 1)
	}

	console.log(step)


  return (
	<div className="steps">

		<h1>Reusable button component with children props</h1>
		<div className="numbers">
			<div className={`${step >= 1 ? "active" : ""}`}>1</div>
			<div className={`${step >= 2 ? "active" : ""}`}>2</div>
			<div className={`${step >= 3 ? "active" : ""}`}>3</div>
		</div>

		<p className="message">
			Step {step}: {step && messages[step - 1]}
		</p>

		<div>
			<Button backgroundColor="#7950f2" color="#fff" handle={next}>Next</Button>

			<Button backgroundColor="#7950f2" color="#fff" handle={prev}>Prev</Button>
		</div>
	</div>
  )
}

export default ButtonReuse1