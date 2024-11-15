import { CartModel } from "../models/cart";

const getCart = (): CartModel[] => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const saveCart = (cart: CartModel[]): void => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const addToCart = (item: CartModel): void => {
  const cart = getCart();
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);
};

const removeFromCart = (productId: string): void => {
  const cart = getCart();
  const updatedCart = cart.filter((cartItem) => cartItem.id !== productId);
  saveCart(updatedCart);
};

const updateQuantity = (productId: string, quantity: number): void => {
  const cart = getCart();
  const item = cart.find((cartItem) => cartItem.id === productId);

  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      saveCart(cart);
    }
  }
};

const clearCart = (): void => {
  localStorage.removeItem("cart");
};

export { getCart, addToCart, updateQuantity, clearCart };
