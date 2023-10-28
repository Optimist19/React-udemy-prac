import { useState } from "react";
import Button from "./Button";


function ButtonReuse() {

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

		<h1>Reusable button component</h1>
		<div className="numbers">
			<div className={`${step >= 1 ? "active" : ""}`}>1</div>
			<div className={`${step >= 2 ? "active" : ""}`}>2</div>
			<div className={`${step >= 3 ? "active" : ""}`}>3</div>
		</div>

		<p className="message">
			Step {step}: {step && messages[step - 1]}
		</p>

		<div>
			<Button backgroundColor="#7950f2" color="#fff" handle={next} text="Next" />

			<Button backgroundColor="#7950f2" color="#fff" text="Prev" handle={prev} />


			{/* <button style={{backgroundColor: "#7950f2", color: "#fff"}}onClick={prev}>Previous</button>
			<button style={{backgroundColor: "#7950f2", color: "#fff"}}onClick={next}>Next</button>	 */}
		</div>
	</div>
  )
}

export default ButtonReuse