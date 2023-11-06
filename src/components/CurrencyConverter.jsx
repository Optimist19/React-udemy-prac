// import React from 'react'

import { useEffect, useState } from "react"

function CurrencyConverter() {

	const [conversion, setConversion] = useState({
		from: "",
		to: "",
		amount: ""
	})

	const [output, setOutput] = useState("")

	function convertFtn(e){
		setConversion({...conversion, [e.target.name]:e.target.value})
	}


	// function amount(){
	// 	setConversion({...conversion, amount: e})
	// }

	console.log(conversion)

	useEffect(()=>{

		const controller = new AbortController();

		async function convertCurr(){
			const a = await fetch(`https://api.frankfurter.app/latest?amount=${Number(conversion.amount)}&from=${conversion.from}&to=${conversion.to}`)

			const b = await a.json()
			setOutput(b.rates[conversion.to])
		}

		convertCurr()

		return () => {
			controller.abort();
		};

	}, [conversion])

  return (
	<div>
		<h1>Currency Converter</h1>
	
		<div>
			<input type="text" name="amount" value={conversion.amount}onChange={convertFtn}/>
		</div>
		<div>
			<select value={conversion.from} onChange={convertFtn} name="from">
				<option value='USD'>USD</option>
				<option value='EUR'>EUR</option>
				<option value='CAD'>CAD</option>
				<option value='INR'>INR</option>
			</select>
		</div>
		<div>
			<select value={conversion.to} onChange={convertFtn} name="to">
				<option value='USD'>USD</option>
				<option value='EUR'>EUR</option>
				<option value='CAD'>CAD</option>
				<option value='INR'>INR</option>
			</select>
		</div>
		<p>OUTPUT: {output} {conversion.to}</p>
	</div>
  )
}

export default CurrencyConverter

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

// import { useEffect, useState } from "react";

// export default function App() {
//   const [amount, setAmount] = useState(1);
//   const [fromCur, setFromCur] = useState("EUR");
//   const [toCur, setToCur] = useState("USD");
//   const [converted, setConverted] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(
//     function () {
//       async function convert() {
//         setIsLoading(true);
//         const res = await fetch(
//           `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
//         );
//         const data = await res.json();
//         setConverted(data.rates[toCur]);
//         setIsLoading(false);
//       }

//       if (fromCur === toCur) return setConverted(amount);
//       convert();
//     },
//     [amount, fromCur, toCur]
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         value={amount}
//         onChange={(e) => setAmount(Number(e.target.value))}
//         disabled={isLoading}
//       />
//       <select
//         value={fromCur}
//         onChange={(e) => setFromCur(e.target.value)}
//         disabled={isLoading}
//       >
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//         <option value="CAD">CAD</option>
//         <option value="INR">INR</option>
//       </select>
//       <select
//         value={toCur}
//         onChange={(e) => setToCur(e.target.value)}
//         disabled={isLoading}
//       >
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//         <option value="CAD">CAD</option>
//         <option value="INR">INR</option>
//       </select>
//       <p>
//         {converted} {toCur}
//       </p>
//     </div>
//   );
// }
