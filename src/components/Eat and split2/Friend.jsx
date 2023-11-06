// import React from 'react'

function Friend({name, img, id, toggleModal, outPut}) {


	// console.log(name, img, id)
	

  return (
	<div className="flex">
		<img src={img} alt={name} />
			<div>
				<p>{name}</p>
				<p>{outPut}</p>
			</div>
		<button onClick={()=>toggleModal(name, id)}>Select</button>
	</div>
  )
}

export default Friend