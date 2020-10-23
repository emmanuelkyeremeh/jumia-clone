import React from 'react'

function Header() {
    return (
       <header className=" container-fluid" style = {{paddingTop: "20px",backgroundColor: "white",overflow: "hidden",position:"sticky", zIndex: "1000"}} >
           <div className="row">
               <div id = "image" className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                   <img src={require('./jumia-logo.png')} alt="" style = {{width: "150px",height:"150px",padding:"0px",marginTop: "-3rem",paddingLeft: "20px", marginBottom: "-2rem"}}/>
               </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <form className="form-inline">
                        <div className="form-group mx-sm-3 mb-2">
                          <input type="text" className="form-control" id="inputPassword2" placeholder="Search products brands and Categories" style = {{width: "30rem"}}/>
                        </div>
                        <button id ="mybtn" type="submit" className="btn btn-primary mb-2">SEARCH</button>
                    </form>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12" id = "headerIcon" style = {{paddingTop: "10px"}}>
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-xs-4">
                        <i class="far fa-user"></i> Login
                        </div>
                        <div className="col-lg-3 col-sm-4 col-xs-4">
                        <i class="far fa-question-circle"></i> Help
                        </div>
                        <div className="col-lg-3 col-sm-4 col-xs-4">
                        <i class="fas fa-shopping-cart"></i> Cart
                        </div>
                    </div>
                </div>
           </div>
        
       </header>
    )
}

export default Header
