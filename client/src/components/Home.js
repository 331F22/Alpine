import Header from "./header";
import AddEntry from "./AddEntry";
import CurrentEntries from "./CurrentEntries";
import React from "react";
import VoucherGrid from "./VoucherGrid";
import Footer from "./footer";

function Home(){
    return(
        <>
        <div className="App">
            <Header/>
            <h1>Entries</h1>

            <AddEntry />
            <hr />
            <CurrentEntries />
            <hr />
            <hr/>
            <VoucherGrid/>

            <Footer/>
        </div>
        </>
    )
        }export default Home;

