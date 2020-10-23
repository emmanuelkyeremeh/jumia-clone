import React from 'react'
import SalesCard from "./SalesCard"

function SalesRowEleven(props) {
    return (
        <div className="container-fluid" style = {{marginTop:"20px"}}>
        <div className="container-fluid" style = {{backgroundColor: "#FFA500",marginLeft: "0.5rem",marginRight:       "5rem"}}>
         <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header} <span style ={{float: "right",marginRight: "10px"}}> See All <i class="fas fa-arrow-right"></i></span></h2>  
        </div>

     <div className="row" style = {{backgroundColor: "white",marginTop: "-7px",marginLeft:"0.5rem",marginRight: "0.1px"}}>
         <SalesCard 
         ImgSrc = {require('./SalesImg/speaker1.jpg')}
         Item= "Bluetooth Home Theatre with Remote Control"
         priceOne = "GH₵ 349"
         priceTwo = "GH₵ 950"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/speaker2.jpg')}
         Item= "Triple Power Multimedia Speaker"
         priceOne = "GH₵ 87"
         priceTwo = "GH₵ 160"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/speaker3.jpg')}
         Item= "Home Theatre"
         priceOne = "GH₵ 295"
         priceTwo = "GH₵ 312"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/speaker4.jpg')}
         Item= "NASCO RMS bluetooth Speaker"
         priceOne = "GH₵ 186"
         priceTwo = "GH₵ 255"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/speaker5.jpg')}
         Item= "Mini Portable Bluetooth Speaker"
         priceOne = "GH₵ 119"
         priceTwo = "GH₵ 150"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/speaker6.jpg')}
         Item= "Triple Power Subwoofer"
         priceOne = "GH₵ 85"
         priceTwo = "GH₵ 120"
         />
     </div>

    </div>
    )
}

export default SalesRowEleven
