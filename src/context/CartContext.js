import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItems => cartItems.id === product.id)
        if(!isInCart) {
        return setCartListItems([...cartListItems, product])
    }
    }


    const data = {
        cartListItems,
        addProductToCart        
    }

    return(
        <CartContext.Provider  value={data}>            
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }