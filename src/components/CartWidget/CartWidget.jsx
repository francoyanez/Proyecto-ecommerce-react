import cart from "./assets/cart.svg"

const CartWidget = () => {
    return(
        <div>
        <img style={{ width:50, height:48}} src={cart} alt="cart-widget" />
        0
        </div>
    )
}

export default CartWidget