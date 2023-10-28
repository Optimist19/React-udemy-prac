// import { useState } from "react";
import {faqs} from "./accordionData"
import AccordionItem from "./AccordionItem";

function Accordion() {

  // const [faqs, setFaqs] = useState([
  
  //   {
  //     title: "Where are these chairs assembled?",
  //     text:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  //   },
  //   {
  //     title: "How long do I have to return my chair?",
  //     text:
  //       "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  //   },
  //   {
  //     title: "Do you ship to countries outside the EU?",
  //     text:
  //       "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  //   }

  // ])


  // console.log(faqs)

  return (
	<div className="accordion">
    {
      faqs.map((a, i) =>{
        return <AccordionItem text={a.text} title={a.title} i={i}/>
    })
    }
  </div>
  )
}

export default Accordion