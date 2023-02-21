import React, { useEffect ,useContext } from "react";
import {Gloableifo} from "./Home"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import InfiniteScroll from "react-infinite-scroll-component";

let page = 0;


async function fetchData2(setInfoitem, infoitem) {
    let responce = await fetch(`https://dummyjson.com/products?skip=${page}&limit=20`);
    let info = await responce.json();
    // console.log("featching in table")
    setInfoitem([...infoitem, ...info.products]);

    page = page + 20;
    // console.log(product);
}


export default function Table(props) {
    let [infoitem, setInfoitem] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [serchdata,setSerchdata]=useState([]);
    // let [infoitem1, setInfoitem1] = useState([]);
    // const infoitem1 = data.filter((dat) => dat.category.includes(props.sleact));
useEffect(
    ()=>{
        fetchData2(setInfoitem, infoitem);
    },[]
)


    // useEffect(
    //     ()=>{
    //         setInfoitem();
    //         console.log(infoitem.filter((ifo) => ifo.title.toLowerCase().includes(props.inp.toLowerCase())))
    //     },[props.inp]
    // )
 function checkdata(data){
    // console.log(infoitem1);
    // return infoitem1;

    let sserch=data?.filter((dat) => dat.category.includes(props.sleact))
   
    
    
    return sserch;


 }
    
//  console.log(infoitem)
    

    // console.log(props.data[4])


  

    //   const infoitem1 = infoitem.filter((d) =>d.size.toUpperCase().includes(props.size1));


   

    function getdata(id) {
        let task = infoitem[id-1];
        setTasks([...tasks, { ...task, count: 1, total: task.price }]);
        console.log(task);
    }
    //    console.log(inputarr, "happy this is = ")
    // props.cartdata1(data)
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);



    return (
        <>
            {}
            {/* {checkdata(infoitem)?.length === 0 ? (
              
                    
            ) : ( */}<>
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
                <InfiniteScroll
                    dataLength={infoitem?.length} //This is important field to render the next data
                    next={() => {


                        fetchData2(setInfoitem, infoitem);
                    }}
                    hasMore={infoitem?.length < 100}
                    loader={

                    <div className="lds-ripple"><div></div><div></div></div>
                }
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }

                >

                    <table border="0" cellSpacing="0" cellPadding="5px" width="100%" style={{ marginTop: "45px" }} className="second0table">
                        <tbody>
                            
                               
                               
                                        <Childtable adding={getdata} catdata={checkdata(infoitem).length == 0?infoitem:checkdata(infoitem)} />
                                       

                        </tbody>
                    </table>

                </InfiniteScroll>

            </>



            

        </>
    );
}


function Childtable(props){
    let catdata=props.catdata;
    // console.log("Catogari data",catdata)
    const input=useContext(Gloableifo);
    


    function serchdata(daa){
       let serchdata= daa.filter((ifo) => ifo.title.toLowerCase().includes(input.toLowerCase()));
    //    console.log(serchdata);
       return serchdata;
    }
    return(
        <>{
            serchdata(catdata).length==0?
            
            <div className="matchisnotfound-error">
            <h2
                style={{
                    width:"100%",
                    color: "green",
                    textAlign:"center",
                    width:"100%"
                }}
            >
                Mach is Not Found
                <br />
                🚫
            </h2>
        </div>
            
            :serchdata(catdata).map(
                (item,i)=>{
                    return(
                        <tr key={item.id} className="second-row">
                        <td>{item.id}</td>
                        <td>
                            <img width="100%" height="100vh" className="image-stuling" src={item.images[1]} alt="img" />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.rating}⭐</td>
                        <td>
                            <i className="fa-regular fa-thumbs-up"></i>
                            &nbsp; Instock
                        </td>
                        <td>{item.price}</td>
                        <td>
                            <div className="container-tale">
                                <div>ADD </div>
                                <label htmlFor={"so" + i} className="checked">
                                    <div className="iconbox" onClick={() =>props.adding(item.id)}>
                                        {/* <i  className="fa-solid fa-cart-shopping" ></i>   */}
                                        <FontAwesomeIcon
                                            className="shopingcart"
                                            icon={faCartShopping}
                                        />
                                    </div>
                                </label>
                                <div className="checkbox">
                                    <input id={"so" + i} type="radio" />
                                </div>
                            </div>
                        </td>
</tr>
                    )
                }
            )
        }
        
        </>
    )
}