import React from 'react'
import SalesCard from "./SalesCard"

function SalesRowSix(props) {
    return (
        <div className="container-fluid" style = {{marginTop:"20px"}}>
        <div className="container-fluid" style = {{backgroundColor: "#FFA500",marginLeft: "0.5rem",marginRight:       "5rem"}}>
         <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header} <span style ={{float: "right",marginRight: "10px"}}> See All <i class="fas fa-arrow-right"></i></span></h2>  
        </div>

     <div className="row" style = {{backgroundColor: "white",marginTop: "-7px",marginLeft:"0.5rem",marginRight: "0.1px"}}>
         <SalesCard 
         ImgSrc = {require('./SalesImg/peak.jpg')}
         Item= "Peak Sweetened Condensed Milk"
         priceOne = "GH₵ 2"
         priceTwo = "GH₵ 3"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/creamer.jpg')}
         Item= "Super viviga non-dairy creamer"
         priceOne = "GH₵ 3"
         priceTwo = "GH₵ 4"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/sugar.jpg')}
         Item= "St.Louis Cube sugar"
         priceOne = "GH₵ 4"
         priceTwo = "GH₵ 5"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/twix.jpg')}
         Item= "Twix Chocolate Bar"
         priceOne = "GH₵ 4"
         priceTwo = "GH₵ 5"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/peak-can.jpg')}
         Item= "Peak Full cream milk"
         priceOne = "GH₵ 8"
         priceTwo = "GH₵ 10"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/cornflakes.jpg')}
         Item= "Cruncy Crunch Cornflakes"
         priceOne = "GH₵ 5000"
         priceTwo = "GH₵ 6000"
         />
     </div>

    </div>
    )
}

export default SalesRowSix
