import './App.scss';
import {Routes, BrowserRouter, Route, Navigate} from "react-router-dom"
// import {useState, useEffect} from "react" import Table from
// './component/Table';

import Cartpage from './component/Cartpage';
import Home from './component/Home';
import { useEffect } from 'react';

function App() {
useEffect(
    ()=>{
      console.log( window.innerWidth)
      if(window.innerWidth<700){
        alert("Please Open it as Desktop ,It's not for Phone")
      }
    },[]
)
    // arr1=[{type:"hoodies1"},{type:"hoodies2"},{type:"hoodies4"}]
    return ( <> 
    <BrowserRouter>
       
        <Routes>
            <Route path='/*' element={<Home/>}/>
            {/* <Route path='/*' element={< Navigate to = "/Home" />}/> */}
            <Route exact path="/Cart" element={<Cartpage />}/>
        </Routes>

    </BrowserRouter> </>
    );
}

export default App;