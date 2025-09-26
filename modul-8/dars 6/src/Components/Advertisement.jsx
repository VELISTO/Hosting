import headimg from "./assets/header.png"
import mob from "./assets/moblieapp.png"

export default function AdverApp({ img, smh, bgh, np, hid }) {
    return (
        <div className="bbob">
            <div className="header" style={{backgroundImage: `url(${img})`}}>
                <div className="hcontent">
                    <span className="hhf" style={{ display: hid }}>{smh}</span>
                    <span className="hhs">{bgh}</span>
                    <span className="pp">{np}</span>
                </div>
                <div className="appsbl">
                    <button className="storeb pl">Playstore</button>
                    <button className="storeb ap">App Store</button>
                </div>
            </div>
            <div className="mob" style={{ display: hid }}>
                <div className="img"><img src={mob} alt="" /></div>
                <h1>How the app works</h1>
            </div>
        </div>
    )
}