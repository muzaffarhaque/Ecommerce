import React, { useEffect, useState } from 'react'
import "../App.scss"
import {Navigate,NavLink,Link}from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft,faTimes,faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import img1 from "../images/nasa-V4ZksNimxLk-unsplash.jpg"
export default function Cartpage() {
    const [cartinfo,setCartinfo]=useState([])
     const [count,setCount]=useState([])


async function feachingcartedata(){
    fetch("http://localhost:3200/Cart",{
        method:"GET",
      
     }).then((e)=>e.json().then((t)=>setCartinfo(t)))
    
}
useEffect(()=>{feachingcartedata()},[])

let removhandler=(i)=>{
    // let newdata=[...cartinfo]
    console.log(i)
    {
    fetch(`http://localhost:3200/Cart/${i}`,{
        method:"DELETE"
     }).then((er)=>er.json().then((ti)=>{
        setCartinfo(ti);
        feachingcartedata()
    }))
    }
    console.log(cartinfo[i],"ind")
    console.log(cartinfo,"show")
//     newdata.splice(i,1)
//    setCartinfo(newdata)
  
}
function increment(id){
   
}
 console.log(cartinfo,"add cart data")
 console.log(count,"o")
  return (
    <div className="cdd-container">
        <div className="colum one">
        <div className="gotoback">
                <NavLink to="/home" className="gobackbut">
                < i><FontAwesomeIcon icon={faArrowLeft}/></i>
                
                </NavLink>
                
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
                                        <div onClick={()=>removhandler(itm.id)}> <FontAwesomeIcon icon={faTimes}/> </div>
                                        <div><img src={img1} width="100%" height="50%" alt="" /></div>
                                        <div>{itm.name}</div>
                                    </div>
                                </td>
                                <td>{itm.price}</td>
                                <td>
                                    <div className="cart-td-container">
                                        <span> <i onClick={()=>{increment(itm.id)}}><FontAwesomeIcon icon={faPlus}/></i> </span><span>{count}</span><span><i onClick={()=>{setCount(count--)}} ><FontAwesomeIcon icon={faMinus}/></i></span>
                                    </div>
                                </td>
                                <td>{itm.price}</td>
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
                    <div>$9887</div>
                </div>
                <div>
                    <div>Total</div>
                    <div>$98783</div>
                </div>
                <div><button className='button2'>PROCEED TO CHECKOUT</button></div>
                </div>
        </div>
    </div>
  )
}

