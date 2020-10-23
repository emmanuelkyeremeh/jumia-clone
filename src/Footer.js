import React from 'react'

function Footer() {
    return (
        <div className="container-fluid" style = {{backgroundColor: "#323232",color: "#c7c7cd",fontSize: "0.75rem",paddingTop: "30px",paddingBottom: "30px"}}>
           <div id = "footer" className="container">
               <div className="row">
                   <div className="col-lg-3 col-md-6">
                      <h4  style = {{fontSize: "1rem"}}>LET US HELP YOU</h4>
                      <ul>
                          <li> Help Center</li>
                          <li>How to buy on Jumia</li>
                          <li>Delivery timelines and fees</li>
                          <li>Return Policy</li>
                          <li>Corporate and Bulk Purchases</li>
                          <li>Report a Product</li>
                      </ul>
                   </div>
                   <div className="col-lg-3 col-md-6">
                     <h4  style = {{fontSize: "1rem"}}>ABOUT JUMIA GHANA</h4>
                     <ul>
                         <li>About us</li>
                         <li>Testimonials</li>
                         <li>Jumia careers</li>
                         <li>Terms and Conditions</li>
                         <li>Privacy Policy</li>
                         <li>Stay informed about Corona virus</li>
                         <li>Stay Safe</li>
                         <li>Black Friday</li>
                     </ul>
                   </div>
                   <div className="col-lg-3 col-md-6">
                     <h4  style = {{fontSize: "1rem"}}>MAKE MONEY WITH JUMIA</h4>
                     <ul>
                         <li>Sell on Jumia</li>
                         <li>Service charges</li>
                         <li>Become a Sales Consultant</li>
                         <li>Become a Logistics Service Partner</li>
                     </ul>
                   </div>
                   <div className="col-lg-3">
                      <h4 style = {{fontSize: "1rem"}}>JUMIA INTERNATIONAL</h4>
                      <ul>
                          <li>Algerie</li>
                          <li>Côte d'Ivoire</li>
                          <li>Egypt</li>
                          <li>Kenya</li>
                          <li>Maroc</li>
                      </ul>
                   </div>
               </div>
               <div className="row">
                   <div className="col-lg-3">
                       <h4 style = {{fontSize: "1rem"}} >JOIN US ON</h4>
                       <i class="fab fa-2x fa-facebook-f"></i> &nbsp; &nbsp; <i class="fab fa-2x fa-instagram"></i>&nbsp; &nbsp; <i class="fab fa-2x fa-twitter"></i> 
                   </div>
                   <div className="col-lg-3">
                       <h4 style = {{fontSize: "1rem"}}  >PAYMENT METHODS</h4>
                       <i class="fas fa-2x fa-wallet"></i>&nbsp;&nbsp;<i class="fab fa-2x fa-cc-visa"></i>&nbsp;&nbsp;<i class="fab fa-2x fa-cc-mastercard"></i>
                   </div>
               </div>
           </div>            
        </div>
    )
}

export default Footer
