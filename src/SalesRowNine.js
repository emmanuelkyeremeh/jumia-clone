import React from 'react'
import SalesCard from "./SalesCard"

function SalesRowNine(props) {
    return (
        <div className="container-fluid" style = {{marginTop:"20px"}}>
        <div className="container-fluid" style = {{backgroundColor: "#FFA500",marginLeft: "0.5rem",marginRight:       "5rem"}}>
         <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header} <span style ={{float: "right",marginRight: "10px"}}> See All <i class="fas fa-arrow-right"></i></span></h2>  
        </div>

     <div className="row" style = {{backgroundColor: "white",marginTop: "-7px",marginLeft:"0.5rem",marginRight: "0.1px"}}>
         <SalesCard 
         ImgSrc = {require('./SalesImg/hair-cream1.jpg')}
         Item= "Wonder Grow Jamaican Conditioner"
         priceOne = "GH₵ 26"
         priceTwo = "GH₵ 35"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/hair-cream2.jpg')}
         Item= "Mgagrowth  Free Hair Growth"
         priceOne = "GH₵ 17"
         priceTwo = "GH₵ 25"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/hair-cream3.jpg')}
         Item= "Protective Mega growth Hair Conditioner"
         priceOne = "GH₵ 33"
         priceTwo = "GH₵ 45"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/hair-cream4.jpg')}
         Item= "Protective Hair Growth Hair Conditioner"
         priceOne = "GH₵ 35"
         priceTwo = "GH₵ 45"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/beard-growth.jpg')}
         Item= "Kirkland Beard Growth Cream"
         priceOne = "GH₵ 47"
         priceTwo = "GH₵ 58"
         />
         <SalesCard 
         ImgSrc = {require('./SalesImg/hair-dryer.jpg')}
         Item= "Nova 2 Set Hair Straightener"
         priceOne = "GH₵ 50"
         priceTwo = "GH₵ 60"
         />
     </div>

    </div>
    )
}

export default SalesRowNine
