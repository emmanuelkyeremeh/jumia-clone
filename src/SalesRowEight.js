import React from 'react'
import SalesCardTwo from "./SalesCardTwo"

function SalesRowEight(props) {
    return (
        <div className="container-fluid" style = {{backgroundColor: "white", marginTop: "20px",marginLeft: "1.5rem",marginRight: "5rem"}}>
             <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header}</h2>
             <div className="row">
                <SalesCardTwo
                ImgSrc = {require('./SalesImg/smartphone.png')}
                Item = "Mobile Phones"
                 /> 
                  <SalesCardTwo
                ImgSrc = {require('./SalesImg/small-appliances.png')}
                Item = "S. Appliances"
                 /> 
                  <SalesCardTwo
                ImgSrc = {require('./SalesImg/laptops.png')}
                Item = "Laptops"
                 /> 
                 <SalesCardTwo
                ImgSrc = {require('./SalesImg/tvs.png')}
                Item = "Televisions"
                 /> 
                  <SalesCardTwo
                ImgSrc = {require('./SalesImg/large-appliances.png')}
                Item = "L. Appliances"
                 /> 
                  <SalesCardTwo
                ImgSrc = {require('./SalesImg/shirt-trouser.png')}
                Item = "Men's Fashion"
                 />  
             </div> 
             <div className="row">
                <SalesCardTwo
                ImgSrc = {require('./SalesImg/dress.png')}
                Item = "Women's Fashion"
                 />   
                <SalesCardTwo
                ImgSrc = {require('./SalesImg/groceries.png')}
                Item = "Groceries"
                 />   
                 <SalesCardTwo
                ImgSrc = {require('./SalesImg/personal-care.png')}
                Item = "Beauty"
                 />   
                 <SalesCardTwo
                ImgSrc = {require('./SalesImg/gaming.png')}
                Item = "Gaming"
                 />   
                 <SalesCardTwo
                ImgSrc = {require('./SalesImg/fragrance.png')}
                Item = "Fragrances"
                 />   
                 <SalesCardTwo
                ImgSrc = {require('./SalesImg/audio.png')}
                Item = "Audio"
                 />   
             </div>
        </div>
    )
}

export default SalesRowEight
