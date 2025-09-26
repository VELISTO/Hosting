export default function Main({ lor, img, hh, bhh, pp }) {
    if (lor === "left") {
        return (
            <div className="main">
                <img src={img} alt="" />
                <div className="maincont">
                    <h3>{hh}</h3>
                    <h1>{bhh}</h1>
                    <p>{pp}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="main">
                <div className="maincont">
                    <h3>{hh}</h3>
                    <h1>{bhh}</h1>
                    <p>{pp}</p>
                </div>
                <img src={img} alt="" />
            </div>
        )
    }
}