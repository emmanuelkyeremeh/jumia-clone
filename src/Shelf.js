import React from 'react'

function Shelf(props) {
    return (
            <div className="container-fluid col-lg-3 col-md-6 col-sm-6 col-xs-12" style = {{backgroundColor: "#f5f5f5"}}>
                <div id = "shelf" className="row col-sm-12 col-md-12 " style = {{paddingTop:"10px",paddingBottom:"10px",width: "310px", backgroundColor: "white",marginTop: "20px",marginLeft:"8px",borderRadius: "1%"}}>  
                     <div className="col-lg-3">
                         <img src={props.Img} style={{width: "40px",height: "40px"}} alt=""/>
                     </div>
                     <div className="col-lg-9" style = {{paddingTop: "5px"}}>
                        {props.Text} 
                     </div>
                </div>
            </div> 
                

                
    
    )
}

export default Shelf
