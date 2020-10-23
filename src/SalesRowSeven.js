import React from 'react'
import SalesCard from "./SalesCard"

function SalesRowSeven(props) {
    return (
        <div className="container-fluid" style = {{marginTop:"20px"}}>
        <div className="container-fluid" style = {{backgroundColor: "#FFA500",marginLeft: "0.5rem",marginRight:       "5rem"}}>
         <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header} <span style ={{float: "right",marginRight: "10px"}}> See All <i class="fas fa-arrow-right"></i></span></h2>  
        </div>

     <div className="row" style = {{backgroundColor: "white",marginTop: "-7px",marginLeft:"0.5rem",marginRight: "0.1px"}}>
         <SalesCard 
         ImgSrc = {require('./SalesImg/Android1.jpg')}
         Item= "X-INOVA Magic 11 Dual SIM"
         priceOne = "GH₵ 217"
         priceTwo = "GH₵ 315"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/Android2.jpg')}
         Item= "X-INOVA G12 Dual SIM Phone"
         priceOne = "GH₵ 179"
         priceTwo = "GH₵ 215"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/Android3.jpg')}
         Item= "X-INOVA G12 8GB HDD Phone"
         priceOne = "GH₵ 179"
         priceTwo = "GH₵ 215"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/android4.jpg')}
         Item= "X-INOVA Redmi 7A Dual SIM Phone"
         priceOne = "GH₵ 499"
         priceTwo = "GH₵ 599"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/android5.jpg')}
         Item= "Infinix Smart 4 Dual Sim"
         priceOne = "GH₵ 473"
         priceTwo = "GH₵ 489"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/android6.jpg')}
         Item= "Cubot JS - 16GB HDD"
         priceOne = "GH₵ 5000"
         priceTwo = "GH₵ 6000"
         />
     </div>

    </div>
    )
}

export default SalesRowSeven
