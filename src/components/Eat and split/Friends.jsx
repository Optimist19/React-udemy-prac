// import React from 'react'
import { useState } from "react"
import BillModal from "./BillModal"

function Friends({friend, selectPayer, payment, spillBill, billExpense, output}) {
	

	const [splitBillModal, setSplitBillModal] = useState(false)

	function openModal(){
		setSplitBillModal(prev =>{
			return prev = !prev
		})
	}
	// console.log(props.friend)

	// console.log(selectFtn)

  return (
	<div className="main-con">
		<div>
			<div className="flex">
				<div>
					<img src={friend.image} alt={friend.name} />
				</div>
				{/* <p>{friend.id}</p> */}
				<div className="p">
					<p>{friend.name}</p>
					<p>{output}</p>
				</div>
				<div>
					<button onClick={openModal}>Select</button>
				</div>
			</div>
		</div>
		{splitBillModal && (
		<div>
			<BillModal name={friend.name} selectPayer={selectPayer} payment={payment} spillBill={spillBill}
billExpense={billExpense}/>
		</div>
		)}
	</div>
  )
}

export default Friends