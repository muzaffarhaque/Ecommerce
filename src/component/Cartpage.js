import React, { useEffect, useState } from 'react'
import "../App.scss"
import {useNavigate,NavLink,Link}from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft,faTimes,faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'






const getdatafromlocsto = () => {
    const datag = localStorage.getItem("tasks");
    if (datag) {
        return JSON.parse(datag)
    } else {
        return []
    }

}


export default function Cartpage() {
    const nevigate =useNavigate();
     const [cartinfo,setCartinfo]=useState(getdatafromlocsto())
     let [final,setFinal]=useState(0)


// async function feachingcartedata(){
//     fetch("http://localhost:3200/Cart",{
//         method:"GET",
      
//      }).then((e)=>e.json().then((t)=>setCartinfo(t)))
    
// }
// useEffect(()=>{feachingcartedata()},[])

function addall(){
    console.log("func call")
   
}

let removhandler=(i)=>{
     let newdata=[...cartinfo]
    console.log(i)
   
    // {
    // fetch(`http://localhost:3200/Cart/${i}`,{
    //     method:"DELETE"
    //  }).then((er)=>er.json().then((ti)=>{
    //     setCartinfo(ti);
    //     feachingcartedata()
    // }))
    // }
    console.log(cartinfo[i],"ind")
    console.log(cartinfo,"show")
    newdata.splice(i,1)
 
   setCartinfo(newdata)
 
  
}
function addall(){
    let total=0;
    for(let i=0;i<cartinfo.length;i++){
        total+=cartinfo[i].total
        console.log("Totl =",total)
    }
   setFinal(total)
}
useEffect(()=>{
    
    localStorage.setItem("tasks",JSON.stringify(cartinfo))
    
  addall()
},[cartinfo])

function increment(id){
   const data=JSON.parse(localStorage.getItem("tasks"))
   data[id].count +=1
   data[id].total +=data[id].price
   setCartinfo(data)

}
function decriment(id){
    const data=JSON.parse(localStorage.getItem("tasks"))
    if(data[id].count>1){
        data[id].count -=1
        data[id].total -=data[id].price
      
       }
    setCartinfo(data)
}


  return (
    <div className="cdd-container">
        <div className="colum one">
        <div className="gotoback">
                {/* <NavLink to="/home" className="gobackbut"> */}
                < i  className="gobackbut"><FontAwesomeIcon onClick={()=>nevigate(-1)} icon={faArrowLeft}/></i>
                {/* </NavLink> */}
                
            </div>
            <table width="100%" cellSpacing={0} border={0} >
                <tbody>
                    <tr className="cart-super-first-row">
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantati</th>
                        <th>SubTotal</th>
                    </tr>
                    {cartinfo.length<1?<tr>
                    <td colSpan={6}>
                        <br/>
                        <center>
                            <h2
                                style={{
                                color: "green"
                            }}>Data is Empty
                                <br/>🚫
                            </h2>
                        </center>

                    </td>

                </tr>:
                         Array.isArray(cartinfo)?
                        cartinfo && cartinfo.map((itm,i)=>
                            // return(
                                <tr key={itm.id} className="cart-first-row">
                                <td>
                                    <div on className="cart-td-flex-container">
                                        <div onClick={()=>removhandler(i)}> <FontAwesomeIcon icon={faTimes}/> </div>
                                        <div><img src={itm.img} width="100%" height="50%" alt="" /></div>
                                        <div>{itm.name}</div>
                                    </div>
                                </td>
                                <td>&pound;{itm.price}</td>
                                <td>
                                    <div className="cart-td-container">
                                        <span> <i onClick={()=>{increment(i)}}><FontAwesomeIcon icon={faPlus}/></i> </span><span>{itm.count}</span><span><i onClick={()=>{decriment(i)}} ><FontAwesomeIcon icon={faMinus}/></i></span>
                                    </div>
                                </td>
                                <td>&pound;{itm.total}</td>
                            </tr>
                        // )
                        )
                        :""
                    }
                  
                  
                </tbody>
            </table>
        </div>
        <div className="colum two">
<div className="container-sec-col">
                <div>
                    <h1>Cart totals</h1>
                </div>
                <div >
                    <div>Subtotal</div>
                    <div>&pound;{final}</div>
                </div>
                <div>
                    <div>Total</div>
                    <div>&pound;{final}</div>
                </div>
                <div><button className='button2'>PROCEED TO CHECKOUT</button></div>
                </div>
        </div>
    </div>
  )
}

