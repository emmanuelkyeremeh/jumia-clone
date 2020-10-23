import React from 'react'
import SalesCard from './SalesCard'

function SalesRowFour(props) {
    return (
        <div className="container-fluid" style = {{marginTop:"20px"}}>
            <div className="container-fluid" style = {{backgroundColor: "#FFA500",marginLeft: "0.5rem",marginRight:       "5rem"}}>
             <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header} <span style ={{float: "right",marginRight: "10px"}}> See All <i class="fas fa-arrow-right"></i></span></h2>  
            </div>

         <div className="row" style = {{backgroundColor: "white",marginTop: "-7px",marginLeft:"0.5rem",marginRight: "0.1px"}}>
             <SalesCard 
             ImgSrc = {require('./SalesImg/necklace.jpg')}
             Item= "Heart Shaped Pendant Necklace"
             priceOne = "GH₵ 14"
             priceTwo = "GH₵ 17"
             />
             <SalesCard 
             ImgSrc = {require('./SalesImg/half-necklace.jpg')}
             Item= "2-Piece Pendant Necklace Silver"
             priceOne = "GH₵ 7"
             priceTwo = "GH₵ 22"
             />
             <SalesCard 
             ImgSrc = {require('./SalesImg/neckalces.jpg')}
             Item= "Choker Necklace Set"
             priceOne = "GH₵ 9"
             priceTwo = "GH₵ 35"
             />
             <SalesCard 
             ImgSrc = {require('./SalesImg/girl-necklace.jpg')}
             Item= "Women Multi-Layered Necklace"
             priceOne = "GH₵ 14"
             priceTwo = "GH₵ 17"
             />
             <SalesCard 
             ImgSrc = {require('./SalesImg/necklaceTwo.jpg')}
             Item= "Crystal Bottle Necklace"
             priceOne = "GH₵ 4"
             priceTwo = "GH₵ 36"
             />
             <SalesCard 
             ImgSrc = {require('./SalesImg/ring.jpg')}
             Item= "Fashion Adjustable Couple Rings"
             priceOne = "GH₵ 18"
             priceTwo = "GH₵ 27"
             />
         </div>

        </div>
    )
}

export default SalesRowFour
