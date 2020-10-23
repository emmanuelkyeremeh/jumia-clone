import React from 'react'
import SalesCardTwo from "./SalesCardTwo"

function SalesRowTen(props) {
    return (
        <div className="container-fluid" style = {{backgroundColor: "white", marginTop: "20px",marginLeft: "1.5rem",marginRight: "5rem"}}>
        <h2 style = {{ fontSize: "1.25rem",padding: "10px"}}>{props.Header}</h2>
        <div className="row">
           <SalesCardTwo
           ImgSrc = {require('./SalesImg/peak-d.png')}
           Item = ""
            /> 
             <SalesCardTwo
           ImgSrc = {require('./SalesImg/icona-d.jpg')}
           Item = ""
            /> 
             <SalesCardTwo
           ImgSrc = {require('./SalesImg/nivea-d.png')}
           Item = ""
            /> 
            <SalesCardTwo
           ImgSrc = {require('./SalesImg/infinix-d.png')}
           Item = ""
            /> 
             <SalesCardTwo
           ImgSrc = {require('./SalesImg/indomie-d.png')}
           Item = ""
            /> 
             <SalesCardTwo
           ImgSrc = {require('./SalesImg/uniliver-d-v2.png')}
           Item = ""
            />  
        </div> 
        <div className="row">
           <SalesCardTwo
           ImgSrc = {require('./SalesImg/coca-cola-d.jpg')}
           Item = ""
            />   
           <SalesCardTwo
           ImgSrc = {require('./SalesImg/voltic-d.jpg')}
           Item = ""
            />   
            <SalesCardTwo
           ImgSrc = {require('./SalesImg/maybelline-d.png')}
           Item = ""
            />   
            <SalesCardTwo
           ImgSrc = {require('./SalesImg/tecno-d.png')}
           Item = ""
            />   
            <SalesCardTwo
           ImgSrc = {require('./SalesImg/guinness-ghana-d.png')}
           Item = ""
            />   
            <SalesCardTwo
           ImgSrc = {require('./SalesImg/cowbell-d.png')}
           Item = ""
            />   
        </div>
   </div>
    )
}

export default SalesRowTen
