import { useState } from "react"


function Form({handleAddItems}) {

	const [description, setDescription] = useState("")
	const [quantity, setQuantity] = useState(1)
	// const [dits, setDIts] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
	// const [items, setItems] = useState([])






	// function handleAddItems(item){
	// 	setItems(items => [...items, item])
	// }

	function handleSUbmit(e){
		e.preventDefault()
		console.log(e.target.value)

		if(!description) return;

		const newItem = {description, quantity, packed: false, id: Date.now()
		}

		console.log(newItem)

		handleAddItems(newItem)

		setDescription("")
		setQuantity(1)
	}

	function handleOption(e){
		e.preventDefault()
		setQuantity(Number(e.target.value))
	}

	function handleInput(e){
		e.preventDefault()
		setDescription(e.target.value)
	}

	// console.log(description, quantity)


  return (
	<form className="add-form" onSubmit={handleSUbmit}>
		<h3>What do you need for your trip?</h3>

		<select value={quantity} onChange={handleOption}>
			{/* {Array.from({length: 20}, (_, i) => i + 1).map(num =>{
				<option value={num} key={num}>
					{num}
				</option>
			})} */}
			{/* {dits.map(a =>{
				<option value={a} key={a}>{a}</option>
			})} */}
				<option value={1} key={1}>{1}</option>
				<option value={2} key={2}>{2}</option>
				<option value={3} key={3}>{3}</option>
				<option value={4} key={4}>{4}</option>
				<option value={5} key={5}>{5}</option>
				<option value={6} key={6}>{6}</option>
				<option value={7} key={7}>{7}</option>
				<option value={8} key={8}>{8}</option>
				<option value={9} key={9}>{9}</option>
				<option value={10} key={10}>{10}</option>
				<option value={11} key={11}>{11}</option>
				<option value={12} key={12}>{12}</option>
				<option value={13} key={13}>{13}</option>
				<option value={14} key={14}>{14}</option>
				<option value={15} key={15}>{15}</option>
				<option value={16} key={16}>{16}</option>
				<option value={17} key={17}>{17}</option>
				<option value={18} key={18}>{18}</option>
				<option value={19} key={19}>{19}</option>
				<option value={20} key={20}>{20}</option>
		</select>
		<input type="text" placeholder="Item..." value={description} onChange={handleInput}/>
		<button>Add</button>
	</form>
  )
}

export default Form