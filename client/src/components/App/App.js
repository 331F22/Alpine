import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Home";
import VoucherGrid from "../VoucherGrid";
import {Button} from "@mui/material";

function App() {

  return (

      <BrowserRouter>

         <ul>
             <li>
             <Link to={"/"}>Home </Link>
             </li>
             <li>
                 <Link to={"/vouchers"}>Vouchers </Link>
             </li>
         </ul>
          <Routes>
              <Route path="/" element={<Home />}>
                  <Route index element={<Home />} />
                  <Route exact path="/vouchers" element={<VoucherGrid />} />
              </Route>
          </Routes>
      </BrowserRouter>

  )
}

export default App;

