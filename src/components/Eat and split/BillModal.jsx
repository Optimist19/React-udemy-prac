// import React from 'react'

import { useState } from "react"

function BillModal({name, selectPayer, payment, spillBill, billExpense}) {

	// const [spillBill, setspillBill] = useState({
	// 	bill: "",
	// 	expense: ""
	// })

	// const [payer, setPayer] = useState("")

	// function billExpense(e){
	// 	setspillBill({...spillBill, [e.target.name]:e.target.value})
	// }

	// function selectPayer(e){
	// 	setPayer(e.target.value)
	// }

	// console.log(spillBill)

	// function payment(){
	// 	if(payer === name){
	// 		console.log(`You are owing ${name} ${spillBill.bill - spillBill.expense}`)
			
	// 	}else{
	// 		console.log(`${name}  is owing you ${spillBill.bill - spillBill.expense}`)
	// 	}
	// }

  return (
	<div className="form-con">
		<div className="">
			<p>Split a bill with {name}</p>
			<div>
				<label>Bill value 
					<input type="number" name="bill" value={spillBill.bill} onChange={billExpense}/>
				</label>
			</div>
			<div>
				<label>Your expenses
					<input type="number" name="expense" value={spillBill.expense} onChange={billExpense}/>
				</label>
			</div>
			{/* <input placeholder="hello"/> */}
			<p>{name} expense: {spillBill.bill === "" ? "" : spillBill.bill - spillBill.expense}</p>
			<label>Who is paying the bill?
				<select onChange={selectPayer}>
					<option value="you">You</option>
					<option value={`${name}`}>{name}</option>
				</select>
			</label>
			<br />
			<button onClick={()=>payment(name)}>Split Bill</button>
		</div>
	</div>
  )
}

export default BillModal