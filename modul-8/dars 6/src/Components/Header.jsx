import logo from "./assets/logo.png"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="" />
            <div className="links">
                <a href="">Home</a>
                <a href="">Product</a>
                <a href="">Faq</a>
                <a href="">Contact</a>
            </div>
        </header>
    )
}