import React from 'react'
import SalesCard from './SalesCard'

function SalesRowOne(props) {
    return (
        <div className="container-fluid" style = {{backgroundColor: "white", marginTop: "10px",marginLeft: "1.5rem",marginRight: "5rem"}}>
          <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header}</h2> 
          <div className="row">
              <SalesCard
              ImgSrc = {require('./SalesImg/shoes.jpg')}
              Item = "Lace Up Canvas Sneakers - Multicolor"
              priceOne = "GH₵ 40"
              priceTwo = "GH₵ 85"
              />
               <SalesCard
              ImgSrc = {require('./SalesImg/shoes2.jpg')}
              Item = "Low Top Lace Up Athetic Sneakers"
              priceOne = "GH₵ 44"
              priceTwo = "GH₵ 92"
              />
               <SalesCard
              ImgSrc = {require('./SalesImg/deskjet.jpg')}
              Item = "HP Deskjet 2130 All-in-One Printer "
              priceOne = "GH₵ 339"
              priceTwo = "GH₵ 390"
              />
               <SalesCard
              ImgSrc = {require('./SalesImg/watch.jpg')}
              Item = "M3 Digital Smart Watch"
              priceOne = "GH₵ 21"
              priceTwo = "GH₵ 43"
              />
               <SalesCard
              ImgSrc = {require('./SalesImg/speaker.jpg')}
              Item = "Nasco NASD 200 8 Watts Bluetooth Speaker"
              priceOne = "GH₵ 186"
              priceTwo = "GH₵ 250"
              />
               <SalesCard
              ImgSrc = {require('./SalesImg/nailclipper.jpg')}
              Item = "Chaoba 2 Set of Professional Nail Clipper"
              priceOne = "GH₵ 81"
              priceTwo = "GH₵ 95"
              />
          </div>
        </div>
    )
}

export default SalesRowOne
