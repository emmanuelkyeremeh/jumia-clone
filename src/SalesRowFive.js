import React from 'react'
import SalesCard from "./SalesCard"

function SalesRowFive(props) {
    return (
        <div className="container-fluid" style = {{marginTop:"20px"}}>
        <div className="container-fluid" style = {{backgroundColor: "#FFA500",marginLeft: "0.5rem",marginRight:       "5rem"}}>
         <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header} <span style ={{float: "right",marginRight: "10px"}}> See All <i class="fas fa-arrow-right"></i></span></h2>  
        </div>

     <div className="row" style = {{backgroundColor: "white",marginTop: "-7px",marginLeft:"0.5rem",marginRight: "0.1px"}}>
         <SalesCard 
         ImgSrc = {require('./SalesImg/windows.jpg')}
         Item= "Dell Inspiron Laptop"
         priceOne = "GH₵ 8 500"
         priceTwo = "GH₵ 10 000"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/laserjet.jpg')}
         Item= "HP Laserjet Printer"
         priceOne = "GH₵ 523"
         priceTwo = "GH₵ 700"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/deskjet2.jpg')}
         Item= "HP Deskjet 2130"
         priceOne = "GH₵ 339"
         priceTwo = "GH₵ 390"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/tablet.jpg')}
         Item= "ASUS Laptop Touch Screen"
         priceOne = "GH₵ 6400"
         priceTwo = "GH₵ 8500"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/laptop.jpg')}
         Item= "Lenovo Yoga TouchScreen"
         priceOne = "GH₵ 4000"
         priceTwo = "GH₵ 6000"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/dell.jpg')}
         Item= "Dell Latitude HD Screen"
         priceOne = "GH₵ 5000"
         priceTwo = "GH₵ 6000"
         />
     </div>

    </div>
    )
}

export default SalesRowFive
