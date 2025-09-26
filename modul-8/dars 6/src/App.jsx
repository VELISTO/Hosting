import { useState } from 'react'

import fimg from "./Components/assets/first.png"
import simg from "./Components/assets/second.png"
import timg from "./Components/assets/third.png"
import himg from "./Components/assets/header.png"
import footimg from "./Components/assets/footer.png"

import Header from './Components/Header'
import AdverApp from './Components/Advertisement'
import Main from './Components/Main'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <AdverApp img={himg} smh="Food app" bgh={"Why stay hungry when you can order form Bella Onojie"} np="Download the bella onoje’s food app now on" />
      <Main lor="left" img={fimg} hh="Create an account" bhh="Create/login to an existing account to get started" pp="An account is created with your emailand a desired password" />
      <Main img={simg} hh="Explore varieties" bhh="Shop for your favorites meal as e dey hot." pp="Shop for your favorite meals or drinks and enjoy while doing it." />
      <Main lor="left" img={timg} hh="Checkout" bhh="When you done check out and get it delivered." pp="When you done check out and get it delivered with ease." />
      <AdverApp img={footimg} hid="none" bgh={"Download the app now."} np="Available on your favorite store. Start your premium experience now" />
      <Footer />
    </>
  )
}
