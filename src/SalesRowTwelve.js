import React from 'react'
import SalesCard from "./SalesCard"

function SalesRowTwelve(props) {
    return (
        <div className="container-fluid" style = {{marginTop:"20px"}}>
        <div className="container-fluid" style = {{backgroundColor: "#FFA500",marginLeft: "0.5rem",marginRight:       "5rem"}}>
         <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header} <span style ={{float: "right",marginRight: "10px"}}> See All <i class="fas fa-arrow-right"></i></span></h2>  
        </div>

     <div className="row" style = {{backgroundColor: "white",marginTop: "-7px",marginLeft:"0.5rem",marginRight: "0.1px"}}>
         <SalesCard 
         ImgSrc = {require('./SalesImg/blender.jpg')}
         Item= "2 in 1 Blender with Grinder"
         priceOne = "GH₵ 97"
         priceTwo = "GH₵ 115"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/fan.jpg')}
         Item= "Ceiling Fan"
         priceOne = "GH₵ 103"
         priceTwo = "GH₵ 120"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/kettle.jpg')}
         Item= "Scarlet Electric Kettle 2L"
         priceOne = "GH₵ 295"
         priceTwo = "GH₵ 312"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/RiceCooker.jpg')}
         Item= "Italian Rice Cooker with Steamer"
         priceOne = "GH₵ 114"
         priceTwo = "GH₵ 300"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/fish-scale.jpg')}
         Item= "Fish Scale Remover"
         priceOne = "GH₵ 30"
         priceTwo = "GH₵ 60"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/kettle2.jpg')}
         Item= "Electric Kettle"
         priceOne = "GH₵ 85"
         priceTwo = "GH₵ 120"
         />
     </div>

    </div> 
    )
}

export default SalesRowTwelve
