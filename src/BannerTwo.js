import React from 'react'

function BannerTwo(props) {
    return (
        <div className="container-fluid"  style = {{marginLeft: "1.5rem",marginTop: "20px", borderRadius:"1%",borderBottom:"10px solid white",borderTop:"10px solid white",backgroundColor: "white",marginRight: "0.5rem"}}>
           <div className="row">
               <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12" style = {{width: "1300px"}}>
                   <img style = {{width: "100%", height:"300px"}} src={props.ImgSrc} alt=""/>
               </div>
            
           </div>
       </div>
    )
}

export default BannerTwo
