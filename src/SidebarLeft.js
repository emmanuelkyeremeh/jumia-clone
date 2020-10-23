import React from 'react'

function SidebarLeft() {
    return (
        <div id= "SidebarLeft" className= "container col-lg-2" style = {{backgroundColor: "white",marginTop: "20px",borderRadius: "1%",paddingLeft:"40px", paddingTop: "10px",fontSize: "13.5px",paddingBottom: "15px"}}>
          
          <i className="fas fa-apple-alt"></i> Supermarket <br/>
          <br/>
          <i class="fas fa-mobile-alt"></i> Phones & Tablets <br/>
          <br/>
          <i class="fas fa-heartbeat"></i> Health & Beauty <br/>
          <br/>
          <i class="fas fa-home"></i> Home & Office <br/>
          <br/>
          <i class="fas fa-tv"></i> Electronics <br/>
          <br/>
          <i class="fas fa-desktop"></i> Computing <br/>
          <br/>
          <i class="fas fa-tshirt"></i> Fashion <br/>
          <br/>
          <i class="fas fa-dumbbell"></i> Sporting Goods <br/>
          <br/>
          <i class="fas fa-baby"></i> Baby Products <br/>
          <br/>
          <i class="fas fa-gamepad"></i> Gaming <br/>
          <br/>
          <i class="fas fa-car-alt"></i> Automobile <br/>
          <br/>
          <i class="fas fa-bars"></i>  Other Categories


          
        </div>
    )
}

export default SidebarLeft
