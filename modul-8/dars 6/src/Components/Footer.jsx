import logo from "./assets/logo.png"
import twit from "./assets/twitter.png"
import faceb from "./assets/facebook.png"
import instag from "./assets/instagram.png"

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt="" />
            <div className="soc">
                <img src={twit} alt="" />
                <img src={faceb} alt="" />
                <img src={instag} alt="" />
            </div>
            <p>Copywright 2020 Bella Onojie.com</p>
        </footer>
    )
}