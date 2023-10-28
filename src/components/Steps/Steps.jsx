import { useState } from "react";
import ButtonReuse from "./Making a reusable button/ButtonReuse"
import ButtonReuse1 from "./Reuseable component with props/ButtonReuse1";


function Steps() {

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
	<div>
		<div className="steps">
			<div className="numbers">
				<div className={`${step >= 1 ? "active" : ""}`}>1</div>
				<div className={`${step >= 2 ? "active" : ""}`}>2</div>
				<div className={`${step >= 3 ? "active" : ""}`}>3</div>
			</div>

			<p className="message">
				Step {step}: {step && messages[step - 1]}
			</p>

			<div>
				<button style={{backgroundColor: "#7950f2", color: "#fff"}}onClick={prev}>Previous</button>
				<button style={{backgroundColor: "#7950f2", color: "#fff"}}onClick={next}>Next</button>	
			</div>
		</div>
		<ButtonReuse />
		<ButtonReuse1 />
	</div>
  )
}

export default Steps