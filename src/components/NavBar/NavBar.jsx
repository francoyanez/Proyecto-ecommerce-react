import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>NoBrand</h3>
            <div>
                <button>Zapatillas</button>
                <button>Remeras</button>
                <button>Pantalones</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar