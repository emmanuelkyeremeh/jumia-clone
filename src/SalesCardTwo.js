import React from 'react'

function SalesCardTwo(props) {
    return (
        <div id= "salesCard" className="container col-lg-2 col-md-4 col-sm-6 col-xs-6" style = {{lineHeight:"1.2rem",borderRadius: "1%"}}>
             <img src={props.ImgSrc} style = {{width: "185px",height: "106px"}} alt=""/>
             <p style = {{textAlign: "center"}}>{props.Item}</p>
        </div>     
    )
}

export default SalesCardTwo
