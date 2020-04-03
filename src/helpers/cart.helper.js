export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        ({ id, ...other }) => id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } :
                cartItem
        });
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};