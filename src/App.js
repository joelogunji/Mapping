import React from "react";
import './App.css'
import Culture from "./Image/Culture.jpg"
import Experience from "./Image/Experience.jpg"
import Lady from "./Image/Lady.png"
import Diversity from "./Image/Diversity.png"
import ManChild from "./Image/manChild.png"
import Team from "./Image/Team.jpg"


function App (){

  const lsetf = [
    
    {
      picture: <img className="lsetf-img" src={Culture}/>,
      name: "biola",
      age: 15,
      sex: "Female",
      class: "Jss1",
      address: "45, Akoka",
    },

    {
      picture: <img className="lsetf-img" src={Diversity}/>,
      name: "victor",
      age: 30,
      sex: "Male",
      class: "Jss2",
      address: "22, Shobande",
    },

    {
      picture: <img className="lsetf-img" src={Experience}/>,
      name: "james",
      age: 40,
      sex: "Male",    
      class: "Jss3",
      address: "44, Sholanke",
    },

    {
      picture: <img className="lsetf-img" src={Lady}/>,
      name: "Wura",
      age: 20,
      sex: "Female",
      class: "Jss1",
      address: "77, Shear",
    },

    {
      picture: <img className="lsetf-img" src={ManChild}/>,
      name: "Grace",
      age: 26,
      sex: "Female",
      class: "Jss3",
      address: "25, shomolu",
    },

    {
      picture: <img className="lsetf-img" src={Team}/>,
      name: "Akeem",
      age: 40,
      sex: "Male",
      class: "Jss2",
      address: "34, Shanke",
    },
  ]


  return(
    <div className="CardHolder">
      {lsetf.map((props)=>(
        <div className="Card">
          <div>{props.picture}</div>
          <div>Name:{props.name}</div>
          <div>Age:{props.age}</div>
          <div>Sex:{props.sex}</div>
          <div>Class:{props.class}</div>
          <div>Address:{props.address}</div>
        </div>
      ))}
    </div>
  )
}

export default App














  // <div className="Main_Container">
    //   <div className="Holder">
    //     <button onClick={Minus}>-</button>
    //     <h2>{add}</h2>
    //     <button onClick={Plus}>+</button>
    //   </div>
    // </div>




  //   const [add, setAdd]= useState(0)

//   function Plus(){
//     setAdd(add +1)
//   }

//   const Minus = () => {
//     setAdd(add -1)
//   }
