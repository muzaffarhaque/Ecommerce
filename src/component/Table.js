import React, { useEffect } from 'react'

import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Table(props) {
  
    // let [data,setData] = useState(props.data);
    const infoitem=  props.data.filter((data) => data.type.toLowerCase().includes(props.sleact))
    
// console.log(props.data[4])
const [tasks,
    setTasks] = useState([]);

    function getdata(id) {

    let task=props.data[id-1]
     setTasks([...tasks,task]);
    }
    //    console.log(inputarr, "happy this is = ")
    // props.cartdata1(data)
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    const infoitem1=  infoitem.filter((d) => d.size.toUpperCase().includes(props.size1))
    return ( <> {
        infoitem1.length===0?
       <tr>
                    <td colSpan={6}>
                        <br/>
                        <center>
                            <h2
                                style={{
                                color: "green"
                            }}>Mach is Not Found
                                <br/>🚫
                            </h2>
                        </center>

                    </td>

                </tr>:
                 infoitem1.map((item,i) => {
                    return (
                        <tr key={item.id} className='second-row'>
                            <td>
                                <img width="100%" height="100vh" src={item.img} alt="img"/>
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
                                    <div><input   id={"so"+i} type="checkbox"/></div>
                                </div>
                            </td>
                        </tr>
                    )
                })
    } </>
  )
}