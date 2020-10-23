import React from 'react'
import SalesCard from './SalesCard'

function SalesRowThree(props) {
    return (
        <div className="container-fluid" style = {{marginTop:"20px"}}>
           <div className="container-fluid" style = {{backgroundColor: "#FFA500",marginLeft: "0.5rem",marginRight: "5rem"}}>
            <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header} <span style ={{float: "right",marginRight: "10px"}}> See All <i class="fas fa-arrow-right"></i></span></h2>  
            </div>

            <div className="row" style = {{backgroundColor: "white",marginTop: "-7px",marginLeft:"0.5rem",marginRight: "0.1px"}}>
                <SalesCard
                ImgSrc = {require('./SalesImg/phone2.jpg')} 
                Item = "TCL 10L Android Smartphone"
                priceOne = "GH₵ 1499"
                priceTwo =  "GH₵ 2000"
             />
               <SalesCard
                ImgSrc = {require('./SalesImg/android-phone.jpg')} 
                Item = "X-INOVA Magic 11 Dual SIM"
                priceOne = "GH₵ 274"
                priceTwo =  "GH₵ 355"
             />
              <SalesCard
                ImgSrc = {require('./SalesImg/1.jpg')} 
                Item = "Wonder Gro Jamaican Castor Oil"
                priceOne = "GH₵ 26"
                priceTwo =  "GH₵ 30"
             />
              <SalesCard
                ImgSrc = {require('./SalesImg/Indian-hemp.jpg')} 
                Item = "Wonder Grow Indian Hemp Hair and Scalp Treatment"
                priceOne = "GH₵ 1499"
                priceTwo =  "GH₵ 2000"
             />
             <SalesCard
                ImgSrc = {require('./SalesImg/cream.jpg')} 
                Item = "Garnier Pure Active 3 in 1 Wash"
                priceOne = "GH₵ 1499"
                priceTwo =  "GH₵ 2000"
             />
              <SalesCard
                ImgSrc = {require('./SalesImg/vodka.jpg')} 
                Item = "Absolut Vanilla Flavoured Vodka"
                priceOne = "GH₵ 98"
                priceTwo =  "GH₵ 130"
             /> 
            </div>
           
        </div>
       

    )
}

export default SalesRowThree
