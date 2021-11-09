export const addItem = (cartItems, item) => {
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

export const clearItem = (cartItems, item) =>
  cartItems.filter((cartItem) => cartItem.id !== item.id);

export const removeItem = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  // if there is only one item left remove it
  if (existingItem.quantity === 1) {
    return clearItem(cartItems, item);
  }
  // else decrease the quantity by 1
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
