import React from 'react'
import SBB_food_fest from "./SBB_food_fest.jpg"

function SidebarRight() {
    return (
        <div  className="container col-lg-2" style = {{backgroundColor: "#f5f5f5",padding: "5px",marginTop: "10px",borderRadius: "1%"}}>
           <div id = "SidebarRight" className=" col-lg-12" style = {{backgroundColor: "white",height: "270px",borderRadius:"1%",paddingTop: "20px"}}> 
           <div className="row">
                <div className="col-lg-2">
                  <img src={require('./SalesImg/quality-trust-2-(1).png')} style = {{width:"40px",height: "40px"}} alt=""/>
                </div>
                <div className="col-lg-10" style = {{lineHeight:"5px",textAlign: "left",paddingLeft: "30px"}}>
                  <h6>Quality</h6> 
                  You can trust
                </div>
           </div>
           <br/>
           <div className="row">
               <div className="col-lg-2">
                   <img src={require('./SalesImg/SM-Icons-RETURNS1-(1).png')} style = {{width:"40px",height: "40px"}} alt=""/>
               </div>
               <div className="col-lg-10" style = {{lineHeight:"5px",textAlign: "left",paddingLeft: "30px"}} >
                   <h6>EASY RETURNS</h6> 
                   Up to 15 days
               </div>
           </div>
           <br/>
           <div className="row">
               <div className="col-lg-2">
                   <img src={require('./SalesImg/contact-us-hpv3.png')} style = {{width:"40px",height: "40px"}} alt=""/>
               </div>
               <div id= "row-clone" className="col-lg-10"  style = {{lineHeight:"5px",textAlign: "left",paddingLeft: "30px",paddingTop:"10px"}}>
                   <h6>CONTACT US</h6>
               </div>
           </div>
               
           </div>   
           <br/>
            

        

            <div id ="food-fest" className=" container-fluid col-lg-12 col-md-3 col-sm-4 col-xs-4" style = {{background: `url(${SBB_food_fest})`,backgroundRepeat:"no-repeat",height: "184px",borderRadius: "1%"}}>
               
            </div>

        </div>
    )
}

export default SidebarRight
