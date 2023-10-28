export default function Footer() {

	const hour = new Date().getHours()

	const openHour =  12
	const closeHour =  22

	const isOpen = hour >= openHour && hour <= closeHour

	

	// if(hour >= openHour && hour <= closeHour){
	// 	alert("We're currently opened!")
	// 	console.log("hi")
	// }else{
	// 	alert('Sorry, we are closed')
	// }

  return (
    <>

			<footer className="footer">
				{isOpen && (
					<div>
						<p>
							We are open until {closeHour}:00. Come visit us or order online.
						</p>
						<button className="btn">Order</button>
					</div>
					)}
			</footer>
    </>
  );
}
