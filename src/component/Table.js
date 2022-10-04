import React, { useEffect } from 'react'
import img1 from "../images/nasa-V4ZksNimxLk-unsplash.jpg"
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function Table(props) {
  const [color,setColor]=useState("blue")
    let [data,setData] = useState(props.data);
// console.log(props.data[4])
   
    // console.log(props.data) info1.filter((info) =>
    // info.type.toLowerCase().includes(slet.toLowerCase())
    // setInputarr(props.data)
    // let indexdata=props.data
    function getdata(id) {
    // console.log(data,"inde",typeof(data))
     
     fetch("http://localhost:3200/Cart",{
        method:"post",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(props.data[id-1])
     }).then((e)=>console.log(e))
        
    }
    //    console.log(inputarr, "happy this is = ")
    props.cartdata1(data)

    return ( <> {
        props.data.length === 0
            ? <tr>
                    <td colSpan={6}>
                        <br/>
                        <center>
                            <h2
                                style={{
                                color: "green"
                            }}>NO Result Found
                                <br/>🚫
                            </h2>
                        </center>

                    </td>

                </tr>
            : props
                .data
                .filter((data) => data.type.toLowerCase().includes(props.sleact))
                .map((item,i) => {
                    return (
                        <tr key={item.id} className='second-row'>
                            <td>
                                <img width="100%" height="100px" src={img1} alt="img"/>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.color}</td>
                            <td>
                                <i className="fa-regular fa-thumbs-up"></i>
                                &nbsp; Instock</td>
                            <td>{item.price}</td>
                            <td>
                                <div className="container-tale">
                                    <div>1</div>
                                    <div onClick={() => getdata(item.id)}>
                                        <label htmlFor={"so"+i} className='checked'>
                                        <i  className="fa-solid fa-cart-shopping" ></i>  
                                        <FontAwesomeIcon icon={faCartShopping} />   
                                        </label>
                                    </div>
                                    <div><input  id={"so"+i} type="checkbox"/></div>
                                </div>
                            </td>
                        </tr>
                    )
                })
    } </>
  )
}