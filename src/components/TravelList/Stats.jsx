

function Stats({items}) {


	if(!items.length){
		return <p className="stats">Start adding some items to your packing list</p>
	}

	const numItems = items.length

	const numPacked = items.filter(item => item.packed).length
	console.log(numPacked)

	const numPer = Math.round((numPacked/numItems) * 100)

	// if

  return (
	<footer className="stats">
			<em>
				{numPer === 100 ?
				"You got everything! Ready to go +" : `${numItems} times on your list, and you already packed ${numPacked} (${numPer}%)`}
			</em>
	
	</footer>
  )
}

export default Stats