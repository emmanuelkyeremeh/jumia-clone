import React from 'react'

function Carousel() {
    return (
        <div className="container col-lg-8" style = {{height: "224.83px",marginTop: "20px", borderRadius: "1%"}}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require('./slider_nivea.jpg')} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('./mc_JumiaMall_tuesday_ATM.jpg')} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('./innova_1.jpg')} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

        </div>
    )
}

export default Carousel
