import { useState } from 'react'
import logo from "./assets/logo.png"
import search from "./assets/search.png"
import imgcall from "./assets/pcall.png"
import play from "./assets/play.png"
import imgsec from "./assets/headimg.png"
import burger from "./assets/burger.png"
import sandwich from "./assets/sandwich.png"
import icecream from "./assets/icecream.png"
import juice from "./assets/juice.png"
import left from "./assets/leftp.png"
import right from "./assets/rightp.png"
import sel from "./assets/favsel.png"
import nsel from "./assets/favnsel.png"
import fsalad from "./assets/FattoushSalad.png"
import vsalad from "./assets/VegetableSalad.png"
import esalad from "./assets/EggSalad.png"
import star from "./assets/star.png"
import chief from "./assets/shef.png"
import frs from "./assets/frs.png"
import scn from "./assets/scn.png"
import thr from "./assets/thr.png"
import msalad from "./assets/msalad.png"
import mtime from "./assets/mtime.png"
import mcart from "./assets/mcart.png"
import mgift from "./assets/mgift.png"
import faceb from "./assets/facebook.png"
import instag from "./assets/instagram.png"
import twit from "./assets/twitter.png"
import yout from "./assets/youtube.png"

function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt="" />
      <div className='links'>
        <a className='link' href="">Home</a>
        <a className='link' href="">Menu🔽</a>
        <a className='link' href="">Services🔽</a>
        <a className='link' href="">Offers</a>
      </div>
      <div className='cont'>
        <img className='search' src={search} alt="" />
        <button className='contb'><img className='calli' src={imgcall} alt="" />Contact</button>
      </div>
    </header>
  )
}

function Intro() {
  return (
    <div className='intro'>
      <div className='intinf'>
        <h1>Dive into Delights Of Delectable <span className='infg'>Food</span></h1>
        <p className='infp'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
        <div className='his'>
          <button className='ordb'>Order Now</button>
          <span className='wv'>Watch Video</span>
          <button className='playb'><img src={play} alt="" /></button>
        </div>
      </div>
      <div>
        <div className='inrimg'><img src={imgsec} alt="" /></div>
      </div>
    </div>
  )
}

function PopularProducts() {
  return (
    <div className='pop'>
      <h2 className='cusf'>Customer Favorites</h2>
      <h1 className='cusp'>Popular Categories</h1>
      <div className='poprod'>
        <div className='prodp'>
          <div className='proimg'>
            <img src={burger} alt="" />
          </div>
          <h2>Main Dish</h2>
          <p>(86 dishes)</p>
        </div>
        <div className='prodp'>
          <div className='proimg'>
            <img src={sandwich} alt="" />
          </div>
          <h2>Break Fast</h2>
          <p>(12 break fast)</p>
        </div>
        <div className='prodp'>
          <div className='proimg'>
            <img src={icecream} alt="" />
          </div>
          <h2>Dessert</h2>
          <p>(48 dessert)</p>
        </div>
        <div className='prodp'>
          <div className='proimg'>
            <img src={juice} alt="" />
          </div>
          <h2>Browse All</h2>
          <p>(255 Items)</p>
        </div>
      </div>
    </div>
  )
}

function Menu() {
  return (
    <div className='menu'>
      <div className='slides'>
        <div className='smenu'>
          <h2 className='spec'>Special Dishes</h2>
          <h1 className='stnmenu'>Standout Dishes From Our Menu</h1>
        </div>
        <div className='slier'>
          <div className='left'><img src={left} alt="" /></div>
          <img className='right' src={right} alt="" />
        </div>
      </div>
      <div className='dishes'>
        <div className='dbox'>
          <div className='format'>
            <div></div>
            <img className='dishi' src={fsalad} alt="" />
            <div className='fov'><img src={sel} alt="" /></div>
          </div>
          <div className="finfor">
            <h2>Fattoush salad</h2>
            <p className='fp'>Description of the item</p>
            <div className='rates'>
              <p className='price'><span>$</span>24.00</p>
              <p className='rate'><img src={star} alt="" /> 4.9</p>
            </div>
          </div>
        </div>
        <div className='dbox'>
          <div className='format'>
            <div></div>
            <img className='dishi' src={vsalad} alt="" />
            <div className='fov'><img src={nsel} alt="" /></div>
          </div>
          <div className="finfor">
            <h2>Vegetable salad</h2>
            <p className='fp'>Description of the item</p>
            <div className='rates'>
              <p className='price'><span>$</span>26.00</p>
              <p className='rate'><img src={star} alt="" /> 4.6</p>
            </div>
          </div>
        </div>
        <div className='dbox'>
          <div className='format'>
            <div></div>
            <img className='dishi' src={esalad} alt="" />
            <div className='fov'><img src={nsel} alt="" /></div>
          </div>
          <div className='finfor'>
            <h2>Egg vegi salad</h2>
            <p className='fp'>Description of the item</p>
            <div className='rates'>
              <p className='price'><span>$</span>23.00</p>
              <p className='rate'><img src={star} alt="" /> 4.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutUs() {
  return (
    <div className='abo'>
      <div className='aboimg'>
        <img src={chief} alt="" />
      </div>
      <div className='aboinf'>
        <h2 className='spec'>Testimonials</h2>
        <h1 className='headabo'>What Our Customers Say About Us</h1>
        <p className='pabo'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
        <div className='feedb'>
          <div className='pp'>
            <img className='cuscom f' src={frs} alt="" />
            <img className='cuscom s' src={scn} alt="" />
            <img className='cuscom t' src={thr} alt="" />
          </div>
          <div>
            <h3>Customer Feedback</h3>
            <p className='pfed'><img src={star} alt="" /> 4.9  <span>(18.6k Reviews)</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Services() {
  return (
    <div className='serv'>
      <div className='servinf'>
        <h2 className='spec'>Our Story & Services</h2>
        <h1 className='headserv'>Our Culinary Journey And Services</h1>
        <p className='pserv'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
        <button className='exserv'>Explore</button>
      </div>
      <div className='grid'>
        <div className='grbox'>
          <img className='gimg' src={msalad} alt="" />
          <h2 className='mhead'>Catering</h2>
          <p className='mp'>Delight your guests with our flavors and  presentation</p>
        </div>
        <div className='grbox'>
          <img className='gimg' src={mtime} alt="" />
          <h2 className='mhead'>Fast delivery</h2>
          <p className='mp'>We deliver your order promptly to your door</p>
        </div>
        <div className='grbox'>
          <img className='gimg' src={mcart} alt="" />
          <h2 className='mhead'>Online Ordering</h2>
          <p className='mp'>Explore menu & order with ease using our Online Ordering </p>
        </div>
        <div className='grbox'>
          <img className='gimg' src={mgift} alt="" />
          <h2 className='mhead'>Gift Cards</h2>
          <p className='mp'>Give the gift of exceptional dining with Foodi Gift Cards</p>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div className='elinks'>
        <div className='blinks bimg'>
          <img className='flogo' src={logo} alt="" />
          <p className='ftp'>Savor the artistry where every dish is a culinary masterpiece</p>
        </div>
        <div className='blinks'>
          <h2>Useful links</h2>
          <a className='link fta' href="">About us</a>
          <a className='link fta' href="">Events</a>
          <a className='link fta' href="">Blogs</a>
          <a className='link fta' href="">FAQ</a>
        </div>
        <div className='blinks'>
          <h2>Main Menu</h2>
          <a className='link fta' href="">Home</a>
          <a className='link fta' href="">Offers</a>
          <a className='link fta' href="">Menus</a>
          <a className='link fta' href="">Reservation</a>
        </div>
        <div className='blinks'>
          <h2>Contact Us</h2>
          <a className='link fta' href="">example@email.com</a>
          <a className='link fta' href="">+64 958 248 966</a>
          <a className='link fta' href="">Social media</a>
        </div>
      </div>
      <div className='soc'>
        <div className='soclin'>
          <div className='apps gr'><img src={faceb} alt="" /></div>
          <div className='apps'><img src={instag} alt="" /></div>
          <div className='apps'><img src={twit} alt="" /></div>
          <div className='apps'><img src={yout} alt="" /></div>
        </div>
        <p className='rights'>Copyright © 2023 Dscode | All rights reserved</p>
      </div>
    </footer>
  )
}

export default function App() {

  return (
    <>
      <Header />
      <Intro />
      <PopularProducts />
      <Menu />
      <AboutUs />
      <Services />
      <Footer />
    </>
  )
}
