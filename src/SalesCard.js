import React from 'react'

function SalesCard(props) {
    return (
        <div id= "salesCard" className="container col-lg-2 col-md-4 col-sm-6 col-xs-6" style = {{lineHeight:"1.2rem",borderRadius: "1%"}}>
          <img src={props.ImgSrc} style = {{width: "185px",height: "185px"}} alt=""/>
          <p>{props.Item}</p>
          <span style = {{fontSize: "1rem", fontWeight:"bold"}}>{props.priceOne}</span> <br/>
          <span style = {{textDecorationLine: "line-through",fontSize:"0.8rem"}}>{props.priceTwo}</span> 
        </div>
    )
}

export default SalesCard
