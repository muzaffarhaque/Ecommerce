import React from "react";
import "../App.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect ,createContext} from "react";


import Table from "./Table";
// import Cartpage from './component/Cartpage';
export const Gloableifo =createContext();


let opt = [
  // "electronics",
  // "jewelery",
  // "men's clothing",
  // "women's clothing",
  "smartphones",
  "fragrances",
  "skincare",
  "groceries",
  "laptops",
  "mens-shoes",
  "automotive",
  "home-decoration",
  "lighting",
  "womens-jewellery"
];





// async function fetchData(setProduct, product, setIsLoading) {
//   let responce = await fetch(`https://dummyjson.com/products?limit=20`);
//   let info = await responce.json();

//   // console.log("featching in table")
//   setProduct(info.products);
//   setIsLoading(false);

// }


export default function Home() {
  const [slecteddata, setSlecteddata] = useState([]);
  const [product, setProduct] = useState([]);

  const [size, setSize] = useState("");
  const [slet, setSlet] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [inp, setInp] = useState("");

  function carddata(data) {
    // console.log("Parent :-",data)
    setSlecteddata(data);
  }

  // const calldata = async() => {
  //     let url=`https://dummyjson.com/products?limit=20` 
  // https://fakestoreapi.com/products
  //     let responce = await fetch(url);
  //     let info = await responce.json();
  //     const {products,total,skip,limit}=info;
  // console.log("call",info,skp)
  //     setProduct(products)
  //     setIsLoading(false);
  // };


  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchData(setProduct, product, setIsLoading);
  // }, [slet])

  function clickhandle() {
    setSlet("");
    setSize("");
    setInp("")
    console.log(slet);
  }



  // function geting(info1) {
  //   let sserch=info1.filter((ifo) => ifo.title.toLowerCase().includes(inp.toLowerCase()));
  //   console.log(sserch)
  //   return sserch;
   
  // }
  function sendcarddata() {
    console.log("In cart ", slecteddata);
  }

  return (
    
    <div className="App">
      <header className="App-header">
        <div className="child">
          <select
            value={slet}
            onChange={(e) => setSlet(e.target.value)}
            id=""
            className="slect-cloth"
          >
            <option>Your choice</option>
            {opt.map((data, i) => {
              return <option key={i}>{data}</option>;
            })}
          </select>


          <span className="reset" onClick={clickhandle}>
            * Reset
          </span>
        </div>
        <div className="child secondchild">
          <span className="second-child-data">
            <label htmlFor="search">Search :</label>
            <input
              type="text"
              value={inp}
              onChange={(e) => setInp(e.target.value)}
              name="search"
              id="search"
              className="searchbox"
              placeholder="Serch Name ..."
            />

            <NavLink className="link" to="/Cart">
              <button className="addcart" onClick={sendcarddata}>
                Add to Cart
              </button>
            </NavLink>
          </span>
        </div>
      </header>
      <br /> {/* list of table data */}



      {/* <div className="table-container"> */}





      {/* <table border="0" cellSpacing="0" cellPadding="5px" width="100%">
          <tbody>
            <tr className="first-row">
              <th>Sr.No</th>
              <th>Images</th>
              <th>Name</th>
              <th>Rateing  </th>
              <th>Stack</th>
              <th>price</th>
              <th>Buy</th>
            </tr> */}

      <table border="0" cellSpacing="0" cellPadding="5px" width="100%" className="first-table">
        <tbody>
          <tr className="first-row">
            <th>Sr.No</th>
            <th>Images</th>
            <th>Name</th>
            <th>Rateing  </th>
            <th>Stack</th>
            <th>price</th>
            <th>Buy</th>
          </tr>
        </tbody>
      </table>

      {/* {isLoading === true ? (

        <div className="lds-facebook"><div></div><div></div><div></div></div>


      )
        : */}
<Gloableifo.Provider value={inp}>
        <Table
          // data={product}
          // cartdata1={carddata}      
          sleact={slet}
          // inp={inp}

        />
</Gloableifo.Provider>

    </div>
    // </div>
  );
}
