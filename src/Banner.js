import React from 'react'

function Banner(props) {
    return (
       <div className="container-fluid"  style = {{marginLeft: "1.5rem",marginTop: "20px", borderRadius:"1%",borderBottom:"10px solid white",borderTop:"10px solid white",backgroundColor: "white",marginRight: "0.5rem"}}>
           <div className="row">
               <div className="col-lg-6" style = {{width: "670px"}}>
                   <img style = {{width: "100%", height:"300px"}} src={props.ImgSrc} alt=""/>
               </div>
               <div className="col-lg-6" style = {{width: "660px"}}>
                   <img style = {{width: "100%", height:"300px"}}  src={props.ImgSrc2} alt=""/>
               </div>
           </div>
       </div>
    )
}

export default Banner
