import React from "react";
import logo from "./assets/Logo.png";
import reglogo from "./assets/Illustration.png";
import climg1 from "./assets/cl1.png"
import climg2 from "./assets/cl2.png"
import climg3 from "./assets/cl3.png"
import climg4 from "./assets/cl4.png"
import climg5 from "./assets/cl5.png"
import climg6 from "./assets/cl6.png"
import climg7 from "./assets/cl7.png"
import coming1 from "./assets/Icon (1).png"
import coming2 from "./assets/Icon (2).png"
import coming3 from "./assets/Icon (3).png"
import learnimg from "./assets/Frame 35.png"

export default function App() {
  function Header() {
    return (
      <header>
        <img src={logo} alt="" />
        <div className="menutab">
          <a href="">Home</a>
          <a href="">Features</a>
          <a href="">Community</a>
          <a href="">Blog.</a>
          <a href="">Pricing</a>
          <button>Register Now →</button>
        </div>
      </header>
    );
  }

  function RegisterPole() {
    return (
      <section className="reg">
        <div className="regsite">
          <h1>
            Lessons and insights <span>from 8 years</span>
          </h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button>Register</button>
        </div>
        <img src={reglogo} alt="" />
      </section>
    );
  }

  function Clients() {
    return (
      <section className="clins">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="spons">
          <img src={climg1} alt="" />
          <img src={climg2} alt="" />
          <img src={climg3} alt="" />
          <img src={climg4} alt="" />
          <img src={climg5} alt="" />
          <img src={climg6} alt="" />
          <img src={climg7} alt="" />
        </div>
      </section>
    )
  }


  function Community() {
    return (
      <section className="sitecom">
        <h1>Manage your entire community in a single system</h1>
        <div className="comm">
          <div className="box">
            <img src={coming1} alt="" />
            <h3>Membership Organisations</h3>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="box">
            <img src={coming2} alt="" />
            <h3>National Associations</h3>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="box">
            <img src={coming3} alt="" />
            <h3>Clubs And Groups</h3>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
      </section>
    )
  }

  function LearnAbout() {
    return (
      <section className="leans">
        <img src={learnimg} alt="" />
        <div className="lensite">
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <button>Learn More</button>
        </div>
      </section>
    )
  }

  return (
    <div>
      <Header />
      <RegisterPole />
      <Clients />
      <Community />
      <LearnAbout />
    </div>
  );
}
