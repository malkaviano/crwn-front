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

export const removeItemFromCart = (cartItems, cartItemIdToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemIdToRemove);
}

export const increaseCartItemQuantity = (cartItems, cartItemIdToIncrease) => {
    return cartItems.map(cartItem => {
        return cartItem.id === cartItemIdToIncrease ?
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem
    });
}

export const decreaseCartItemQuantity = (cartItems, cartItemIdToIncrease) => {
    const cart = cartItems.map(cartItem => {
        return cartItem.id === cartItemIdToIncrease ?
            { ...cartItem, quantity: cartItem.quantity - 1 } :
            cartItem
    });

    return cart.filter(cartItem => cartItem.quantity > 0);
}