import React from 'react'
import SalesCardTwo from './SalesCardTwo'

function SalesRowTwo(props) {
    return (
        <div className="container-fluid" style = {{backgroundColor: "white", marginTop: "20px",marginLeft: "1.5rem",marginRight: "5rem"}}>
             <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header}</h2>
             <div className="row">
                <SalesCardTwo
                ImgSrc = {require('./SalesImg/phone.jpg')}
                Item = "Pimp my Phone"
                 /> 
                  <SalesCardTwo
                ImgSrc = {require('./SalesImg/game.jpg')}
                Item = "Game On"
                 /> 
                  <SalesCardTwo
                ImgSrc = {require('./SalesImg/furniture.png')}
                Item = "Stay Organized"
                 /> 
                 <SalesCardTwo
                ImgSrc = {require('./SalesImg/cloth.jpg')}
                Item = "Mr. Fashionista"
                 /> 
                  <SalesCardTwo
                ImgSrc = {require('./SalesImg/speaker.png')}
                Item = "Stay on Beat"
                 /> 
                  <SalesCardTwo
                ImgSrc = {require('./SalesImg/fitness.png')}
                Item = "Get Sporty"
                 />  
             </div> 
             <div className="row">
                <SalesCardTwo
                ImgSrc = {require('./SalesImg/appliances.jpg')}
                Item = "Home Need"
                 />   
                <SalesCardTwo
                ImgSrc = {require('./SalesImg/Wcloth.jpg')}
                Item = "Women's Clothing"
                 />   
                 <SalesCardTwo
                ImgSrc = {require('./SalesImg/cosmetics.jpg')}
                Item = "My House My Home"
                 />   
                 <SalesCardTwo
                ImgSrc = {require('./SalesImg/Classic.jpg')}
                Item = "Classic Looks"
                 />   
                 <SalesCardTwo
                ImgSrc = {require('./SalesImg/earphones.jpg')}
                Item = "Goodbye Wires"
                 />   
                 <SalesCardTwo
                ImgSrc = {require('./SalesImg/see-more.png')}
                Item = ""
                 />   
             </div>
        </div>
    )
}

export default SalesRowTwo
