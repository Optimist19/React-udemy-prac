// import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function EatAndSlpit() {
  const [inputs, setInputs] = useState({
    nameOfFriend: "",
    imageUrl: "https://i.pravatar.cc/",
    pic: ""
  });
  // setInputs()

  function friendName(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  }

//   function add(e) {
//     e.preventDefault();
//     fetch("https://i.pravatar.cc/")
//       .then((res) => res.json())
//       .then((result) => setInputs({ ...inputs, pic: result }));
//   }

  // useEffect(()=>{
  // 	add()
  // },[])
  // let pic = null

//   useEffect(() => {
//     // Function to fetch a random avatar from the API
//     const add = async () => {
//       try {
//         const response = await axios.get("https://i.pravatar.cc/"); // You can specify the image size you want
//         // setAvatarUrl(response.config.url); // Set the image URL in the state
// 		console.log(response)
//         // setInputs({ ...inputs, pic: response.config.url });
//       } catch (error) {
//         console.error("Error fetching avatar:", error);
//       }
//     };

//     add();
//   }, []);

// async function generatePic(){
// 	try{

// 		const a = await axios.get('https://api.api-ninjas.com/v1/celebrity',{
// 		method: 'GET',
// 		headers: {
// 			'X-Api-Key':'CnCOfjMfvpVNes4A4zKXxQ==izfH1ZJ1Bd8BY6QW',
// 			"contentType": 'application/json'
// 			}
			
// 		});
// 		console.log(a)
// 	}catch(err){
// 		console.log(err.message)
// 	}
// }

  useEffect(()=>{
	// generatePic()
  },[])

  return (
    <div className="modal-con">
      <form className="modal">
        <label htmlFor="friendName">
          Friend Name
          <input
            type="text"
            id="friendName"
            value={inputs.nameOfFriend}
            onChange={friendName}
            name="nameOfFriend"
          />
        </label>

        <label htmlFor="friendName">
          Image URL
          <input type="text" id="friendName" value={inputs.imageUrl} readOnly />
        </label>
        <button type="submit">Add</button>
      </form>
      <img src={`${inputs.pic}`} alt="a beautiful profile pic" />
    </div>
  );
}

export default EatAndSlpit;
