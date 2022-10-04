import React from 'react'
import '../App.scss';
import {NavLink} from "react-router-dom"
import {useState, useEffect} from "react"

import Table from './Table';
// import Cartpage from './component/Cartpage';
let opt = [
    "hoodies",
    "soter",
    "hoodies4",
    "cargo",
    "jeens",
    "formal",
    "Tridishnal"
]
const sopt = ["S", "M", "L", "XL", "XXL"]
export default function Home() {

     const [slecteddata,setSlecteddata]=useState([])
    
    // let slector=useRef(null) let
    // [opt,setOpt]=useState(["hoodies1","hoodies2","hoodies4"])
    const [size,
        setSize] = useState("")
    const [slet,
        setSlet] = useState("")

    const [product,
        setProduct] = useState([]);

    const [inp,
        setInp] = useState("")

    function carddata(data){
// console.log("Parent :-",data)
setSlecteddata(data)
    }


    const calldata = async() => {
        let responce = await fetch("http://localhost:3500/product");
        let info = await responce.json()
        // console.log("call",info)
        setProduct(info)
    };

    useEffect(() => {
        calldata();
    }, [slet])

    function clickhandle() {
        setSlet("")
        console.log(slet)
    }

    // function geting(info1){ return
    // info1.filter((info)=>info.type.toLowerCase().includes(slet)) ||
    // info1.filter((ifo)=>ifo.name.toLowerCase().includes(inp)) }
    // let keys=["name",]
    function geting(info1) {
        return (info1.filter((ifo) => ifo.name.toLowerCase().includes(inp.toLowerCase())))
    }
function sendcarddata(){
    console.log("In cart ",slecteddata)
   
}


  return (
    <div className="App">
    <header className="App-header">
        <div className="child">
            <select
                value={slet}
                onChange={e => setSlet(e.target.value)}
                id=""
                className="slect-cloth">
                <option >Your choice</option>
                {opt.map((data, i) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })
}

            </select>
            <select  value={size} 
             className="slect-cloth"
             onChange={e=>setSize(e.target.value)}>
                <option >Size</option>
                {sopt.map((data, i) => {
                    return (
                        <option key={i}>{data}</option>
                    )
                })
}
                {/* <option value="hoddies">Hoodies1</option>
                <option value="hoddies">Hoodies2</option>
                <option value="hoddies">Hoodies3</option> */}
            </select>

            <span className="reset" onClick={clickhandle}>* Reset</span>
        </div>
        <div className="child secondchild">
            <span className="second-child-data">
                <label htmlFor="search">Search :
                </label>
                <input
                    type="text"
                    value={inp}
                    onChange={e => setInp(e.target.value)}
                    name="search"
                    id="search"
                    className="searchbox"/>
               
                    <NavLink className="link" to="/Cart">
                    <button className="addcart" onClick={sendcarddata}>Add to Cart</button>
                    </NavLink>
                   
                
               
            </span>
        </div>
    </header>
    <br/> {/* list of table data */}

    <div className='table-container'>
        <table border="0" cellSpacing="0" cellPadding="5px" width="100%">
            <tbody>

                <tr className="first-row">
                    <th>Images</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Stack</th>
                    <th>price</th>
                    <th>Buy</th>
                </tr>

                <Table data={geting(product)} cartdata1={carddata} sleact={slet}/>

            </tbody>
        </table>
    </div>

</div>
  )
}
