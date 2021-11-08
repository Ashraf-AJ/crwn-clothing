export const add = (cartItems, item) => {
  const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...item, quantity: 1 }];
  }
};
