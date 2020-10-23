import React from 'react'
import Banner from './Banner'
import BannerTwo from './BannerTwo'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import SalesRowEight from './SalesRowEight'
import SalesRowEleven from './SalesRowEleven'
import SalesRowFive from './SalesRowFive'
import SalesRowFour from './SalesRowFour'
import SalesRowNine from './SalesRowNine'
import SalesRowOne from './SalesRowOne'
import SalesRowSeven from './SalesRowSeven'
import SalesRowSix from './SalesRowSix'
import SalesRowTen from './SalesRowTen'
import SalesRowThree from './SalesRowThree'
import SalesRowTwelve from './SalesRowTwelve'
import SalesRowTwo from './SalesRowTwo'
import Shelf from './Shelf'
import SidebarLeft from "./SidebarLeft"
import SidebarRight from './SidebarRight'

function App() {
    return (
        <div>
            <div className = "row">
             <Header/>
             <SidebarLeft/>
             <Carousel/>
             <SidebarRight/>
            </div>
            <div className = "container-fluid">
                <div className="row">
                  <Shelf 
                  Img = {require('./jmall.png')}
                  Text = "Official Stores"
                  />
                  <Shelf 
                  Img = {require('./JumiaGlobal.png')}
                  Text = "Jumia Global"
                 />
                  <Shelf 
                  Img = {require('./jumia-star.png')}
                  Text= "Food Fest"
                  />
                  <Shelf
                  Img = {require('./jumia-phone.png')}
                  Text = "Airtime & Bills"
                  />
                </div>
            </div>   
            <SalesRowOne 
            Header = "Top Selling Items"
            /> 
            <SalesRowTwo
            Header = "Collections You Will Love"
            />
            <SalesRowThree
            Header = "Daily Deals"
            />
            <Banner
            ImgSrc = {require('./SalesImg/cashBanner.jpg')}
            ImgSrc2 = {require('./SalesImg/DESK_1.jpg')}
             />
             <SalesRowFour
             Header = "Fashion Accesories " 
             />
             <SalesRowFive
             Header = "Computers & Accessories"
             />
             <SalesRowSix
             Header = "Forewin Official Store"
              />
              <SalesRowSeven
              Header = "Stay Connected"
              />
              <SalesRowEight
              Header = "Featured Categories" 
              />
              <Banner
              ImgSrc =  {require('./SalesImg/Deskk_coke.jpg')}
              ImgSrc2 = {require('./SalesImg/Deskk-audio.jpg')}
              />
              <SalesRowNine 
              Header = "Hair Care"
              />
              <BannerTwo 
              ImgSrc = {require('./SalesImg/Desk_tvss.jpg')}
              />
              <SalesRowTen 
              Header = "Top Brands"
              />
              <SalesRowEleven 
              Header = "Audio"
              />
              <BannerTwo 
              ImgSrc = {require('./SalesImg/Desk_rec.jpg')}
              />
              <SalesRowTwelve
              Header = "Small Appliances" 
              />
              <Banner 
              ImgSrc = {require('./SalesImg/pic-left.jpg')}
              ImgSrc2 = {require('./SalesImg/pic-right.jpg')}
              />
              <Footer/>
           </div>   
    )
}

export default App
